const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy,
    disableEsLint
} = require('customize-cra');

const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias(
        {
            assets: path.resolve(__dirname, './src/assets'),
            '@': path.resolve(__dirname, './src/components'),
            utils: path.resolve(__dirname, './src/utils'),
            pages: path.resolve(__dirname, './src/pages')
        }
       ),
    addDecoratorsLegacy(),
    disableEsLint()

)