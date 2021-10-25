const Router = require('koa-router');
const router = Router();

const koaReq = require('request')
const queryUrl = (name, string)=> {
  var reg = new RegExp("(^|&)" + name + "=([^(&|#)]*)(&|#|$)");
  var r = string.match(reg);
  if (r != null) return decodeURI(r[2]); 
  return '';
}


const getWxCode = ()=> new Promise((resolve, reject)=>{
  let path = 'https://open.weixin.qq.com/connect/oauth2/authorize_reply'
  koaReq({
    method: 'get',
    url: path,
    qs: {
      allow: '1',
      snsapi_userinfo: 'on',
      uuid: '0411CgiD4i5Mll22',
      uin: 'MjAzOTU5OTQ2MA==',
      key: '039e7550e04f4e5a0fe418d67fc4660403c2fd65a416c4f41da8b1196678364b13e3c8d6ddf20781b780708ae227a28b3f97d92ce40e4e44d23f28153a704900d9da836aba5f4db1c22b66e5e1e62c2bab41e3348051a402db2ea2466915f69511f900d6402362a3476fbaef04c21c0806a5c9f9b8cabcd9f0a5e93177e52ae8',
      pass_ticket: 'Ovvxv+YQm2UFa7eQ+KZskNfkkt24WyGGcvum0o6VFNO3gCm/MgczTuzesymuQuMD',
      version: '63040026',
    },
    headers: {//设置请求头
      'Referer': 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb94ff9d2363bb33&redirect_uri=https%3A%2F%2Fsaas.ideamake.cn%2Fwxa-market-cloud%2Fwxauth.html%3Furl%3Dhttps%253A%252F%252Farticle7.ideamake.cn%252Fh5%252Findex.html%2523%252Farticle%252F349394860%253FshareId%253DezKiD35S%2526projectCode%253Ddyjt5542%2526parentUuid%253D28fd2f70%2526readSource%253D1&response_type=code&scope=snsapi_userinfo&state=JhP2SxbGe86dPhOP&uin=MjAzOTU5OTQ2MA%3D%3D&key=fbb52145789d0aca69c32ebe54228511b164f7778514751c9c01e9a8819a47388be78096ec6ad76136e995f3e983d45f210faeda96bfe60e5ad04d4e2a4920f549923e50b3f0e438b82883e6a5fd1592c834d1a5ac4185ca95e91efbc7386a97f94cc70678b0f9456db77a410f70ae62e7b1cb76e2ce9a47ef199e08576cf5fd&version=63040026&pass_ticket=Ovvxv%2BYQm2UFa7eQ%2BKZskNfkkt24WyGGcvum0o6VFNO3gCm%2FMgczTuzesymuQuMD',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Dest': 'document',
      'Upgrade-Insecure-Requests': 1,
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)'
    },
    withCredentials: false,
    // json: true//设置返回的数据为json
  }, (error, response, body) => {
    if(error){
      reject(err)
    }else{
      resolve([response, body])
    }
  })
}) 
const postVisitors = (code)=> new Promise((resolve, reject)=>{
  koaReq({
    method: 'post',
    url: 'https://sapi.ideamake.cn/authorizations/visitors',
    qs: {
      code:	code,
      rid:	'dyjt5542_article',
      share_id:	'ezKiD35S',
      project_code:	'dyjt5542',
      type:	'wechat',
    },
    body: JSON.stringify({}),
    headers: {//设置请求头
      'Content-Type': 'application/x-www-form-urlencoded',
      'Host': 'sapi.ideamake.cn',
      'Referer': 'https://article9.ideamake.cn/h5/index.html',
      'Origin': 'https://article9.ideamake.cn',
      'Sec-Fetch-Site': 'same-site',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Upgrade-Insecure-Requests': 1,
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)'
    },
    withCredentials: false,
    json: true//设置返回的数据为json
  }, (error, response, body) => {
    if(error){
      reject(err)
    }else{
      resolve([response, body])
    }
  })
}) 


