//import * as express from 'express';
//import { join } from 'path';
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

//Node uses require syntac
//import { join } from 'path';
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const express = require('express');
const { join } = require('path');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const PORT = process.env.PORT || 8080;

const staticRoot = join(process.cwd(), 'dist', 'angular-social');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/angular-social-server/main');
const app = express();

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', staticRoot);

// handle static file requests
app.get('*.*', express.static(staticRoot));

// handle angular requests
app.get('*', (req, res) => {
    res.render('index', { req })
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
