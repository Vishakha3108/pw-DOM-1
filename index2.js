const btnOne = document.querySelector('.btnOne');
const btntwo = document.querySelector('.btntwo');
const count = document.querySelector('.count');
const changeBy = document.querySelector('.changeBy');
const resetbtn = document.querySelector('.reset-btn');

btnOne.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    const newCount = countValue - changeByValue;
    
    if (newCount < 0) {
        alert('Count is going below 0!');
    } else {
        count.innerText = newCount;
    }
});

btntwo.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    const newCount = countValue + changeByValue;
    
    if (newCount < 0) {
        alert('Count is going below 0!');
    } else {
        count.innerText = newCount;
    }
});

resetbtn.addEventListener('click', () => {
    count.innerText = 0;
});
