const container = document.querySelector('.container')
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

// for container position
const containerRect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Free Palestine 🇵🇸 🇯🇴'
});


noBtn.addEventListener('mouseover', () => {
    const width = Math.floor(Math.random() * (containerRect.width - noBtnRect.width));
    console.log("width", width);
    const height = Math.floor(Math.random() * (containerRect.height - noBtnRect.height));
    console.log("height", height);

    noBtn.style.left = width + 'px'
    noBtn.style.top = height + 'px'
})

