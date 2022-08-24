
        const up = document.querySelector('.up');

        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
        const btn4 = document.getElementById('btn4');
        const btn5 = document.getElementById('btn5');
        const btn6 = document.getElementById('btn6');

        const section1 = document.querySelector('.box1');
        const section2 = document.querySelector('.box2');
        const section3 = document.querySelector('.box3');
        const section4 = document.querySelector('.box4');
        const section5 = document.querySelector('.box5');
        const section6 = document.querySelector('.box6');

        console.log(up, btn1);

        btn1.addEventListener('click', () => {
        scrollTo({
        top: 0,
        behavior: "smooth"
            });
        });

        btn2.addEventListener('click', () => {
        scrollTo({
        top: 960,
        behavior: "smooth"
            });
        });

        btn3.addEventListener('click', () => {
        scrollTo({
        top: 1922,
        behavior: "smooth"
            });
        });

        btn4.addEventListener('click', () => {
        scrollTo({
        top: 2883,
        behavior: "smooth"
            });
        });

        btn5.addEventListener('click', () => {
        scrollTo({
        top: 3844,
        behavior: "smooth"
            });
        });

        btn6.addEventListener('click', () => {
        scrollTo({
        top: 4810,
        behavior: "smooth"
            });
        });