document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World');

    const rootElement = document.querySelector('#root');
    const section = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isTrottled = false;

    document.addEventListener('mousewheel', function (event) {
        if (isTrottled) return;
        isTrottled = true;

        setTimeout(function () {
            isTrottled = false;
        }, 500);


        const direction = event.wheelDelta < 0 ? 1 : -1;

        if (direction === 1) {
            const isLastSection = currentSectionIndex === section.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }

        currentSectionIndex = currentSectionIndex + direction;
        console.log(currentSectionIndex);

        section[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})