const getVisitingInfo = ()=> new Promise((resolve, reject)=>{
  let time = Date.now()
  koaReq({
    method: 'get',
    url: 'https://api.ideamake.cn/visiting-card/users/cards/index/information?shareId=PjkZZBgk ',
    qs: {},
    headers: {//设置请求头
      Host: 'api.ideamake.cn',
      Referer: 'https://servicewechat.com/wx8c50891700be5917/111/page-frame.html',
      appId: 'wx8c50891700be5917',
      openId: 'oP2_Y5YKwZ3-qmqmistglMeIZO-0',
      platform: 'wechat',
      v: 'common',
      version: '2.1.95',
      time,
      requestId: time + '_eIZO-0',
      'Content-Type': 'application/x-www-form-urlencoded',
      'IM-TOKEN': 'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFibWx2Ymtsa0lqb2liMWRFWjB0M1VXMVNlQzFHZG1sVlRISmZWRmR6YlhNMVNpMTFVU0lzSW5CeWIycGxZM1JEYjJSbElqb2laSGxxZERJNE5pSXNJbTl3Wlc1SlpDSTZJbTlRTWw5Wk5WbExkMW96TFhGdGNXMXBjM1JuYkUxbFNWcFBMVEFpTENKaGNIQkpaQ0k2SW5kNE9HTTFNRGc1TVRjd01HSmxOVGt4TnlJc0ltbHpWWE5sY2lJNk1Dd2laWGh3SWpveE5qTTFPRE0yTkRZMUxDSjFkV2xrSWpvaUlpd2laM0p2ZFhCRGIyUmxJam9pWkhscWRDSjkuc1JiQkhBZEZVbTVhdzVvOENoVVQzWmhhYUU2Y2NVWHNkZ05UX2hZUUpSYw==',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Dest': 'document',
      'Upgrade-Insecure-Requests': 1,
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)'
    },
    withCredentials: false,
    json: true//设置返回的数据为json
  }, (error, response, body) => {
    if(error){
      reject(err)
    }else{
      resolve([response, body])
    }
  })
}) 
const getCustomerInfo = ()=> new Promise((resolve, reject)=>{
  let time = Date.now()
  koaReq({
    method: 'get',
    url: 'https://imapi.ideamake.cn/customer-server/visitors/code',
    qs: {
      projectCode:	'dyjt5542',
      shareId: 'PjkZZBgk',
      defaultCognitionType: 1,
    },
    headers: {//设置请求头
      Host: 'imapi.ideamake.cn',
      Referer: 'https://servicewechat.com/wx8c50891700be5917/111/page-frame.html',
      appId: 'wx8c50891700be5917',
      openId: 'oP2_Y5YKwZ3-qmqmistglMeIZO-0',
      platform: 'wechat',
      v: 'common',
      version: '2.1.95',
      time,
      requestId: time + '_eIZO-0',
      'Content-Type': 'application/x-www-form-urlencoded',
      'IM-TOKEN': 'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFibWx2Ymtsa0lqb2liMWRFWjB0M1VXMVNlQzFHZG1sVlRISmZWRmR6YlhNMVNpMTFVU0lzSW5CeWIycGxZM1JEYjJSbElqb2laSGxxZERJNE5pSXNJbTl3Wlc1SlpDSTZJbTlRTWw5Wk5WbExkMW96TFhGdGNXMXBjM1JuYkUxbFNWcFBMVEFpTENKaGNIQkpaQ0k2SW5kNE9HTTFNRGc1TVRjd01HSmxOVGt4TnlJc0ltbHpWWE5sY2lJNk1Dd2laWGh3SWpveE5qTTFPRE0yTkRZMUxDSjFkV2xrSWpvaUlpd2laM0p2ZFhCRGIyUmxJam9pWkhscWRDSjkuc1JiQkhBZEZVbTVhdzVvOENoVVQzWmhhYUU2Y2NVWHNkZ05UX2hZUUpSYw==',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)'
    },
    withCredentials: false,
    json: true//设置返回的数据为json
  }, (error, response, body) => {
    if(error){
      reject(err)
    }else{
      resolve([response, body])
    }
  })
}) 

