// 错误上报
import '@/utils/report';
// 解决安卓浏览器 白屏问题（locale 出现问题）
import 'babel-polyfill';
import 'intl';
// hd方案 以 vw + flex 方式
import vw from 'umi-hd/lib/vw';
vw(100, 750);
