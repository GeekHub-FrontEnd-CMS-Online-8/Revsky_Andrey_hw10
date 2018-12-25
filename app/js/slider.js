let btn_prev = document.querySelector('#slider .buttons .arrow-left');
let btn_next = document.querySelector('#slider .buttons .arrow-right');
let item = document.querySelectorAll('#slider .slider__list li');
let i = 0;

btn_prev.onclick = function(){
    console.log(i);
    item[i].className = '';
    i = i - 1; /* i-- */
    if(i < 0){
        i = item.length - 1;
    }
    item[i].className = 'showed';
}

btn_next.onclick = function(){
    console.log(i);
    item[i].className = '';
    i = i + 1; /* i++ */
    if(i >= item.length){
        i = 0;
    }
    item[i].className = 'showed';
};

console.log(i);