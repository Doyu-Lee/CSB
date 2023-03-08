let userName = document.querySelector("#username");
console.log(userName);
// userName 안의 값을 변경하는 방법이다.
// HTML은 이 경우일 때 해당한다. (형태: 아이디 ㅁ )
// <fieldset>
// <label> 아이디 </label>
// <input type = "text" id ="username">
//</fieldset>
// userName.value = '아이디를 입력하세요'

console.log(document.body);
console.dir(document.body);
// DOM으로부터 필요한 엘리먼트를 불러온다.

//** 아이디를 잘못 입력했을 때 뜨는 메시지 (1) 선택
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");

console.log(elFailureMessage); // 왜 dir과 같은 결과가 출력되지?
console.dir(elFailureMessage);
// (2) 숨겨놓기 (다시 보이게 하려면 block)
// elFailureMessage.style.display = "none"
// 이 방법말고 현업에서는 CSS 파일에 HTML의 클래스를 조합하여 쓴다.
// 이미 숨겨져있는 요소를 특정 조건일때 보이게 하려면 아래와 같이 하면 된다. (반대는 remove대신 add)
// elFailureMessage.classList.remove('hide')

//의사코드
// 조건 1 - 아이디 입력창에 글자를 키보드로 입력할 때   -> event 를 이용
// event : ~~할 때
//  event handler : event가 일어날때 실행되는 함수
// (onclick, onkeydown 등이 있음 ****)
// onkeyup (키보드가 눌렀다 떼어졌을때 )

userName.onkeyup = function () {
  //  console.log('잘 찍히네요!')
  //  console.log(userName.value)

  // 조건 2 - "글자 수가 4개 이상" 이면 (조건문) / 아래에 함수(isMoreThan4Length) 따로 만들어 놓음
  // 조건 3- "사용할 수 있는 아이디입니다" 라는 메시지가 출력된다.
  if (isMoreThan4Length(userName.value)) {
    // console.log('4글자 보다 큽니다.'); - 성공 메시지가 보여야 함 + 실패 메시지가 가려져야 함
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  } else {
    // console.log('4글자보다 짧네요....'); - 성공 메시지가 가려져야 함 + 실패 메시지가 보여야 함
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  }
};

let isMoreThan4Length = function (text) {
  return text.length >= 4; // 길이가 3이면 false, 5면 true가 return된다.
};

let passWord1 = document.querySelector("#password");
let passWord2 = document.querySelector("#password-retype");

let misMatchMessage = document.querySelector(".mismatch-message");
let noSymbolMessage = document.querySelector(".symbol-no-message");

passWord2.onkeyup = function () {
  if (isMatch(passWord1.value, passWord2.value)) {
    console.log("Match!");
    misMatchMessage.classList.add("hide");
  } else {
    console.log("Unmatch!");
    misMatchMessage.classList.remove("hide");
  }
};

passWord1.onkeyup = function () {
  // console.log('click!')
  if (noSymbol(passWord1.value)) {
    console.log("지원 안 하는 기호가 포함되었다!");
    noSymbolMessage.classList.remove("hide");
  } else {
    console.log("이상없음!");
    noSymbolMessage.classList.add("hide");
  }
};

// 비밀번호 일치여부를 알려주는 함수 따로 작성
function isMatch(password1, password2) {
  if (password1 === password2) {
    return true;
  }
  return false; // 왜 얘는 괄호가 있어야 하나? ****
}

// 지원하지 않는 특수기호 포함여부를 알려주는 함수 따로 작성
function noSymbol(passwordInput) {
  if (passwordInput.includes("$") || passwordInput.includes("@")) {
    return true;
  }
  return false;
}
