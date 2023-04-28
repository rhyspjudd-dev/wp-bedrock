// webpack.mix.js

let mix = require('laravel-mix');

const themename = 'wp-bedrock';


mix.js('src/js/app.js', 'web/app/themes/' + themename + '/assets/js');
mix.sass('src/scss/app.scss', 'web/app/themes/' + themename + '/assets/css')

mix.minify('web/app/themes/' + themename + '/assets/js/app.js');
mix.minify('web/app/themes/' + themename + '/assets/css/app.css');