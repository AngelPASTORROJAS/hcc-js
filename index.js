const APP = require('./app/Constant/Global');


const DataBaseBuilder = require('./app/DataBaseBuilder');
DataBaseBuilder.createApp(APP.PATH_DATABASE);

const app = require('./app/app');
app.listen(APP.PORT, () => {
  console.log(`Serveur démarré en http://localhost:${APP.PORT}`);
});