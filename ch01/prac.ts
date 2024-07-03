// 05-01, 02 유니언 타입
// |연산자로 연결 된 타입 중 하나를 허용
// function log (msg: number | string) : void {
//     console.log(msg);
// }

// 05-02 유니언 타입과 타입 가드
(() => {
    // TODO: print 함수의 타입을 정의하고, msg의 타입에 따라서 결과값 출력
    function print(msg){

        // string일 경우
        if (typeof msg === 'string') {
            console.log(`${msg} 글자수: ${msg.length}`);
        }

        // number일 경우
        if (typeof msg === 'number') {
            console.log(`${msg} + 10 = ${msg + 10}`);
        }

        // boolean일 경우
        if (typeof msg === 'boolean') {
            console.log(`${msg}: ${msg ? '참' : '거짓'}`);
        }
    }

    print('world');
    print(200);
    print(false);
})


// 06 type alias
// 값을 변수에 저장하듯, 타입을 변수에 저장해서 사용
// 동일한 이름으로 중복 선언 불가
// JS로 컴파일 되면 제거됨
// function log(msg: number | string): void {
//     console.log(msg);
// }
// const msg3: string | number = 'world';
// const msg4: string | number = 200;
// log(msg3, msg4);