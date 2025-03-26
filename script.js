
let btn = document.querySelector('#bt')


btn.addEventListener('click', function () {
    let num = document.querySelector('.num')
    let inpt = document.querySelector('#in').value
    console.log(inpt);
    num.innerHTML = inpt
})