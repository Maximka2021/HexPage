let text = document.getElementById('text');
let btnOn = document.getElementById('btn');
let btnOff = document.getElementById('btn2');
let bool = true;

btnOn.addEventListener('click', () =>{
    btnOff.classList.toggle('active-2');
    btnOn.classList.toggle('active-1');
    bool = true;
    console.log(bool);
})

btnOff.addEventListener('click', () =>{
    btnOff.classList.toggle('active-2');
    btnOn.classList.toggle('active-1');
    document.body.style.backgroundColor = 'white';
    text.textContent = '';
    bool = false;
    console.log(bool);
})

    setInterval(() =>{
        if(bool == true){
            let char = 'abcdeABCDE3456789';
            let textLength = 6;
            let textOutput = '';
            for(let i = 0; i < textLength; i++){
                let rndNum = Math.floor(Math.random() * char.length);
                textOutput += char.substring(rndNum, rndNum + 1);
            }
            document.body.style.backgroundColor = '#' + textOutput;
            text.textContent = 'Hex code: ' + textOutput;
        }else{
            console.clear();
            console.log('Paused');
        }
    }, 1500)



