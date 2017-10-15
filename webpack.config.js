module.exports = {
    entry: {
    	"tab/menu":"./src/tab/menu/menu.js",
		"sp/menu":"./src/sp/menu/menu.js"
    },
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js"
    },
    module: {
	    loaders: [
	      { test: /\.css$/, loader: 'style-loader!css-loader' },
	      { test: /\.vue$/, loader: 'vue-loader' },
	      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        loader: 'url-loader'
	      }
	    ]
    }
};