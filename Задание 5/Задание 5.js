let btn = document.getElementById('body__btn');
let div = document.getElementById('body__div');

function getPhoto() {
    let inputFirst = Number(document.getElementById('body__input-second').value);
    let inputSecond = Number(document.getElementById('body__input-third').value);
    if ((inputFirst < 1 || inputFirst > 10) && (inputSecond < 1 || inputSecond > 10)
        || isNaN(inputFirst) || isNaN(inputSecond)) {
        div.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if ((inputFirst < 1 || inputFirst > 10) || isNaN(inputFirst)) {
        div.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if ((inputSecond < 1 || inputSecond > 10) || isNaN(inputSecond)) {
        div.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${inputFirst}&_limit=${inputSecond}`)
            .then(async (data) => {
                const json = await data.json();
                for (i = 0; i < json.length; i++) {
                    const myImg = document.createElement("img");
                    myImg.src = json[i].url;
                    document.body.appendChild(myImg);
                    localStorage.setItem(`${[i]}`, json[i].url);
                }
                return json;
            })
            .catch(() => { console.log('error') });
    }
}
for (i = 0; i < localStorage.length; i++) {
    const myImg = document.createElement("img");
    myImg.src = localStorage.getItem(`${[i]}`);
    document.body.appendChild(myImg);
}

btn.addEventListener('click', () => {
    getPhoto();
});

window.addEventListener('DOMContentLoaded', () => {
    localStorage.clear()
});
