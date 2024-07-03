"use strict";
// 선택적 파라미터(optional parameter)
(() => {
    function user(name, age) {
        console.log(name, age);
    }
    user('라이언', 30);
    // user('무지', '20'); // 에러 : '20' -> number 와야함
    // user('용쌤'); // 에러 : age가 빠져있음
})();
