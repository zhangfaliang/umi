# 错误上报
上报错误查看地址 https://sentry.io/djoz/javascript-4f/

只有系统 throw new Error()时，错误才能上报，
与request.js结合在请求发生错误是也抛出错误上报
如果想对图片上报错误需如下：

```javascript
const a = new Image();
a.src='http://as.jpg';
a.onerror = () => {
  throw new Error('image error');
};
```
