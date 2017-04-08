import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

// eslint-disable-next-line
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    // eslint-disable-next-line
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
    // hard coded for testing. Replace with db or api
    res.json([
        {'id': 1, 'firstName': 'Nana', 'lastName': 'Who'},
        {'id': 2, 'firstName': 'Eric', 'lastName': 'Cares'},
        {'id': 3, 'firstName': 'Serv', 'lastName': 'Luke'}
    ]);
});

app.listen(port, err => {
    if (err) {
        // eslint-disable-next-line
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
