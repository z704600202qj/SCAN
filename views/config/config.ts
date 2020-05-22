import routes from './routes'
import theme from './theme'

export default {
    hash: true,
    history: { type: 'hash' },
    title: '闪讯',
    theme,
    routes,
    dynamicImport: {
        loading: '@/components/Loading',
    },
    targets: {
        ie: 11,
    },
    cssLoader: {
        localsConvention: 'camelCase'
    },
    chainWebpack: function (config:any) {
        config.module
        .rule('svg')
        .test(/.svg(\?v=\d+.\d+.\d+)?$/)
        .use([
            {
                loader: 'babel-loader'
            },
            {
                loader: '@svgr/webpack',
                options: {
                    babel: false,
                    icon: true
                }
            }
        ])
        .loader(require.resolve('@svgr/webpack'));
    },
    // plugins: ['umi-plugin-mpa'],
    styles: [],
    antd: {},
  
    dva: {
        immer: true,
        hmr: true,
    },
    devServer: {
        port: 8010
    },
    proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        }
      },
};