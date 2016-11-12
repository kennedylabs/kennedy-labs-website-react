module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./dist/bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.scss?$/, loaders: ["style", "css", "sass"] }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "office-ui-fabric": "officeUiFabric",
    "office-ui-fabric-react": "officeUiFabricReact"
  }
};
