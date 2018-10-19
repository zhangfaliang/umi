import Axios from 'axios';
import io from 'socket.io-client';

/**
 * axios配置项
 * https://www.npmjs.com/package/axios#request-config
 */
const AxiosConfig = {
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000
  // headers: {'X-Custom-Header': 'foobar'}
};

/**
 * socket初始化配置项
 * http://wiki.8win.com/pages/viewpage.action?pageId=9405652#id-%E7%AB%A0%E9%B1%BC%E5%BD%A9%E7%A5%A8%E6%BB%9A%E7%90%83%E6%B8%B8%E6%88%8F%E7%AC%AC%E4%B8%89%E6%96%B9%E5%90%88%E4%BD%9CAPIv2.5-_Toc518585026
 */
const SocketConfig = {
  url: 'https://trad-pusher-ws.8win.com/match', // socket地址
  version: 'V3', // 数据版本
  fuserId: '', //合作商用户Id,可针对用户分组推送投注上限、中奖消息通知及业务消息通知 该项可为空
  source: '0201', // 来源 0201 H5 IOS
  sign:
    '0.MM0V3uuY6ON/mtutQ3d19tw55vbhD8sYqwwrUBYrWoIzAS4lUoxD34YZUQl1asanCH2jknqsiwlOE4oLYA40ew==', // 服务端调用该参数可为空，初始化签名验证，通过gameWSUrl命令获取
};

let axios = _createAxios(AxiosConfig);
let socket = _createSocket(SocketConfig);

axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    throw new Error(error.stack);
  }
);

/**
 * 创建http请求
 *
 * @returns 一个自定配置的axios
 */
function _createAxios(config) {
  return Axios.create(config);
}

/**
 * 创建websocket请求
 *
 * @returns 初始化完成的socket
 */
function _createSocket({ url, ...params }) {
  const socket = io(url, {
    transports: ['websocket'],
  });
  socket.on('connect', function() {
    socket.emit(
      'init',
      {
        ...params,
      },
      data => {
        // console.log('init', data);
      }
    );
  });
  return socket;
}

/**
 * 根据socket推送的t,s,k获取数据
 *
 * @param {object} { url, params }
 * @returns
 */
function _getRequestDataAfterSocket({ url, params }) {
  return axios
    .get(url, {
      params,
    })
    .then(function(response) {
      return response;
    });
}

/**
 * 监听socoket并获得数据
 *
 * @param {string} k
 * @param {object} { url, callback, ...params }
 */
function _listenSocket(k, obj) {
  const { url, callback, ...params } = obj || /* istanbul ignore next */ {};

  if (!url) {
    return callback(new Error('调用ws方法没有传入url'));
  }
  socket.emit('match', { k }, async data => {
    const response = await _getRequestDataAfterSocket({
      url,
      params: {
        ...params,
        ...data,
      },
    });
    callback(response);
  });
  /* istanbul ignore next */
  socket.on(k, async data => {
    const response = await _getRequestDataAfterSocket({
      url,
      params: {
        ...params,
        ...data.data,
      },
    });
    callback(response);
  });
}

/**
 * 根据socket获取http接口数据
 *
 * @param {string} k - 指定的房间，数据索引键
 * @param {array} arrayData 接收到推送的消息时发送http请求的参数 [{url, callback, ...res}]
 * url - http请求地址
 * callback - 获取http请求数据后的回调，接收请求数据作为参数
 * ...res - 发送http请求时的传参
 */
function ws(k, arrayData = []) {
  if (!k || k === '') {
    throw new Error('调用ws方法传入的第一个参数k，不能为空');
  }
  if (!Array.isArray(arrayData)) {
    throw new Error('调用ws方法没有传入的第二个参数必须是数组');
  }

  // 取消之前的监听
  socket.off(k);

  arrayData.map(item => _listenSocket(k, item));
}

/**
 * 设置http请求
 *
 * @param {object} conf
 */
function setAxiosConfig(conf) {
  axios = _createAxios(Object.assign({}, AxiosConfig, conf));
}

/**
 * 设置socket请求
 *
 * @param {object} conf
 */
function setSocketConfig(conf) {
  socket.close();
  socket = _createSocket(Object.assign({}, SocketConfig, conf));
}

const Request = {
  axios,
  ws,
  setAxiosConfig,
  setSocketConfig,
};

export default Request;
export { Request };
