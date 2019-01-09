import JSBridge from '../utils/JSBridge.js';

//封装请求方法
function sendRequest(url,method = 'GET',data = {}){
  let params = {
    method,
      credentials: 'include'
  }
  //判断如果是一个post请求，带上请求体信息
  if(method == 'POST'){
    params.body = JSON.stringify(data)
  }
  //判断请求查询url是否携带query
  if(url.indexOf('?')==-1){
    url += `?_=${+new Date()}`
  }else{
    url += `&_=${+new Date()}`
  }
  //拼接登录态token
  //url += `&token=${getToken()}`
  return fetch(url,params)
    .then(res=>res.json())
    .then(body=>body)
}

// 唤醒登陆
export let goLogin = ()=>{
  JSBridge.invoke('app', 'login', {
    loginCallBackName: ()=>window.reload()
  });
}

// 唤起支付
export let goPay = ()=>{
  JSBridge.invoke('app', 'pay', {
    price: 398.00,
    orderNum: '6486870262972889089',
    channels: ["weixin","alipay","baidu"],
    callbackUrl: 'https://h5.chelun.com/2017/update-licence2/order.html'
  });
}

//唤醒分享
export let goShare = ()=>{
  JSBridge.invoke('ui', 'shareMessage')
}

// 图片上传
export let uploadImg = (type)=>{
  return new Promise((resolve, reject)=>{
    JSBridge.invoke('device', 'chooseImage', {
      type,
      chooseCallbackName: function(res){
        resolve(res);
      }
    })
  })
}

//获取签发城市
export let cityList = ()=>{
  return sendRequest('/api/ExchangeJiaZhao/cityList')
}

//获取可补换城市
export let costList = (...params)=>{
  return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params[0]}&city_id=${params[2]}&province_id=${params[1]}`)
}

// 获取用户是否是会员
export let isVip = ()=>{
  return sendRequest('https://vip.chelun.com/api/status')
}

// 上传base64图片
export let uploadBase64 = (base64)=>{
  return sendRequest('http://123.206.55.50:11000/upload_base64', 'POST', {base64})
}
