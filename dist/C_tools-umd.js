(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.C_tools = {}));
})(this, (function (exports) { 'use strict';

  const changeSearch = (name, value) => {
    let url2, url = location.href;
    let reg = new RegExp('([\?|&]'+name+'=)[^&]*', 'gi');
    value = value.toString().replace(/(^\s*)|(\s*$)/g,"");  //移除首尾空格
    if(!value){
        url2 = url.replace(reg , '');  //正则替换
    }else {
        if(url.match(reg)){
            url2 = url.replace(reg , '$1' + value);  //正则替换
        }else {
            url2 = url + (url.indexOf('?') > -1 ? '&' : '?') + name + '=' +value;  //没有参数添加参数
        }
    }
    history.replaceState(null,null, url2);  //替换地址栏
  };

  exports.changeSearch = changeSearch;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
