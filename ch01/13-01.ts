// 인덱스 시그니처 - 문자열

(()=>{
    interface User {
        name: string,
        email: string,
        // address?: string,
        // phone?: string,
        // hobby?: string,
        age: number // 에러남, 이것도 꼭 쓰고 싶다면 아래처럼 유니온으로
        [param: string]: string | number
        // [param: string]: string,

    }

    const ryan:User = {
        name: "라이언",
        email: "ryan@naver.com",
        address: "경기도 성남시 분당구",
        phone: "010-9999-0000",
        hobby: "독서",
        age: 12,
    };

    const muzi:User = {
        name: '무지',
        email: 'muzi@naver.com',
        age: 34,

    };
    console.log(ryan, muzi);

})();