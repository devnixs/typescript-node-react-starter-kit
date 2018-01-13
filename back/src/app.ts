import * as express from 'express';
import * as compression from 'compression'; // compresses requests
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as lusca from 'lusca';
import * as dotenv from 'dotenv';
import * as flash from 'express-flash';
import * as path from 'path';
import * as bluebird from 'bluebird';
import * as fs from 'fs';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.example' });

// Controllers (route handlers)
import * as apiController from './controllers/api';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 5555);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * API examples routes.
 */
app.get('/api', apiController.getApi);

const isProduction = process.env.NODE_ENV === 'production';
console.log('Environment : ', isProduction);
app.get('*', (req, res) => {
  fs.readFile(path.join(__dirname, '../index.html'), 'utf8', function(err, contents) {
    if (isProduction) {
      const newContent = contents.replace(/"dist\/public\/build\//g, '"/build/');
      res.send(newContent);
    } else {
      const newContent = contents
        .replace('href="styles/app.css"', 'href="http://localhost:8080/styles/app.css"')
        .replace('src="vendors.bundle.js"', 'src="http://localhost:8080/vendors.bundle.js"')
        .replace('src="app.bundle.js"', 'src="http://localhost:8080/app.bundle.js"');
      res.send(newContent);
    }
  });
});
module.exports = app;
