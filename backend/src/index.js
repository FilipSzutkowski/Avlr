import express from 'express';
import db from './db/index';
import treeData from './treeData';
import { checkJwt } from './middleware/verifyAccessToken';

const app = express();
app.set('port', process.env.PORT || 3001);
app.use(express.json());
//app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

let parent1 = {
  id: 1,
  regNr: 'Parent 1',
  gender: 'male',
  parents: [],
  siblings: [],
  spouses: [],
  children: [{ id: 3, type: 'blood' }],
};
let parent2 = {
  id: 2,
  regNr: 'Parent 2',
  gender: 'female',
  parents: [],
  siblings: [],
  spouses: [],
  children: [{ id: 3, type: 'blood' }],
};
let child = {
  id: 3,
  regNr: 'Parent 3',
  gender: 'male',
  parents: [
    { id: 1, type: 'blood' },
    { id: 2, type: 'blood' },
  ],
  siblings: [],
  spouses: [],
  children: [],
};
let familyTrees = [
  { id: 0, name: 'noe', race: 'XDDD', treeData: [parent1, parent2, child] },
];
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

app.get('/getFamilytrees', checkJwt, (req, res) => {
  res.status(200).json(familyTrees);
});

app.post('/newTree', checkJwt, (req, res) => {
  const newTree = req.body.tree;
  const newFamilyTrees = [
    ...familyTrees,
    { id: familyTrees.length + 1, ...newTree, treeData: [] },
  ];
  console.log(newTree);
  familyTrees = newFamilyTrees;
  res.status(200).json(familyTrees);
});

app.post('/newIndividual', checkJwt, (req, res) => {
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
  }
  familyTrees[oldTreeIndex] = {
    ...oldTree,
    treeData: [
      ...oldTreeTreeData,
      { id: parseInt(oldTreeTreeData.length + 1), ...newIndividual },
    ],
  };
  res.status(200).json(familyTrees);
});

// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
