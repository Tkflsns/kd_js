function HandleClick(n){  //html에서 함수값 전달받아 메시지 띄움
    // document.querySelector('#msg').innerHTML = '<h1>안녕하세요!' + n + '</h1>';
    document.querySelector('#msg').innerHTML = `<h1>안녕하세요! ${n}</h1>`;// 변수사용하려면 백틱사용
}
document.addEventListener("DOMContentLoaded", ()=>{
//   document.getElementById('msg').innerHTML = '안녕하세요.';
    // document.querySelector('#msg').innerHTML = '<h1>안녕하세요.</h1>';
});

