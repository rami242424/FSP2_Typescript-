
// echo 함수 - 일반 함수

(()=>{
    // fixme: 오러로드 단원
    // function echo(msg: string): string {
    //     return msg;
    // }

    // function echo(msg: number): number {
    //     return msg;
    // }

    // function echo(msg: Boolean): boolean {
    //     return msg;
    // }

    // console.log(echo('hello'));
    // console.log(echo(200));
    // console.log(echo(true));
    // ----------------------------------------------

    function echoString(msg: string): string {
        return msg;
    }

    function echoNumber(msg: number): number {
        return msg;
    }

    function echoBoolean(msg: Boolean): boolean {
        return msg;
    }

    console.log(echoString('hello'));
    console.log(echoNumber(200));
    console.log(echoBoolean(true));
})();