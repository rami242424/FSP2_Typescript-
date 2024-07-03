// Enum : 상수를 그룹핑해서 쓰기 쉽게 만든 것
// Enum으로 상수를 그룹화 -숫자형
// 18-04.ts 복사

(()=>{
    // 그룹화되는 상수끼리 중복되지 않도록 값을 지정
    enum SubjectName {
        TYPE_SCRIPT: 100,
        NEXT_JS: 101,
    }

    // function getSchedule(subject: number) {
    //     if(SubjectName.TYPE_SCRIPT === subject) {
    //         return '타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.';

    //     } else if (SubjectName.NEXT_JS === subject) {
    //         return '넥스트 js 수업은 이론 2주 + 프로젝트 4주 입니다.';
    //     }
    // }

    // console.log(getSchedule(SubjectName.TYPE_SCRIPT));
    // console.log(getSchedule(SubjectName.NEXT_JS));

    //-------------------------------- string으로 바꿔서 해보기
    function getSchedule(subject: string) {
        if(SubjectName[0] === subject) {
            return '타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.';

        } else if (SubjectName[1] === subject) {
            return '넥스트 js 수업은 이론 2주 + 프로젝트 4주 입니다.';
        }
    }

    console.log(getSchedule(SubjectName[0]));
    console.log(getSchedule(SubjectName[1]));


    console.log(SubjectName);
    
})();