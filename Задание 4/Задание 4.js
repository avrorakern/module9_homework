let btn = document.getElementById('body__btn');
let div = document.getElementById('body__div');

function getPhoto() {
    let inputFirst = Number(document.getElementById('body__input-second').value);
    let inputSecond = Number(document.getElementById('body__input-third').value);
    if (inputFirst < 100 || inputFirst > 300 || inputSecond < 100 || inputSecond > 300
    || isNaN(inputFirst) || isNaN(inputSecond)) {
        div.innerHTML = 'Одно из чисел вне диапазона от 100 до 300!';
    } else {
        fetch(`https://dummyimage.com/${inputFirst}x${inputSecond}/`)
            .then((response) => {
                const res = response;
                return res
            })
            .then((data) => {
                const myImg = document.createElement("img");
                myImg.src = data.url;
                document.body.appendChild(myImg);
            })
            .catch(() => { console.log('error') });
    }
}

btn.addEventListener('click', () => {
    getPhoto();
});