// 인터페이스 상속

(()=>{
    interface Todo{
        title: string,
        content: string;
    }

    interface TodoInfo extends Todo {
        id: number,
        done: boolean,
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

    console.log(todo1, todo2);
})();