const app = require('./app');

app.listen(process.env.APP_PORT || 3333, () => {
  return console.log('Server listening');
});
