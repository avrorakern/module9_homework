let btn = document.getElementById('body__btn');
let div = document.getElementById('body__div');
let url = 'https://jsonplaceholder.typicode.com/photos';

function getPhoto(url) {
    let input = document.getElementById('body__input').value;
    url = url + '?limit=' + input;
    const xhr = new XMLHttpRequest();
    if (input < 1 || input > 10) {
        div.innerHTML = 'Число вне диапазона от 1 до 10!';
    } else {
        xhr.open('get', url, true);
        xhr.onload = () => {
            let json = JSON.parse(xhr.response)
            for (i = 0; i < input; i++){
                const imgURL = json[i].url;
                const myImg = document.createElement("img");
                myImg.src = imgURL;
                document.body.appendChild(myImg);
            }
        }
        xhr.send();
    }
}

btn.addEventListener('click', (event) => {
    getPhoto(url);
    event.preventDefault();
    let input = document.getElementById('body__input');
    input.value = '';
});