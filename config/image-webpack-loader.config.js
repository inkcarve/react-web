module.exports = {
            test: /\.(png|jpg|gif|woff|woff2|svg|ttf|eot)$/,
            use: [
            'file-loader?name=dist/file/[name]-[hash:6].[ext]',
             {
        loader: 'image-webpack-loader',
        query: {
          mozjpeg: {
              progressive: true,
              quality: '80',
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 3,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    },
          pngquant: {
            quality: '65-90',
            speed: 4
          }
        }
      }
            ]
      // ,include: path.resolve( '/img' )
        // }, {
        //     test: /\.svg$/,
        //     loader: 'svg-inline-loader?name=/[name].[ext]'
        }