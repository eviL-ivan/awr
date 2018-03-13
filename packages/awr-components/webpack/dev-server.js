module.exports = () => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 8090,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
);
