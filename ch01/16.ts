// 인터페이스 다중 상속

(()=>{
    interface Todo{
        title: string,
        content: string;
    }

    // 할일 목록 조회할때 필요한 정보
    interface TodoList {
        id: number,
        title: string,
        done: boolean,
    }

    interface TodoInfo extends Todo, TodoList {
        createdAt : Date,
        updatedAt : Date,
    }

    const todo1 : Todo = {
        title: "할일1",
        content: "등록할때사용"
    }
    
    const todo2 : TodoList = {
        id: 123,
        done: false,
        title: "할일2",
        // content: "상세조회에사용"
    }

    const todo3: TodoInfo = {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: "할일3",
        content: "상세조회에사용",
        id: 1234,
        done: false
    }
    console.log(todo1, todo2, todo3);
})();