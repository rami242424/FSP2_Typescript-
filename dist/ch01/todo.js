"use strict";
(() => {
    // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언
    // todo 목록 저장 ---------------------------------
    let todoItems;
    // api ---------------------------------
    function fetchTodoItems() {
        // const todos: TodoItem[] = [
        const todos = [
            { id: 1, title: '안녕', done: false },
            { id: 2, title: '타입', done: false },
            { id: 3, title: '스크립트', done: false },
        ];
        return todos;
    }
    // crud methods
    // 할일 목록 조회 ---------------------------------
    function fetchTodos() {
        const todos = fetchTodoItems();
        return todos;
    }
    // 할일 등록 ---------------------------------
    function addTodo(todo) {
        todoItems.push(todo);
    }
    // 할일 삭제 ---------------------------------
    function deleteTodo(index, todo) {
        todoItems.splice(index, 1);
    }
    // 할일 완료 처리 ---------------------------------
    function completeTodo(index, todo) {
        todo.done = true;
        todoItems.splice(index, 1, todo);
    }
    // business logic
    // 첫번째 할일 반환 ---------------------------------
    function logFirstTodo() {
        return todoItems[0];
    }
    // 완료된 할일 반환 ---------------------------------
    function showCompleted() {
        return todoItems.filter(item => item.done);
    }
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    function addTwoTodoItems() {
        addTodo({
            id: 4,
            title: '점심먹기',
            done: false,
        });
        addTodo({
            id: 5,
            title: '복습하기',
            done: true,
        });
    }
    // 1. Todo 목록을 가져온다. ---------------------------------
    todoItems = fetchTodos();
    // 2. 2개의 Todo를 등록한다.---------------------------------
    addTwoTodoItems();
    // 3. 다른 함수들 작업되는지 확인해보기.---------------------------------
    // deleteTodo(1); // index[1]번 todo 삭제 완료
    deleteTodo(1);
    completeTodo(0, todoItems[0]);
    completeTodo(2, todoItems[2]);
    console.log(logFirstTodo());
    console.log(showCompleted());
    console.log(todoItems);
    //  console.log(todoItems);
    //  console.log(logFirstTodo());
    //  console.log(fetchTodos());
    //  console.log(showCompleted());
    // console.log(logFirstTodo())
})();
