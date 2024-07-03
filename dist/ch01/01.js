"use strict";
// 개발 환경 확인
// 즉시 실행함수 (전역에서 발생하지 않기위해)
(() => {
    function hello(name) {
        return 'Hello' + name;
    }
    console.log(hello('타입스크립트'));
})();
