const webpack = require('webpack');
const config = require('./webpack.config.dev.js');


webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error("Failed to run webpack");
        if (err) {
            console.error(err);
        } else if (stats.compilation.errors) {
            console.error(stats.compilation.errors[0]);
        }
    }
});
