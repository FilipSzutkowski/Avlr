import express from 'express';
import db from './db/index';
import treeData from './treeData';
import jwt from 'express-jwt';
import jwtAuthz from 'express-jwt-authz';
import jwksRsa from 'jwks-rsa';

const app = express();
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://avlr.eu.auth0.com/.well-known/jwks.json`,
  }),

  audience: 'http://localhost:3001',
  issuer: [`https://avlr.eu.auth0.com/`],
  algorithms: ['RS256'],
});

app.set('port', process.env.PORT || 3001);
app.use(express.json());
//app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

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

app.get('/protected', checkJwt, (req, res) => {
  res.json({ message: 'You need to be authed to see this.' });
});

app.get('/unProtected', (req, res) => {
  res.json({ message: 'You dont need to be authed to see this.' });
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
