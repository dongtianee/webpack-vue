/**
 * 通用js方法。
 */
import Vue from 'vue';
import urlConfig from './url-conf';

//vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

/*
 * url：请求地址  必须
 */
function loadData(url) {
  return new Promise(function (resolve, reject) {
    Vue.http.options.emulateJSON = true;
    Vue.http.get(url).then((res) => {
      if (res.body.err_code === 0) {
        resolve(res.body);
      } else {
        reject(res.body);
      }
    }, (res) => {
      reject(res.body);
    });
  });
}

/*
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 formatDate(Date,'yyyy-MM-dd hh:mm:ss')
 Date:是一个new Date()格式的字符串，不是时间戳
 */
function formatDate(Date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  let o = {
    "M+": Date.getMonth() + 1, //月份
    "d+": Date.getDate(), //日
    "h+": Date.getHours(), //小时
    "m+": Date.getMinutes(), //分
    "s+": Date.getSeconds(), //秒
    "q+": Math.floor((Date.getMonth() + 3) / 3), //季度
    "S": Date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (Date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

let Utils = {
  loadData: loadData,
  URI: urlConfig,
  formatDate: formatDate
};


let utils = {
  install: Vue => {
    Vue.utils = Utils;
    Vue.prototype.$utils = Utils;
  }
};

export default utils;
