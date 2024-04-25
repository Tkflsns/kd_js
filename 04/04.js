/*
    1. DOM에서 제어할 노드를 가져오기
    2. 6개 버튼클릭을 확인
    3. 버튼 클릭이 되면
        -해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(user) => 이미지 변경
        -랜덤수를 생성 => 컴퓨터 숫자(com)
        -사용자 성택수(user)와 컴퓨터 선택수(com)을 비교
        -결과 출력
*/

document.addEventListener('DOMContentLoaded', () => {
    const comImg = document.getElementById('com');
    const userImg = document.querySelector('#user');
    const msg = document.querySelector('#msg');
    const bts = document.querySelectorAll('.bt4');

    console.log(bts);

    // console.log('**반복문1**');
    // //반복문1
    // for(let i = 0; i < bts.length; i++){
    //     console.log(bts[i]);
    // }
    
    // console.log('**반복문2**');
    // //반복문2
    // for(let i in bts) {
    //     console.log(bts[i]);
    // }

    // console.log('**반복문3**');
    // //반복문3
    // bts.forEach(bt => {
    //     console.log(bt);
    // })

    // console.log('**반복문4**');
    // //반복문4
    // for(let [i, bt] of bts.entries()) {
    //     console.log(i,bt);
    // }

    // bts[0].addEventListener('click', () => {});

    for(let bt of bts){
        bt.addEventListener('click', () => {
        
        const user = parseInt(bt.textContent.slice(0, 1));
        const rd = Math.floor(Math.random() * 6)+1;
        console.log(rd);
        comImg.setAttribute('src', `../03/img/${rd}.png`);
        comImg.setAttribute('alt', `computer num ${rd}`);
        userImg.setAttribute('src', `../03/img/${user}.png`);
        userImg.setAttribute('alt', `user num ${user}`);
        
        if(rd === user)
            msg.innerHTML = "<h3>똑같습니다.</h3>";
        else
            msg.innerHTML = "<h3>다릅니다.</h3>";

        });
    }
});