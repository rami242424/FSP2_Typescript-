// 인터섹션 타입(intersection type)

(()=>{
    type Todo = {
        title: string;
        content: string;
    };

    type TodoInfo = Todo & {
        id: number,
        done: boolean,
    };

    const todo1: Todo = {
        title: "점심먹기",
        content: "식사"
    };
    
    // 서버에서 상세 내역 저장할 때
    const todo2: TodoInfo = {
        id: 1,
        title: "복습하기",
        content: "공부",
        done: false,
    };

    console.log(todo1, todo2);

})();