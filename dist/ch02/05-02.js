"use strict";
// echo 함수 - 제네릭 함수
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(200));
    console.log(echo(true));
    // const str = echo<string>('world');
    // const num = echo<number>(123.456);
    // 아래처럼 입력해도 됨
    const str = echo('world');
    const num = echo(123.456);
    console.log(str.toLowerCase(), num.toFixed(2));
})();
