// 클래스 정의 - private 접근 지정자
// 점수는 수정 불가하고 평균은 avg() 메서드만 사용
// 02-01.ts 복사

(()=>{
    interface IHighschool{
        // kor: number;
        // eng: number;

        // sum(): number;
        svg(): number;
    }

    class Highschool implements IHighschool {
        private kor: number;
        private eng: number;

        constructor(kor: number, eng: number) {
            this.kor = kor;
            this.eng = eng;
        }


        private sum() {
            return this.kor + this.eng;
        }

        avg(){
            // return this.sum() / 2;
            return Math.round( this.sum() / 2 );
        }
    }

    const s1 = new Highschool(100, 91);
    console.log('평균', s1.avg());

    // 이런식으로 하면 코드가 수정 됐을 때(Math.round 같은 식으로) 적용이 안된다.
    s1.eng = 99;
    console.log('영어 평균', s1.sum() / 2);
})();