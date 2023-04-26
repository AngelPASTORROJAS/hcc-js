const {APP} = require('./app/Constant/Global');

const app = require('./app/app');

app.listen(APP.PORT, () => {
  console.log(`Serveur démarré en http://localhost:${APP.PORT}`);
});