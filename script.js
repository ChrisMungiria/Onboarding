document.querySelector('.progress-bar').style.width = '40%';
const checks = document.querySelectorAll('.item');
checks.forEach(check =>{
    check.addEventListener('click', () => {
        check.classList.toggle('checked');
    });
});

