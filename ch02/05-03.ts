// echo 함수 - 제네릭 타입 제약
// 05-02.ts 복사

(()=>{
    // 허용할 타입을 유니온으로 만들도 extends 키워드를 붙여서 확장
    function echo<T extends string | number>(msg: T): T {
        return msg;
    }

    console.log(echo<string>('hello'));
    console.log(echo<number>(200));
    // console.log(echo<boolean>(true));

    const str = echo('world');
    const num = echo(123.456);

    console.log(str.toLowerCase(), num.toFixed(2));

    function echo2<T extends { length: number }>(msg: T): T {
        console.log('msg.length', msg.length);
        return msg;
    }

    echo2('hello');
    echo2([100, '안녕']);
    echo2(199); // undefined
})();
