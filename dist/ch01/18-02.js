"use strict";
// let 사용
// 18-01.ts 복사
(() => {
    let ts = 'Typescript';
    let nextjs = 'Next.js';
    function getSchedule(subject) {
        if (ts === subject) {
            return '타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.';
        }
        else if (nextjs === subject) {
            return '넥스트 js 수업은 이론 2주 + 프로젝트 4주 입니다.';
        }
    }
    console.log(getSchedule(ts));
    console.log(getSchedule(nextjs));
})();
