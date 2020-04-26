const path=require('path');
const HTMLPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/app.js',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'public')
    },
    
    plugins:[
        new HTMLPlugin({
            template:'./src/index.html'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],
      },
}