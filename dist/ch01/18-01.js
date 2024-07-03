"use strict";
// 상수가 필요한 경우
// 변하지 않는 값, const를 사용
(() => {
    function getSchedule(subject) {
        if ('Typescript' === subject) {
            return '타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.';
        }
        else if ('next.js' === subject) {
            return '넥스트 js 수업은 이론 2주 + 프로젝트 4주 입니다.';
        }
    }
    console.log(getSchedule('Typescript'));
    console.log(getSchedule('Next.js')); // 에러남, 위에서는 소문자를 썼기 떄문
})();
