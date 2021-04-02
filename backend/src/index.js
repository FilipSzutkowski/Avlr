import express from 'express';
import treeData from './treeData';
const app = express();
app.set('port', process.env.PORT || 3001);

console.clear();

const familyTrees = [
  { id: 1, name: 'Dvergveddere', treeData },
  { id: 2, name: 'Forvokste Veddere', treeData },
];
console.log(familyTrees);

app.get('/getFamilytrees', (req, res) => {
  res.status(200).json(familyTrees);
});

app.get('/getTree', (req, res) => {
  res.status(200).json(treeData);
});

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
