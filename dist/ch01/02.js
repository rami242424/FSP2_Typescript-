"use strict";
// 기본 타입
(() => {
    // let str = 'hello'; // 타입추론
    let str = 'hello';
    let age = 30;
    let done;
    done = true;
    // done = 'true'; // 에러발생
    // done = 100; // 에러발생
    let done2; // 타입정의 안함, done2 = any 라는 의미
    done2 = false;
    done2 = 100;
    let todo = { title: '도시락 싸오기', done: true };
    // let todoList = ['도시락 싸오기', '프로젝터 밝기 조절'];
    // let todoList : Array<string> = ['도시락 싸오기', '프로젝터 밝기 조절']; // 방법1
    let todoList2 = ['도시락 싸오기', '프로젝터 밝기 조절']; // 방법2
    // tuple : 길이가 고정되고 각 요소의 타입이 정의 된 배열
    let items = ['용쌤', 39];
    // let userName = '이일구';
    let userName = '이일구';
    userName = 219;
    let nullval = null;
    let emptyVal = undefined;
})();