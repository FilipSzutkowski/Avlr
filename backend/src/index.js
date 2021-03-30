import express from 'express';
const app = express();
app.set('port', process.env.PORT || 3001);
app.use(express.static('public'));

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
