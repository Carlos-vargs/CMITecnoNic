const path = require("path");
const glob = require("glob");

// pages-2 es solamente de prueba gradualmente se eliminara 
// y quedara dentro de pages 
module.exports = {
  mode: "development", // Cambiar a 'production' ahorita no si
  entry: {
      app: "./Scripts/app.js",
      components: ["./Scripts/libs/components.js", "./Scripts/libs/forms.js"],
      pages: glob.sync("./Scripts/pages/**/*.js"),
      cmi: "./Scripts/pages-2/cmi.js",
    },
  output: {
    filename: "[name].bundle.js", // Nombre dinámico basado en la entrada
    path: path.resolve(__dirname, "Scripts/dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    preferRelative: true,
    extensions: [".js", ".css"],
  },
  devServer: {
    open: true,
  },
};
