"use strict";
// 인터페이스 선언 병합
// 16.ts 복사
(() => {
    // 앞에 두개의 Todo 병합
    // 위에서 string, 아래에서 number 일 경우 다른 타입이라서 병합이 안된다.
    const todo3 = {
        title: "할일3",
        content: "상세조회에사용",
        id: 1234,
        done: false
    };
    console.log(todo3);
})();
