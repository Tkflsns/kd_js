document.addEventListener('DOMContentLoaded', () => {
    //1. DOM에서 이미지와 버튼을 가져오기
    const img = document.querySelector('#btDiv > img');
    const bt = document.querySelector('#btDiv > button');
    //2. 버튼 click이벤트를 만들기
    bt.addEventListener("click", () => {
        //3. 랜덤수생성 (1~6)
        const rd = Math.floor(Math.random() * 6)+1;
        //4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기
        img.setAttribute('src', `./img/${rd}.png`); //변수 쓰려면 백틱``써야함.
        img.setAttribute('alt', `${rd}`);
    });
});

