import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import manifest from './manifest.json';
import path from 'path';

export default {
  plugins: [
    ['umi-plugin-react', {
      dva: {
        hmr: true,
        immer: true,
      },
      locale: {
        enable: true, // default false
        default: 'zh-CN', // default zh-CN
      },
      serviceWorker: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/pageLoading/index',
      },
      dll: false,
      // pwa: {
      //   workboxOptions: {
      //     importWorkboxFrom: 'local'
      //   }
      // },
      pwa: true,
      fastClick: true,
      hd: true,
      hardSource: false,
    }],
    'umi-plugin-polyfill'
  ],
  routes: pageRoutes,
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    services: path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'src/utils'),
    layouts: path.resolve(__dirname, 'src/layouts'),
  },
  proxy: {
    '/api': {
      'target': process.env.API_HOST,
      'changeOrigin': true,
      'pathRewrite': {
        '^/api': ''
      }
    }
  },
  disableCSSModules: false,
  urlLoaderExcludes: [/.svg$/],
  chainWebpack: webpackplugin,
  hash: true,
  copy: [{
    from: 'src/assets/manifest',
    to: 'manifest'
  }, {
    from: 'config/manifest.json',
    to: 'manifest/manifest.json'
  }],
  manifest,
};