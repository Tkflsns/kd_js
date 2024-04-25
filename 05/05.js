document.addEventListener('DOMContentLoaded', () => {

    const bt = document.querySelector('#bt');
    const img = document.querySelector('#img');
    const num = document.querySelector('#num');

    let rd;
    let flag = true;

    bt.addEventListener('click', (e) => {
        e.preventDefault();
        if (flag) {
            flag = false;
            rd = Math.floor(Math.random() * 99) + 1;
        }
        console.log(num.value);
        console.log(rd);
        if (rd == num.value) {
            img.setAttribute('src', `./img/good.png`);
            flag = true;
        } else if (rd < num.value) {
            img.setAttribute('src', `./img/down.png`);
        } else if (rd > num.value) {
            img.setAttribute('src', `./img/up.png`);
        }
        if (num.value == '' || num.value < 1 || num.value > 99) {
            img.setAttribute('src', `./img/what.png`);
            alert('범위내값을 입력하거나 숫자를 넣으세요.');
            num.value = '';
            num.focus();
            return;
        }
        num.value = '';
        num.focus();
    });
});