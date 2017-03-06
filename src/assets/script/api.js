// 初始化对象

// 导航数据
let API = {};
API.navData = [
  {
    id: "news",
    name: '要闻',
    bosspac: 'leQQ_gateway_recommends',
    bosslezone: 'navRec',
    bossoutline: 'recommend'
  }, {
    id: "ent",
    name: '娱乐',
    bosspac: 'leQQ_gateway_hot',
    bosslezone: 'navHot',
    bossoutline: 'hot'
  }, {
    id: "sports",
    name: '体育',
    bosspac: 'leQQ_gateway_video',
    bosslezone: 'navVideo',
    bossoutline: 'video'
  }, {
    id:"finance",
    name: '财经',
    bosspac: 'leQQ_gateway_funny',
    bosslezone: 'navFunny',
    bossoutline: 'funny'
  }, {
    id:"tech",
    name:'科技',
    bosspac:'',
    bosslezone:'',
    bossoutline:''
  }
];

// 格式化时间函数 
API.formatTime = function(time){
  let obj = {tim:"",txt:""};
  if(!time) return;
  let dateTimeStamp = Date.parse(time.replace(/-/gi,"/")),
  minute = 1000*60,hour = minute*60,day=hour*24,halfmonth =day*15,month=day*30;
  let now = new Date().getTime(),
  diffValue = now - dateTimeStamp;
  if(diffValue < 0){console.log("error");return false;}
  let monthe = diffValue/month,
    weeke  = diffValue/(7*day),
    daye   = diffValue/day,
    houre  = diffValue/hour,
    mine   = diffValue/minute;
    obj.tim = 7;
    obj.txt = "天前";
  if(monthe >= 1 || weeke >= 1){
    obj.tim = 7;
    obj.txt = "天前";
  }else if(daye>=1){
    obj.tim = parseInt(daye);
    obj.txt = "天前";
  }else if(houre>=1){
    obj.tim = parseInt(houre);
    obj.txt = "小时前";
  }else if(mine>=1){
    obj.tim = parseInt(mine);
    obj.txt = "分钟前";
  }else{
    obj.tim = "";
    obj.txt = "刚刚";
  }
  return obj;
}

// 事件监听函数
API.addEvent = function (node, type, listener) {
  if (node.addEventListener) {
    node.addEventListener(type, listener, false);
    return true;
  } else if (node.attachEvent) {
    node['e' + type + listener] = listener;
    node[type + listener] = function () {
      node['e' + type + listener](window.event);
    };
    node.attachEvent('on' + type, node[type + listener]);
    return true;
  }
  return false;
}

// 事件移除函数
API.removeEvent = function (node, type, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(type, listener, false);
    return true;
  } else if (node.detachEvent) {
    node['e' + type + listener] = listener;
    node[type + listener] = function () {
      node['e' + type + listener](window.event);
    }
    node.detachEvent('on' + type, node[type + listener]);
    return true;
  }
  return false;
}

// 平台检测
API.isPad = function(){
  if(/iPad/i.test(navigator.userAgent)){
    return true;
  }else{
    return false;
  }
};


export default API;