const getVisitorNew = ()=> new Promise((resolve, reject)=>{
  let time = Date.now()
  koaReq({
    method: 'get',
    url: 'https://imapi.ideamake.cn/im-new/visitors/chatting?scene=market_cloud&page=1&limit=1&imId=IM21080375226449 ',
    qs: {},
    headers: {//设置请求头
      Host: 'imapi.ideamake.cn',
      Referer: 'https://servicewechat.com/wx8c50891700be5917/111/page-frame.html',
      appId: 'wx8c50891700be5917',
      openId: 'oP2_Y5YKwZ3-qmqmistglMeIZO-0',
      platform: 'wechat',
      v: 'common',
      version: '2.1.95',
      time,
      requestId: time + '_eIZO-0',
      'Content-Type': 'application/x-www-form-urlencoded',
      'IM-TOKEN': 'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFibWx2Ymtsa0lqb2liMWRFWjB0M1VXMVNlQzFHZG1sVlRISmZWRmR6YlhNMVNpMTFVU0lzSW5CeWIycGxZM1JEYjJSbElqb2laSGxxZERJNE5pSXNJbTl3Wlc1SlpDSTZJbTlRTWw5Wk5WbExkMW96TFhGdGNXMXBjM1JuYkUxbFNWcFBMVEFpTENKaGNIQkpaQ0k2SW5kNE9HTTFNRGc1TVRjd01HSmxOVGt4TnlJc0ltbHpWWE5sY2lJNk1Dd2laWGh3SWpveE5qTTFPRE0yTkRZMUxDSjFkV2xrSWpvaUlpd2laM0p2ZFhCRGIyUmxJam9pWkhscWRDSjkuc1JiQkhBZEZVbTVhdzVvOENoVVQzWmhhYUU2Y2NVWHNkZ05UX2hZUUpSYw==',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)'
    },
    withCredentials: false,
    json: true//设置返回的数据为json
  }, (error, response, body) => {
    if(error){
      reject(err)
    }else{
      resolve([response, body])
    }
  })
}) 

const getVisitorCount = ()=> new Promise((resolve, reject)=>{
  let time = Date.now()
  koaReq({
    method: 'get',
    url: 'https://api.ideamake.cn/visiting-card/visitor-maintain/count/others?shareId=PjkZZBgk&limit=5',
    qs: {},
    headers: {//设置请求头
      Host: 'api.ideamake.cn',
      Referer: 'https://servicewechat.com/wx8c50891700be5917/111/page-frame.html',
      appId: 'wx8c50891700be5917',
      openId: 'oP2_Y5YKwZ3-qmqmistglMeIZO-0',
      platform: 'wechat',
      v: 'common',
      version: '2.1.95',
      time,
      requestId: time + '_eIZO-0',
      'Content-Type': 'application/x-www-form-urlencoded',
      'IM-TOKEN': 'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFibWx2Ymtsa0lqb2liMWRFWjB0M1VXMVNlQzFHZG1sVlRISmZWRmR6YlhNMVNpMTFVU0lzSW5CeWIycGxZM1JEYjJSbElqb2laSGxxZERJNE5pSXNJbTl3Wlc1SlpDSTZJbTlRTWw5Wk5WbExkMW96TFhGdGNXMXBjM1JuYkUxbFNWcFBMVEFpTENKaGNIQkpaQ0k2SW5kNE9HTTFNRGc1TVRjd01HSmxOVGt4TnlJc0ltbHpWWE5sY2lJNk1Dd2laWGh3SWpveE5qTTFPRE0yTkRZMUxDSjFkV2xrSWpvaUlpd2laM0p2ZFhCRGIyUmxJam9pWkhscWRDSjkuc1JiQkhBZEZVbTVhdzVvOENoVVQzWmhhYUU2Y2NVWHNkZ05UX2hZUUpSYw==',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)'
    },
    withCredentials: false,
    json: true//设置返回的数据为json
  }, (error, response, body) => {
    if(error){
      reject(err)
    }else{
      resolve([response, body])
    }
  })
}) 


