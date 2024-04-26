const imgName = (imgName) => {
    img.setAttribute('src', `./img/${imgName}.png`);
}

document.addEventListener('DOMContentLoaded', () => {

    const bt = document.querySelector('#bt');
    const img = document.querySelector('#img');
    const num = document.querySelector('#num');
    const la = document.querySelector('#UpDown');

    let rd;
    let flag = true;
    let flag2 = true;

    bt.addEventListener('click', (e) => {
        e.preventDefault();


        //입력값 체크 : 1 ~ 100
        const user = num.value;

        if (flag) {
            bt.textContent = "제출";
            num.style.display = "inline";
            la.style.display = "inline";
            flag = false;
            rd = Math.floor(Math.random() * 100) + 1;
        }
        console.log(num.value);
        console.log(rd);

        if (flag2) {
            if (num.value == '') {
                imgName('what');
                alert('값을 입력하세요.');
                num.value = '';
                num.focus();
                return;
            }
            if (user < 1 || user > 100) {
                alert('[입력오류] 1~100사이의 숫자를 입력하세요.');
                num.value = '';
                num.focus();
                return;
            }
        }

        flag2 = true;

        if (rd == num.value) {
            imgName('good');
            num.style.display = "none";
            la.style.display = "none";
            bt.textContent = "새로하기";
            flag = true;
            flag2 = false;
            num.value = '';
            num.focus();

            return;
        } else if (rd < num.value) {
            imgName('down');
            num.value = '';
            num.focus();
            return;
        } else if (rd > num.value) {
            imgName('up');
            num.value = '';
            num.focus();
            return;
        }

    });
});