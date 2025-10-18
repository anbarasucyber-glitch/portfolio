//simple animatiom for skill bar
const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.computedStyleMap.width;
            entry.target.computedStyleMap.width = '0'
            setTimeout(() => {
                entry.target.computedStyleMap.width = width;
            }, 100);
        }
    });
},{threshold: 0.5});
skillBars.forEach(bar => {
    observer.observe(bar);
});

//smooth scrolling fo navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});