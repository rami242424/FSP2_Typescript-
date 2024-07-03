// 유니언 타입(union type) /// 교안확인!!!!!!!!!!!!!

// (()=>{
//     function log (msg : string) {
//         console.log(msg);
//     }
//     function log (msg : number) {
//         console.log(msg);
//     }

//     const msg1: string = 'hello';
//     const msg2: number = 123;

//     console.log(log(msg1));
//     console.log(log(msg2)); // 위에서 (msg : string) 로 정했는데, const msg2: number = 123; 라고해서 에러

//     function log(msg: number | string) {
//         console.log(msg);
//     }
//     const msg3: string = 'world';
//     const msg4: number = 456;

//     log(msg3);
//     log(msg4);

// })();

(() => {
    function logString(msg) {
        console.log(msg); // 문자열을 받아서 콘솔에 출력
    }

    function logNumber(msg){
        console.log(msg); // 숫자를 받아서 콘솔에 출력
    }
    const msg1 = 'hello';
    const msg2 = 123;

    logString(msg1); 
    // 'hello' 출력 
    // || msg1변수는 문자열 'hello'로 초기화되며, 'logString' 함수는 이를 출력한다.
    logNumber(msg2); 
    // 123 출력 
    // || msg2변수는 숫자 123으로 초기화되며, 'logNumber' 함수는 이를 출력한다.

    function log(msg) { // 'log'함수는 유니언 타입을 사용하여 'msg' 매개변수가 문자열이나 숫자를 받을 수 있도록 합니다.
        console.log(msg);
    }

    const msg3 = 'world'; // msg3 변수는 문자열 world로 초기화 되며, log 함수는 이를 출력합니다.
    const msg4 = 456; // msg4 변수는 숫자 456으로 초기화 되며, log 함수는 이를 출력합니다.

    log(msg3); // 'world' 출력
    log(msg4); // 456 출력

})