// 교안 확인 다시해봐!!


// 인터페이스 상속 - 계층 구조
// 14.ts 복사

(()=>{
    interface Todo{
        title: string,
        content: string;
    }

    interface TodoInfo extends Todo {
        id: number,
        done: boolean,
    }

    interface TodoInfoTime extends TodoInfo {
        createAt: Date; // 생성자 함수도 타입으로 지정 (처음등록된 날짜) 
        updateAt: Date; // (마지막에 수정 된 날짜)
    }

    const todo1 : Todo = {
        title: "할일1",
        content: "등록할때사용"
    }
    
    const todo2 : TodoInfo = {
        id: 123,
        done: false,
        title: "할일2",
        content: "상세조회에사용"
    }

    const todo3 : TodoInfoTime = {
        id: 1234,
        done: false,
        title: "할일3",
        content: "시간을 포함한 상세 조회에 사용",
        createAt: new Date(),
        updateAt: new Date()
    }

    console.log(todo1, todo2);
})();