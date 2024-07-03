// echo 함수 - 제네릭 함수

(()=>{
    function echo<T>(msg: T): T {
        return msg;
    }

    console.log(echo<string>('hello'));
    console.log(echo<number>(200));
    console.log(echo<boolean>(true));

    // const str = echo<string>('world');
    // const num = echo<number>(123.456);
    // 아래처럼 입력해도 됨
    const str = echo('world');
    const num = echo(123.456);

    console.log(str.toLowerCase(), num.toFixed(2));
})();
