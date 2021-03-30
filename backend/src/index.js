import express from 'express';
import treeData from './treeData';
const app = express();
app.set('port', process.env.PORT || 3001);

app.get('/getTree', (req, res) => {
  console.log('treeeee');
  res.status(200).json(treeData);
});

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
