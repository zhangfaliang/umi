# 海外项目C端M站

## 快速开发

1. 在config/router.config.js 添加路由，（component路径为字符串，根目录为pages,参考用例）
1. 在src/pages/xxx 添加组件（第一步约定的component的路径）
1. 在src/pages/xxx 下添加models目录 为当前路由下的models （参考用例）
1. 在src/models/ 设置全局models 
1. 在src/locales 在注册国际化配置文件
    * 通过`import { formatMessage, FormattedMessage }umi/locale` 
    * formatMessage渲染string FormattedMessage渲染组件
    * eg `formatMessage({id: 'WELCOME_TO_UMI_WORLD'}, {name: '小伙子'})`
    * eg `<FormattedMessage id="WELCOME_TO_UMI_WORLD" values={{ name: '小伙子' }} />`
1. 在config/manifest.json与pages/document.ejs 去匹配manifest相关属性
    * config下manifest 是常规解决安卓机pwa的相关属性
    * document.ejs 是解决apple的相关pwa的属性 具体可以参考一下MDN pwa相关知识

---

## 目录导航

1. [技术栈](#技术栈)
1. [配置要求](#配置要求)
1. [安装](#安装)
1. [组织结构](#组织结构)
1. [路由](#路由)
1. [部署](#部署)
1. [单元测试](#单元测试)

## 技术栈

* 构建工具

|类型|库|
| --- | --- |
|脚手架|[umi](https://github.com/umijs/umi)|
|打包工具|[webpack4](https://webpack.docschina.org/)|
|动态加载|[umi/dynamic](https://umijs.org/zh/api/#%E6%80%A7%E8%83%BD)基于[react-loadable](https://github.com/jamiebuilds/react-loadable)|

* 数据及状态管理工具
  
|类型|库|
|---|---|
|异步请求|[redux-saga]()|
|持久化存储|[reselect]()|
|状态管理|[redux]()|
|数据处理工具|[lodash]()|
|时间处理工具|[moment]()|
|模拟数据|[mock]()|
|http请求|[axios]()|
|websocket请求|[socket.io-client]()|


* UI工具

|类型|库|
|---|---|
|组件库|[react]()|
|路由|[react-router4]()|
|高清方案|[umi-hd]()|
|国际化方案|[intl]()|
|自定义html的head|[react-helmet]()|
|样式类名|[classnames]()|
|React组件进入或离开DOM时执行CSS转换和动画|[react-transition-group]()|
|弹出层|[react-modal]()|
|轮播图|[react-slick  slick-carousel]()|


* 质量与优化工具

|类型|库|
|---|---|
|浏览器兼容|[babel-polyfill]()|
|浏览器兼容|[umi-plugin-polyfill]()|
|代码检测|[eslint](http://eslint.org)|
|代码提交前处理|[lint-staged]()|
|代码美化|[prettier]()|
|环境变量|[betterScripts]()|
|打包分析|[analyze]()|
|离线应用|[pwa]()|
|错误监控|[@sentry/browser]()|

* 文档

|类型|库|
|---|---|
|组件展示|[storybook](https://storybook.js.org)|
|storybook添加配置项|[@storybook/addon-options](@storybook/addon-options)|
|storybook展示区样式|[@sambego/storybook-styles](@sambego/storybook-styles)|
|storybook展示JSX|[storybook-addon-jsx](storybook-addon-jsx)|

## 配置要求
*  node 版本是 8 或以上

推荐使用 yarn 管理 npm 依赖

## 安装
```bash
$ git clone ssh://git@git.8win.com:10022/i18n-FE/i18n-h5-game.git
$ cd i18n-h5-game
```

```bash
$ yarn install    
$ yarn start:dev     
```
成功提示
```bash
DONE  Compiled successfully in 176ms                                                                                           11:28:24


  App running at:
  - Local:   http://localhost:7000/
  - Network: undefined

```
|`yarn  <script>`|Description|
|-------------------|-----------|
|`start:dev`|dev运行项目 `localhost:7000`|
|`build:dev`|dev输出静态文件 (`~/dist`).|
|`start:qa`|qa运行项目 `localhost:7000`|
|`build:qa`|qa输出静态文件 (`~/dist`).|
|`start:prod`|prod运行项目 `localhost:7000`|
|`build:prod`|prod输出静态文件 (`~/dist`).|
|`analyze`| 查看bundle资源大小|


yarn 启动命令

## 组织结构

```
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json
```
具体请参考 [umi的路径约定](https://umijs.org/zh/guide/app-structure.html)

## 路由
具体请参考 [umi的路由](https://umijs.org/zh/guide/router.html)


## 部署
`yarn build`

### 静态部署
使用nginx, 将路由请求指向 `~/dist/index.html`

### 环境变量
具体请参考 [umi的环境变量](https://umijs.org/zh/guide/env-variables.html#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE)

### 多语言
具体请参考 [umi的locale](https://umijs.org/zh/plugin/umi-plugin-react.html#locale)

### 时区
具体参考  [moment](http://momentjs.cn/timezone/docs/)

---
# umi bug总结

> ### 关于 react-tap-event-plugin 不引用说明

https://github.com/facebook/react/issues/11689

https://github.com/zilverline/react-tap-event-plugin/issues/121
该作者对于16.4以上版本不在维护支持 react已有 `<Tappable />`的组件


> ### 高清解决方案
umi-hd 的vw+flex 方式

> ### 安卓机自带浏览器（原因缺少国际化缺少intl补丁）
添加 `babel-polyfill` |  `intl` 依赖


> ### 执行 git commit 命令自动格式化代码（依赖于husky lint-staged prettier）
[prettier自定义](https://prettier.io/docs/en/options.html)

Prettier是一个固定的代码格式化程序，支持JavaScript，CSS和JSON。使用Prettier，您可以自动格式化您编写的代码，以确保项目中的代码样式。有关详细信息，[请参阅Prettier的GitHub页面](https://github.com/prettier/prettier)，[并查看此页面以查看其实际效果。](https://prettier.io/)
>Prettier是一个固定的代码格式化程序。它通过解析代码并使用自己的规则重新打印它来强制执行一致的样式，这些规则考虑了最大行长度，并在必要时包装代码。

# 单元测试
[jest官网https://jestjs.io/docs/en/getting-started](https://jestjs.io/docs/en/getting-started)    
[enzyme官网https://airbnb.io/enzyme/](https://airbnb.io/enzyme/)

### 运行测试方法
```
// package.json
"test": "umi test --coverage --watchAll"
```

### 通用方法

1. 引入待测试组件   
    ```
    import Request from './request';
    ```
2. 使用`describe`描述测试套件-通常为一个组件/类     
    ```
    describe('Request组件', async () => {
    
    
    });
    ```
3. 在测试套件内使用`it`写测试用例-一个用例一调it     
    ```
    it('使用Request.axios.get获取数据', async () => {
    
    
    });
   ```
4. 在测试用例里使用`expect`写测试断言-可以写多条
    ```
    expect.assertions(4); // 明确断言数量
    ···
    expect(status).toBe(200);
    ```

### 断言验证常用匹配器
|匹配器|说明|
|---|---|
|.not   |  非   |
|.toBe  |  等于，测试具体的某一个值 |
|.toBeCloseTo  |  float浮点等于 |
|.toBeGreaterThan / toBeGreaterThanOrEqual  |  大（等）于，测试具体的某一个值 |
|.toBeLessThan / toBeLessThanOrEqual  |  小（等）于，测试具体的某一个值 |
|.toEqual   |  常用于对象，通过递归检查对象或数组的每个字段  |
|.toMatch   |   字符串/正则 |
|.toBeInstanceOf    |   验证为对象的实例    |
|.toContain |   数组类型匹配，数组包含某个值    |
|.toHaveProperty    |   对象包含某属性  |

### 组件UI测试
snapshot可以测试到组件的渲染结果是否符合预期，预期就是指你上一次录入保存的结果，toMatchSnapshot方法会去帮你对比这次将要生成的结构与上次的区别
```
import { Tooltip } from 'antd';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

it('basic use', () => {
    const wrapper = render(
      <Tooltip title="prompt text">
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
})
```
需要注意的是一个足够健壮的测试应该覆盖到所有的渲染请况，也就是如果你的组件根据props传入的参数渲染结果可能不同，这样的情况必须写多个测试案例都覆盖到。

enzyme有3种渲染方式：render、mount、shallow，先了解下区别。

render、mount、shallow的区别
render采用的是第三方库Cheerio的渲染，渲染结果是普通的html结构，对于snapshot使用render比较合适。

shallow和mount对组件的渲染结果不是html的dom树，而是react树，如果你chrome装了react devtool插件，他的渲染结果就是react devtool tab下查看的组件结构，而render函数的结果是element tab下查看的结果。

这些只是渲染结果上的差别，更大的差别是shallow和mount的结果是个被封装的ReactWrapper，可以进行多种操作，譬如find()、parents()、children()等选择器进行元素查找；state()、props()进行数据查找，setState()、setprops()操作数据；simulate()模拟事件触发。

shallow只渲染当前组件，只能能对当前组件做断言；mount会渲染当前组件以及所有子组件，对所有子组件也可以做上述操作。一般交互测试都会关心到子组件，我使用的都是mount。但是mount耗时更长，内存啥的也都占用的更多，如果没必要操作和断言子组件，可以使用shallow。

### 交互测试

主要利用simulate()接口模拟事件，实际上simulate是通过触发事件绑定函数，来模拟事件的触发。触发事件后，去判断props上特定函数是否被调用，传参是否正确；组件状态是否发生预料之中的修改；某个dom节点是否存在是否符合期望。

```
import {mount} from 'enzyme';

describe('Enzyme Mount', function () {
  it('Add a new Todo', function () {
    let app = mount(<App/>);
    let todoLength = app.find('li').length;
    let addInput = app.find('input').get(0);
    addInput.value = 'Todo Four';
    app.find('.add-button').simulate('click');
    expect(app.find('li').length).to.equal(todoLength + 1);
  });
});
```

### Enzyme常用方法
|匹配器|说明|
|---|---|
|get(index) |   返回指定位置的子组件的DOM节点   |
|at(index)  |   返回指定位置的子组件    |
|first()    |   返回第一个子组件   |
|last() |   返回最后一个子组件  |
|type() |   返回当前组件的类型  |
|text() |   返回当前组件的文本内容  |
|html() |   返回当前组件的HTML代码形式  |
|props()    |   返回根组件的所有属性    |
|prop(key)  |   返回根组件的指定属性    |
|state([key])   |   返回根组件的状态    |
|setState(nextState)    |   设置根组件的状态    |
|setProps(nextProps)    |   设置根组件的属性    |

### 具体示例
```javascript
// request.test.js
import Request from './request';

describe('Request组件', async () => {
  it('使用Request.axios.get获取数据', async () => {
    expect.assertions(4);
    Request.setAxiosConfig({
      headers: null,
    });
    const data = await Request.axios.get(
      'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.min.js',
      {
        params: {
          dataType: '01',
          data: {},
          k: 'cn010001',
          s: 'a371938458264a57845d425f5f3d2ab9',
          t: '1538719168683',
          sportType: 1,
          groupType: 1,
        },
      }
    );
    const status = data.status;

    expect(status).not.toBe(404);
    expect(status).not.toBe(405);
    expect(status).toBe(200);
    expect(data.data).toMatch('!function(t,e){');
  });

  it('使用Request.axios.get获取数据错误时', async () => {
    expect.assertions(1);
    Request.setAxiosConfig({
      headers: { 'X-Custom-Header': 'foobar' },
    });
    try {
      const data = await expect(
        Request.axios.get('https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.min.js')
      );
      expect(data).toThrow();
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it('使用Request.ws未填写URL', () => {
    expect.assertions(2);
    expect(() => Request.ws()).toThrow();
    expect(() => Request.ws('')).toThrow();
  });

  it('使用Request.ws时传入的第二个参数不是数组', () => {
    expect.assertions(6);
    expect(() => Request.ws('cn010001', '123')).toThrow();
    expect(() => Request.ws('cn010001', 123)).toThrow();
    expect(() => Request.ws('cn010001', null)).toThrow();
    expect(() => Request.ws('cn010001', false)).toThrow();
    expect(() => Request.ws('cn010001', {})).toThrow();
    expect(() => Request.ws('cn010001', () => {})).toThrow();
  });

  it('使用Request.ws时没有传入url', done => {
    expect.assertions(1);
    Request.ws('cn010001', [
      {
        callback: async data => {
          expect(data).toBeInstanceOf(Error);
          done();
        },
      },
    ]);
  });

  it('使用Request.ws发送socket获取http数据', done => {
    expect.assertions(2);
    Request.setAxiosConfig({
      headers: null,
    });
    Request.setSocketConfig({
      url: 'https://trad-pusher-ws.8win.com/match', // socket地址
      version: 'V3', // 数据版本
      fuserId: '', //合作商用户Id,可针对用户分组推送投注上限、中奖消息通知及业务消息通知 该项可为空
      source: '0201', // 来源 0201 H5 IOS
      sign:
        '0.MM0V3uuY6ON/mtutQ3d19tw55vbhD8sYqwwrUBYrWoIzAS4lUoxD34YZUQl1asanCH2jknqsiwlOE4oLYA40ew==', // 服务端调用该参数可为空，初始化签名验证，通过gameWSUrl命令获取
    });
    Request.ws('cn010001', [
      {
        url: 'https://trad-pusher.8win.com/match/v3',
        dataType: '01',
        data: '',
        sportType: 1,
        groupType: 0,
        groupName: '2018-10-06',
        callback: async data => {
          expect(data.data).toHaveProperty('dataType');
          expect(data.data).toHaveProperty('data');
          done();
        },
      },
    ]);
  });
});



```

```javascript
// button.test.js
import Button from '.';
import { render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Button组件', async () => {
  it('basic use', () => {
    expect.assertions(1);
    const wrapper = render(<Button prefixCls={null} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('withPropsDefaultActive', () => {
    expect.assertions(1);
    const wrapper = render(<Button defaultActive={!!1} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('withPropsDisabled', () => {
    expect.assertions(1);
    const wrapper = render(<Button disabled={!!1} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('withPropsActive', () => {
    expect.assertions(1);
    const wrapper = render(<Button active={!!1} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('withPropsPrefixCls', () => {
    const wrapper = render(<Button prefixCls="prefixCls" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('withPropsPrefixClsNull', () => {
    expect.assertions(1);
    const wrapper = render(<Button prefixCls={null} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('withPropsBtnText', () => {
    expect.assertions(1);
    const wrapper = render(<Button btnText="btnText" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('withPropsClickCheckBtn', () => {
    expect.assertions(1);
    const clickCheckBtn = () => 'clickCheckBtn';
    const wrapper = render(<Button clickCheckBtn={clickCheckBtn} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('checkShouldComponentUpdate', () => {
    expect.assertions(1);
    const button = mount(<Button />);
    button.setProps({
      active: !!1
    });
    expect(button.state('activeFlag')).toBe(button.prop('active'));
  });

  it('clickDefaultCheckBtnButton', () => {
    expect.assertions(1);
    const button = mount(<Button />);
    const clickCheckBtn = button.prop('clickCheckBtn');
    const click = jest.fn(clickCheckBtn);

    button.simulate('click');
    expect(click()).toBe('click');
  });

  it('clickCustomCheckBtnButton', () => {
    expect.assertions(1);
    const clickCheckBtn = () => 'clickCheckBtn';
    const click = jest.fn(clickCheckBtn);
    const button = mount(<Button clickCheckBtn={click} />);
    button.simulate('click');
    expect(click).toHaveReturnedWith('clickCheckBtn');
  });

  it('withPropsDisabledAndClickButton', () => {
    expect.assertions(2);
    const clickCheckBtn = () => 'clickCheckBtn';
    const click = jest.fn(clickCheckBtn);
    const button = mount(<Button clickCheckBtn={click} disabled={!!1} />);
    button.simulate('click');
    expect(click).not.toHaveReturned();
    expect(click).not.toHaveReturnedWith('clickCheckBtn');
  });
});

```
