document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.querySelector('.com');
    const img2 = document.querySelector('.hu');
    const num1 = document.querySelector('.num1');
    const num2 = document.querySelector('.num2');
    const num3 = document.querySelector('.num3');
    const num4 = document.querySelector('.num4');
    const num5 = document.querySelector('.num5');
    const num6 = document.querySelector('.num6');
    const result = document.querySelector('#result')
    
    num1.addEventListener("click", () => {

        img1.setAttribute('src', `../03/img/1.png`); //변수 쓰려면 백틱``써야함.
        img1.setAttribute('alt', `1`);
        const rd = Math.floor(Math.random() * 6)+1;

        img1.setAttribute('src', `../03/img/${rd}.png`); //변수 쓰려면 백틱``써야함.
        img1.setAttribute('alt', `${rd}`);

        if(rd == 1)
            result.innerHTML = '<h3>같습니다.</h3>';
        else
            result.innerHTML = '<h3>틀립니다.</h3>';
    });

    num2.addEventListener("click", () => {

        img2.setAttribute('src', `../03/img/2.png`); //변수 쓰려면 백틱``써야함.
        img2.setAttribute('alt', `2`);
        const rd = Math.floor(Math.random() * 6)+1;

        img1.setAttribute('src', `../03/img/${rd}.png`); //변수 쓰려면 백틱``써야함.
        img1.setAttribute('alt', `${rd}`);

        if(rd == 2)
            result.innerHTML = '<h3>같습니다.</h3>';
        else
            result.innerHTML = '<h3>틀립니다.</h3>';
    });

    num3.addEventListener("click", () => {

        img2.setAttribute('src', `../03/img/3.png`); //변수 쓰려면 백틱``써야함.
        img2.setAttribute('alt', `3`);
        const rd = Math.floor(Math.random() * 6)+1;

        img1.setAttribute('src', `../03/img/${rd}.png`); //변수 쓰려면 백틱``써야함.
        img1.setAttribute('alt', `${rd}`);

        if(rd == 3)
            result.innerHTML = '<h3>같습니다.</h3>';
        else
            result.innerHTML = '<h3>틀립니다.</h3>';
    });

    num4.addEventListener("click", () => {

        img2.setAttribute('src', `../03/img/4.png`); //변수 쓰려면 백틱``써야함.
        img2.setAttribute('alt', `4`);
        const rd = Math.floor(Math.random() * 6)+1;

        img1.setAttribute('src', `../03/img/${rd}.png`); //변수 쓰려면 백틱``써야함.
        img1.setAttribute('alt', `${rd}`);

        if(rd == 4)
            result.innerHTML = '<h3>같습니다.</h3>';
        else
            result.innerHTML = '<h3>틀립니다.</h3>';
    });

    num5.addEventListener("click", () => {

        img2.setAttribute('src', `../03/img/5.png`); //변수 쓰려면 백틱``써야함.
        img2.setAttribute('alt', `5`);
        const rd = Math.floor(Math.random() * 6)+1;

        img1.setAttribute('src', `../03/img/${rd}.png`); //변수 쓰려면 백틱``써야함.
        img1.setAttribute('alt', `${rd}`);

        if(rd == 5)
            result.innerHTML = '<h3>같습니다.</h3>';
        else
            result.innerHTML = '<h3>틀립니다.</h3>';
    });

    num6.addEventListener("click", () => {

        img2.setAttribute('src', `../03/img/6.png`); //변수 쓰려면 백틱``써야함.
        img2.setAttribute('alt', `6`);
        const rd = Math.floor(Math.random() * 6)+1;

        img1.setAttribute('src', `../03/img/${rd}.png`); //변수 쓰려면 백틱``써야함.
        img1.setAttribute('alt', `${rd}`);

        if(rd == 6)
            result.innerHTML = '<h3>같습니다.</h3>';
        else
            result.innerHTML = '<h3>틀립니다.</h3>';
    });
});