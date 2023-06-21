let catSwiper;
function coffeeSwiperSlider() {
	if (document.querySelector(".coffee-swiper")) {
		const coffeeSwiper = new Swiper(".coffee-swiper", {
			pagination: {
				el: ".coffee-swiper .swiper-pagination",
				type: "bullets",
				clickable: true,
			},
		});
	}
}

function catSwiperSlider() {
	if (document.querySelector(".cat-swiper"))
		catSwiper = new Swiper(".cat-swiper", {
			navigation: {
				nextEl: ".categories .swiper-button-next",
				prevEl: ".categories .swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 2.2,
					spaceBetween: 8,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 10,
				},
			},
		});
}
function categoryDropDown() {
	const allCatBtn = document.querySelector(".all-cat-btn");
	const catSwiperSld = document.querySelector(".cat-swiper");
	const catWrapper = document.querySelector(".cat-wrapper");
	const categories = document.querySelector(".categories");
	if (catSwiper) {
		allCatBtn.addEventListener("click", (e) => {
			allCatBtn.classList.toggle("active");
			catWrapper.classList.toggle("active");
			categories.classList.toggle("active");
			if (catWrapper.classList.contains("active")) {
				catSwiper.destroy();
				catSwiperSld.classList.add("active");
			} else {
				catSwiperSld.classList.remove("active");
				catSwiperSlider();
			}
		});
	}
}

const mainPageSliderBreakpoints = {
	0: {
		slidesPerView: 1.65,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 4,
		spaceBetween: 10,
	},
	1200: {
		slidesPerView: 5,
		spaceBetween: 20,
	},
};

function mainPageSlider(
	swiper,
	button,
	breakpoints = mainPageSliderBreakpoints
) {
	if (document.querySelector(swiper)) {
		const newProd = new Swiper(swiper, {
			navigation: {
				nextEl: `${button} .swiper-button-next`,
				prevEl: `${button} .swiper-button-prev`,
			},
			breakpoints: breakpoints,
		});
	}
}

coffeeSwiperSlider();
catSwiperSlider();
categoryDropDown();

mainPageSlider(".new-prod-swiper", ".new-prod-slider");
mainPageSlider(".sale-prod-swiper", ".sale-prod-slider");
mainPageSlider(".wholesale-prod-swiper", ".wholesale-prod-slider");
mainPageSlider(".carousel-1-prod-swiper", ".carousel-1");
mainPageSlider(".carousel-2-prod-swiper", ".carousel-2");
mainPageSlider(".carousel-3-prod-swiper", ".carousel-3");
mainPageSlider(".blog-swiper", ".blog", {
	0: {
		slidesPerView: 1.1,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 3,
		spaceBetween: 20,
	},
});
mainPageSlider(".logos-swiper", ".logos", {
	0: {
		slidesPerView: 2.7,
		spaceBetween: 20,
	},
	1024: {
		slidesPerView: 6,
		spaceBetween: 20,
	},
});
