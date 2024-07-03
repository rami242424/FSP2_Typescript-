(() => {

  interface User {
    name: string,
    email: string,
    phone: Phone,
  }

  type Phone = {
    mobile: {num: string},
    [etc: string] : {num:string}
  }

  const ryan: User = {
    name: '라이언',
    email: "ryan@kakao.com",
    phone: {
      mobile: {num: "010..."},
      home: {num: "031..."}
    }
  }
  
  const neo: User ={
    name: '네오',
    email: "neo@kakao.com",
    phone: {
      mobile: {num: "010.."},
      office: {num: "02.."}
    }
  }
})();