const getUserInfo = ()=> new Promise((resolve, reject)=>{
  let time = Date.now()
  koaReq({
    method: 'get',
    url: 'https://imapi.ideamake.cn/user-info/visitors/information',
    qs: {},
    headers: {//设置请求头
      Host: 'imapi.ideamake.cn',
      Referer: 'https://servicewechat.com/wx8c50891700be5917/111/page-frame.html',
      appId: 'wx8c50891700be5917',
      platform: 'wechat',
      v: 'common',
      version: '2.1.95',
      time,
      'Content-Type': 'application/x-www-form-urlencoded',
      'IM-TOKEN': 'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFibWx2Ymtsa0lqb2liMWRFWjB0M1VXMVNlQzFHZG1sVlRISmZWRmR6YlhNMVNpMTFVU0lzSW5CeWIycGxZM1JEYjJSbElqb2laSGxxZERJNE5pSXNJbTl3Wlc1SlpDSTZJbTlRTWw5Wk5WbExkMW96TFhGdGNXMXBjM1JuYkUxbFNWcFBMVEFpTENKaGNIQkpaQ0k2SW5kNE9HTTFNRGc1TVRjd01HSmxOVGt4TnlJc0ltbHpWWE5sY2lJNk1Dd2laWGh3SWpveE5qTTFPRE0yTkRZMUxDSjFkV2xrSWpvaUlpd2laM0p2ZFhCRGIyUmxJam9pWkhscWRDSjkuc1JiQkhBZEZVbTVhdzVvOENoVVQzWmhhYUU2Y2NVWHNkZ05UX2hZUUpSYw==',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)'
    },
    withCredentials: false,
    json: true//设置返回的数据为json
  }, (error, response, body) => {
    if(error){
      reject(err)
    }else{
      resolve([response, body])
    }
  })
}) 


router.get('/', async (ctx, next)=>{
  ctx.response.body = JSON.stringify({data: `this is home`})
})

router.get('/wx', async (ctx, next)=>{
  try {
    let wxData = await getWxCode()
    let href = wxData[0].request?.href
    console.log('href: ',href)
    let code = queryUrl('code', href)
    console.log('code: ',code)
    let resultData = await postVisitors(code)
    console.log('result: ',resultData[1])
    ctx.response.body = {
      "code": 10,
      "data": {
        href, 
        wxCode: code,
        ...resultData[1]
      },
      "msg": 'ok'
    }
  } catch (error) {
    console.log('error')
    console.log(error)
    ctx.response.body = {
      "code": 0,
      "data": error,
      "msg": 'err'
    }
  }
})
router.get('/getVisitingInfo', async (ctx, next)=>{
  try {
    let customerData = await getCustomerInfo()
    let {visitorCode} = customerData[1].data

    let visitorNewData = await getVisitorNew()
    let visitorNew = visitorNewData[1].data
    // console.log('visitorNewData: ', visitorNew)

    let visitingCoutData = await getVisitorCount()
    let {total} = visitingCoutData[1].data


    let visitingInfoData = await getVisitingInfo()
    let {visitCounts} = visitingInfoData[1].data

    let userInfoData = await getUserInfo()
    let userInfo = userInfoData[1].data
    ctx.response.body = {
      code: 10,
      data: {
        visitorCode, visitorNew, visitCounts, userInfo, total
      },
      msg: 'ok'
    }
  } catch (error) {
    console.log('error', error)
    ctx.response.body = {
      "code": 0,
      "data": error,
      "msg": 'err'
    }
  }
})

exports.router = router
