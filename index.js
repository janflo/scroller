document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World');

    const rootElement = document.querySelector('#root');
    const section = document.querySelectorAll('section');

    document.addEventListener('mousewheel', function (event) {
        console.log(event.wheelDelta)
    })
})
