module.exports = {
    module: {
      rules: [
        {
            test: /\.(pdf|gif|png|jpe?g|svg)$/,
            use: 'file-loader?name=[path][name].[ext]',
            include: paths
          }          
      ],
    },
  };  