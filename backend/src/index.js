import express from 'express';
import db from './db/index';
import treeData from './treeData';
const app = express();
app.set('port', process.env.PORT || 3001);
app.use(express.json());
//app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

console.clear();

let familyTrees = [{ id: 0, name: 'noe', race: 'XDDD', treeData: [] }];
console.log(familyTrees);
app.get('/', (req, response) => {
  db.query('SELECT * FROM test', null, (err, res) => {
    if (err) {
      response.send(err);
      return;
    }
    response.send(res.rows[0]);
    return;
  });
});

app.get('/getFamilytrees', (req, res) => {
  res.status(200).json(familyTrees);
});

app.post('/newTree', (req, res) => {
  const newTree = req.body.tree;
  const newFamilyTrees = [
    ...familyTrees,
    { id: familyTrees.length + 1, ...newTree, treeData: [] },
  ];
  console.log(newTree);
  familyTrees = newFamilyTrees;
  res.status(200).json(familyTrees);
});

app.post('/newIndividual', (req, res) => {
  const newIndividual = req.body.individual;
  const treeId = req.body.id;
  const oldTreeIndex = familyTrees.findIndex((tree) => tree.id == treeId);
  const oldTree = { ...familyTrees[oldTreeIndex] };
  const oldTreeTreeData = oldTree.treeData;
  let parents = newIndividual.parents.length > 0 ? newIndividual.parents : null;

  if (parents) {
    const parentsIndexes = parents.map((parent) => {
      return oldTreeTreeData.findIndex(
        (individual) => individual.id == parent.id
      );
    });

    parents = parentsIndexes;
    console.log(`parentIndexes: ${parentsIndexes}`);
  }

  console.log(oldTree);
  console.log(oldTreeTreeData);

  familyTrees[oldTreeIndex] = {
    ...oldTree,
    treeData: [
      ...oldTreeTreeData,
      { id: oldTreeTreeData.length + 1, ...newIndividual },
    ],
  };

  console.log(familyTrees);

  res.status(200).json(familyTrees);
});

// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
