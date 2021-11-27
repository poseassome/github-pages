const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  // 초가 두자리로 표현되기 위해 위 식 분리
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // padStart() : 자릿수만큼 문자로 채워줌
  clock.innerText = `${hours}:${minutes}:${seconds}`;

};

getClock(); //브라우저 실행 시 바로 시계 보이게 하기 위함
setInterval(getClock, 1000);