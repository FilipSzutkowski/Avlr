import express from 'express';
import path from 'path';
import db from './db/index';
import treeData from './treeData';
import { checkJwt } from './middleware/verifyAccessToken';
import TreesServices from './services/TreesServices';
import userIDFromHeader from './utilities/userIDFromHeader';

const app = express();
const TreesService = new TreesServices();
app.set('port', process.env.PORT || 3001);
app.use(express.json());
//app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

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

app.get('/getFamilytrees', checkJwt, async (req, res) => {
  const userId = userIDFromHeader(req.headers.userid);
  const familyTrees = await TreesService.GetTrees(userId);
  if (familyTrees instanceof Error) {
    res.status(500).json(familyTrees);
  }
  res.status(200).json(familyTrees);
});

app.post('/newTree', checkJwt, async (req, res) => {
  const newTree = req.body.tree;
  const userId = userIDFromHeader(req.headers.userid);
  const familyTrees = await TreesService.NewTree(userId, newTree);
  if (familyTrees instanceof Error) {
    res.status(500).json(familyTrees);
  }
  res.status(200).json(familyTrees);
});

app.post('/newIndividual', checkJwt, async (req, res) => {
  const newIndividual = req.body.individual;
  const treeId = req.body.id;
  const userId = userIDFromHeader(req.headers.userid);
  const familyTrees = await TreesService.NewIndividual(
    newIndividual,
    treeId,
    userId
  );
  if (familyTrees instanceof Error) {
    res.status(500).json(familyTrees);
  }
  res.status(200).json(familyTrees);
});

app.delete('/deleteTree', checkJwt, async (req, res) => {
  const treeIndex = req.body.treeIndex;
  const userId = userIDFromHeader(req.headers.userid);
  const familyTrees = await TreesService.DeleteTree(treeIndex, userId);

  if (familyTrees instanceof Error) {
    res.status(500).json(familyTrees);
  }
  res.status(200).json(familyTrees);
});

app.delete('/deleteIndividual', checkJwt, async (req, res) => {
  const treeIndex = req.body.treeIndex;
  const individIndex = req.body.individIndex;
  const userId = userIDFromHeader(req.headers.userid);
  const familyTrees = await TreesService.DeleteIndivid(
    treeIndex,
    individIndex,
    userId
  );

  if (familyTrees instanceof Error) {
    res.status(500).json(familyTrees);
  }
  res.status(200).json(familyTrees);
});

app.post('/editTree', checkJwt, async (req, res) => {
  const treeIndex = req.body.treeIndex;
  const familyTree = req.body.tree;
  const userId = userIDFromHeader(req.headers.userid);
  const familyTrees = await TreesService.EditTree(
    familyTree,
    treeIndex,
    userId
  );

  if (familyTrees instanceof Error) {
    res.status(500).json(familyTrees);
  }
  res.status(200).json(familyTrees);
});

app.post('/editIndivid', checkJwt, async (req, res) => {
  const treeIndex = req.body.treeIndex;
  const editedIndivid = req.body.editedIndividual;
  const individIndex = req.body.individIndex;
  const userId = userIDFromHeader(req.headers.userid);
  const familyTrees = await TreesService.EditIndividual(
    editedIndivid,
    individIndex,
    treeIndex,
    userId
  );

  if (familyTrees instanceof Error) {
    res.status(500).json(familyTrees);
  }
  res.status(200).json(familyTrees);
});

// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
