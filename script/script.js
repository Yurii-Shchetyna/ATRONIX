//background

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	const moveX = scroll * -0.03;
	const moveY = scroll * -0.07;
	document.querySelector('.bg').style.transform = `translate(${moveX}px,${moveY}px)`;
});

// Burger Menu

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.getElementById('burgerMenu');

burgerBtn?.addEventListener('click', () => {
	if (!burgerMenu.classList.contains('visible')) {
		burgerMenu.classList.add('visible');
		burgerBtn.classList.add('active');
		document.body.style.overflow = 'hidden';
	} else {
		burgerMenu.classList.remove('visible');
		burgerBtn.classList.remove('active');
		document.body.style.overflow = 'visible';
	}
});

/*
// Carousels

const carousel1 = document.getElementById('carousel');
let scrollIndex = 0;
const blocksC = document.querySelectorAll('.officeImg');
const total = blocksC.length;
const setCarousel1 = setInterval(() => {
	scrollIndex++;
	if (scrollIndex >= total) scrollIndex = 0;
	const nextBlock = blocksC[scrollIndex];
	if (window.scrollY < 300){
	  carousel1.scrollTo({
	  	left: nextBlock.offsetLeft,
	  	behavior: 'smooth'
	  })
	}
}, 3000);

window.addEventListener('scroll', () => {
	if (window.scrollY > 400) {
		clearInterval(setCarousel1);
	}
});


const carousel2 = document.getElementById('carousel2');
let scrollIndex2 = 0;
const blocksC2 = document.querySelectorAll('.team');
const total2 = blocksC2.length;
let setCarousel2;

function scrollNextBlock() {
  scrollIndex2++;
  if (scrollIndex2 >= total2) scrollIndex2 = 0;

  const nextBlock = blocksC2[scrollIndex2];
  carousel2.scrollTo({
    left: nextBlock.offsetLeft - carousel2.offsetLeft, // позиція відносно контейнера
    behavior: 'smooth'
  });
}

function startCarousel2() {
  if (!setCarousel2 && window.scrollY > 300) {
    setCarousel2 = setInterval(scrollNextBlock, 3000);
    window.removeEventListener('scroll', startCarousel2);
  }
}

window.addEventListener('scroll', startCarousel2);

window.addEventListener('scroll', () => {
  if (window.scrollY > 800 && setCarousel2) {
    clearInterval(setCarousel2);
    setCarousel2 = null;
  }
});

*/

// Products

const section = document.querySelector('.prods');
const blocks = document.querySelectorAll('.block');

function prodsReveal() {
	blocks.forEach(prod => {
		const winCenter = window.innerHeight / 2;
		const rect = prod.getBoundingClientRect();
		const prodCenter = rect.top + rect.height / 2;
		if (prodCenter <= winCenter * 1.9 && prodCenter * 1.3 > winCenter * 0.4) {
			prod.classList.add('show');
		} else {
			prod.classList.remove('show');
		}

	});
};

window.addEventListener('load', prodsReveal);
window.addEventListener('scroll', prodsReveal);

//About us

const about = document.querySelectorAll('.about');

window.addEventListener('scroll', () => {
	about.forEach((block, i) => {
		const rect = block.getBoundingClientRect();
		const next = about[i + 1];

		if (rect.top < 105) {
			block.classList.add('sticky-about');
		}
		if (next) {
			const rectNext = next.getBoundingClientRect();
			const overlap = 105 + rect.height * 0.7 - rectNext.top;
			if (overlap > 0) {
				block.style.opacity = Math.max(1 - overlap / 300, 0);
			} else {
				block.style.opacity = 1;
			}
		}
	});
});