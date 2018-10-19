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

  it('使用Request.axios.get获取数据错误时', done => {
    expect.assertions(1);
    console.warn('以下模拟axios错误，将会有一条报错，忽略即可');
    Request.axios.get('').then(
      () => {},
      reject => {
        expect(reject).toBeInstanceOf(Error);
        done();
      }
    );
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
