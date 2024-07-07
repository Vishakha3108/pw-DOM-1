const button = document.getElementById('button');
const heading = document.getElementById('heading');
const chnageHeading = heading.classList

button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// heading.addEventListener('click', ()=>{
//     const result = chnageHeading.toggle('dark mode');
//     heading.textContent = `dark mode ${result}`
// })
// const button = document.getElementById('button');
// const heading = document.getElementById('heading');
// const changeHeading = heading.classList;

// button.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

heading.addEventListener('click', () => {
    const result = changeHeading.toggle('dark-mode');
    if (result) {
        heading.textContent = 'Heading: Dark mode on';
    } else {
        heading.textContent = 'Heading: Dark mode off';
    }
});
