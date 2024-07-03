// 인터페이스 정의 - 객체의 속성과 메서드, 익명 함수, 선택적 속성, 읽기 전용 속성

(()=>{
    interface ITodo {
      readonly id: number;
      title: string;
      content: string;
      done?: boolean;
    }
  
    // ITodo 타입의 객체를 받아서 void를 반환
    interface IToggle {
      (todo: ITodo): void
    }
  
    const todo1: ITodo = { id: 1, title: '할일1', content: '인터페이스 사용', done: true };
    todo1.title = '타이틀 수정';
    // todo1.id = 2;
  
    const todo2: ITodo = { id: 2, title: '할일2', content: '인터페이스 사용2' };
  
    // done 값을 반전시킨다.
    // const toggleDone = (todo: ITodo): void => {
    // || todo가 ITodo 타입이어야 한다는 의미입니다.
    const toggleDone: IToggle = (todo) => {
      todo.done = !todo.done;
    };
  
    console.log(todo1, todo2);
    toggleDone(todo1); // todo1은 ITodo 타입
    toggleDone(todo2); // todo2은 ITodo 타입
    console.log(todo1, todo2);
  
  })();