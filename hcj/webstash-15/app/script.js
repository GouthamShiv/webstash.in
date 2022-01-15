const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const cValue = +counter.innerText;
        const increment = target / 800;

        if (cValue < target) {
            counter.innerText = `${Math.ceil(cValue + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter()
});