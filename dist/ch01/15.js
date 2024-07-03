"use strict";
// 교안 확인 다시해봐!!
// 인터페이스 상속 - 계층 구조
// 14.ts 복사
(() => {
    const todo1 = {
        title: "할일1",
        content: "등록할때사용"
    };
    const todo2 = {
        id: 123,
        done: false,
        title: "할일2",
        content: "상세조회에사용"
    };
    const todo3 = {
        id: 1234,
        done: false,
        title: "할일3",
        content: "시간을 포함한 상세 조회에 사용",
        createAt: new Date(),
        updateAt: new Date()
    };
    console.log(todo1, todo2);
})();
