const show = (s1, s2, l1, l2) => {
    if (s1.value == '℃') s2.value = '℉';
    else s2.value = '℃';

    l1.textContent = s1.value;
    l2.textContent = s2.value;
}

document.addEventListener('DOMContentLoaded', () => {
    const sel1 = document.querySelector('#temp1');
    const sel2 = document.querySelector('#temp2');

    const txt1 = document.querySelector('#num');
    const txt2 = document.querySelector('#result');

    const label1 = document.querySelector('#label1');
    const label2 = document.querySelector('#label2');
    
    let temp1 = 0;
    let temp2 = 0;

    sel1.addEventListener('change', () => {
        show(sel1, sel2, label1, label2);
    })
    
    sel2.addEventListener('change', () => {
        show(sel2, sel1, label2, label1);
    })

    txt1.addEventListener('')

})