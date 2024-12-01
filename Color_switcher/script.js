const btn = document.querySelectorAll('.btn')
const body = document.querySelector('body')

btn.forEach(function(btn){
    btn.addEventListener('click',function (e){
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
            const add = body.innerText('MIlind')
            body.append('add')
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
});
});