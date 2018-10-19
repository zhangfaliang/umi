# 请求Request

```javascript
import Request from '@/utils/request';
```

- http请求

```javascript
Request.axios.get(url[, config])
Request.axios.post(url[, data[, config]])
Request.axios.put(url[, data[, config]])
Request.axios.delete(url[, config])

如：
Request.axios.get('https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.min.js', {
  params: {
    dataType: '01',
    data: {},
    k: 'cn010001',
    s: 'a371938458264a57845d425f5f3d2ab9',
    t: '1538719168683',
    sportType: 1,
    groupType: 1
  }
});
```

- socket请求

```javascript
/**
 * 根据socket获取http接口数据
 *
 * @param {string} k - 指定的房间，数据索引键
 * @param {array} arrayData 接收到推送的消息时发送http请求的参数 [{url, callback, ...res}] 对于一个房间，可以同时发出不同url地址的请求和操作
 * url - http请求地址
 * callback - 获取http请求数据后的回调，接收请求数据作为参数
 * ...res - 发送http请求时的传参
 */
Request.ws('cn010001', [
  {
    url: 'https://trad-pusher.8win.com/matchGroup/v3',
    dataType: '01',
    data: "",
    sportType: 1,
    groupType: 0,
    callback: (data) => {
      console.log('1', data);
    }
  },
  {
    url: 'https://trad-pusher.8win.com/match/v3',
    dataType: '01',
    data: "",
    sportType: 1,
    groupType: 0,
    groupName: '2018-10-06',
    callback: (data) => {
      console.log('2', data);
    }
  },

]);
```

- 设置http

```javascript
/**
 * 设置http请求
 *
 * @param {object} config
 */
Request.setAxiosConfig({
  headers: {'X-Custom-Header': 'foobar'}
});
```

- 设置socket

```javascript
/**
 * 设置socket请求
 *
 * @param {object} config
 */
Request.setSocketConfig({
  url: 'https://trad-pusher-ws.8win.com/match', // socket地址
  version: 'V3', // 数据版本
  fuserId: '', //合作商用户Id,可针对用户分组推送投注上限、中奖消息通知及业务消息通知 该项可为空
  source: '0201', // 来源 0201 H5 IOS
  sign: '0.MM0V3uuY6ON/mtutQ3d19tw55vbhD8sYqwwrUBYrWoIzAS4lUoxD34YZUQl1asanCH2jknqsiwlOE4oLYA40ew==' // 服务端调用该参数可为空，初始化签名验证，通过gameWSUrl命令获取
});
```
