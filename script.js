document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 2.5,
        perMove: 1,
        focus: 'center',
        autoplay: true,
        interval: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        breakpoints: {
            1440: {
                perPage: 3.5,
            },
            768: {
                perPage: 2.5,
            },            
            425: {
                perPage: 1,
            },
            0: {
                perPage: 1,
            }
        }
    });

    splide.mount();

    function updateSlides() {
        if (window.innerWidth > 1440) {
            splide.options = { perPage: 6 };
        }
    }

    updateSlides();
    window.addEventListener('resize', updateSlides);
});


    updateSlides();
    window.addEventListener('resize', updateSlides);
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function checkVisibility() {
    const container = document.querySelector('#container-descrição-header');
    const columns = document.querySelectorAll('.g-col-3');
    const avaliacao = document.querySelector('#container-avaliacao-pessoas');

    if (isElementInViewport(container)) {
        container.classList.add('visible');
    }

    columns.forEach((column) => {
        if (isElementInViewport(column)) {
            column.classList.add('visible');
        }
    });

    if (isElementInViewport(avaliacao)) {
        avaliacao.classList.add('visible');
    }
}

window.addEventListener('scroll', checkVisibility);

checkVisibility();

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('visible');
                }, index * 200);
            });

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

const container = document.getElementById('container-home-i');
observer.observe(container);

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.home-box');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  boxes.forEach(box => observer.observe(box));
});
