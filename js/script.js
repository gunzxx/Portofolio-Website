document.addEventListener("DOMContentLoaded", () => {
    const viewportHeight = document.documentElement.clientHeight;

    /** Efek transisi teks untuk jumbotron */
    let words = ['Web Developer', 'Backend Developer', 'Full Stack Developer'],
        bagianKata,
        indexKata = 0,
        offset = 0,
        len = words.length,
        maju = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 70;

    let wordflick = function () {
        setInterval(function () {
            if (maju) {
                if (offset > words[indexKata].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        maju = false;
                        skip_count = 0;
                    }
                }
            }
            else {
                if (offset == 0) {
                    maju = true;
                    indexKata++;
                    offset = 0;
                    if (indexKata >= len) {
                        indexKata = 0;
                    }
                }
            }

            bagianKata = words[indexKata].substr(0, offset);
            if (skip_count == 0) {
                if (maju) {
                    offset++;
                }
                else {
                    offset--;
                }
            }

            document.querySelector('.word').innerHTML = bagianKata;
        }, speed);
    };

    window.onload = function () {
        wordflick();
    };


    /** Parallax untuk navbar/header */
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop < lastScrollTop) {
            nav.style.opacity = .5;
            nav.style.top = '0';
        } else if (currentScrollTop > lastScrollTop && window.scrollY > (viewportHeight - 80)) {
            nav.style.top = '-80px';
        }

        if (currentScrollTop == 0) {
            nav.style.opacity = 1;
        }

        lastScrollTop = currentScrollTop;
    });

    

    document.body.addEventListener('mousemove', (e) => {              
        if (e.clientY <= 10) {
            nav.style.top = '0';
        } else if (e.clientY != 0 && window.scrollY > viewportHeight) {
            nav.style.top = '-80px';
        }
    });
})




