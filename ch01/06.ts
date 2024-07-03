// 유니언 타입에 타입 별칭 지정
// 타입별칭 type Message = number | string;

(()=>{
    type Message = number | string;
    function log(msg: Message) {
        console.log(msg);
        return msg;
    }

    const result1: number | string = log('hello');
    const result2: Message = log(100);


    console.log(result1);
    console.log(result2);
})();