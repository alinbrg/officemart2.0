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
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
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

function mainPageReviewSlider() {
	if (document.querySelector(".review-wrapper")) {
		const newProd = new Swiper(".review-swiper", {
			navigation: {
				nextEl: `.review-wrapper .swiper-button-next`,
				prevEl: `.review-wrapper .swiper-button-prev`,
			},
			breakpoints: {
				0: {
					slidesPerView: 1.4,
					spaceBetween: 20,
					direction: "vertical",
					loop: true,
				},
				1024: {
					direction: "horizontal",
					slidesPerView: 3,
					spaceBetween: 20,
					loop: false,
				},
			},
		});
	}
}

function changeOrderOnAboutPage() {
	if (document.querySelector(".about-us-wrapper")) {
		const aboutWrapper = document.querySelector(".about-us-wrapper");
		const linkMap = document.querySelector(".link-map-wrapper");
		if (window.innerWidth <= 1024) {
			aboutWrapper.append(linkMap);
		}
	}
}

function blogPageSlider() {
	if (document.querySelector(".blog-page-wrapper")) {
		const swiper = new Swiper(".blog-page-wrapper .swiper", {
			slidesPerView: 1,
			spaceBetween: 10,
			pagination: {
				el: ".blog-page-wrapper .swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: ".blog-page-wrapper .swiper-button-next",
				prevEl: ".blog-page-wrapper .swiper-button-prev",
			},
		});
	}
}

function accordion() {
	const accodrions = document.querySelectorAll(".accordion .head");
	accodrions.forEach((el) => {
		el.addEventListener("click", (e) => {
			el.closest(".accordion").classList.toggle("active");
		});
	});
}

function closeModal(modal) {
	modal.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal")) modal.classList.remove("active");
	});
}

function copyContactData() {
	const modal = document.querySelector(".copy-modal");
	const copyContent = document.querySelectorAll(".copy");
	if (modal) {
		closeModal(modal);
		copyContent.forEach((el) => {
			el.addEventListener("click", () => {
				let text = el.closest(".row").querySelector("a.link-b").innerText;

				navigator.clipboard
					.writeText(text)
					.then(
						() => {
							modal.classList.add("active");
						},
						() => {
							console.error("Failed to copy");
						}
					)
					.finally(() => {
						setTimeout(() => {
							if (modal.classList.contains("active"))
								modal.classList.remove("active");
						}, 1000);
					});
			});
		});
	}
}

function openSignModals() {
	const signInBtn = document.querySelector(".sign-in");
	const signModal = document.querySelector(".sign");
	const closeModal = document.querySelector(".sign .close-modal ");
	if (signModal) {
		signInBtn.addEventListener("click", (e) => {
			e.preventDefault();
			signModal.classList.add("active");
		});
		closeModal.addEventListener("click", (e) => {
			signModal.classList.remove("active");
		});
		signModal.addEventListener("click", (e) => {
			if (
				signModal.classList.contains("active") &&
				e.target.classList.contains("sign")
			) {
				signModal.classList.remove("active");
			}
		});
	}
}

function selectSignUpRole() {
	const form = document.querySelector("#select-sign-up-role");
	const selectRoleBlock = document.querySelector(".select-role-block");
	const tabNames = document.querySelector(".sign .tab-names");
	const firstStep = document.querySelector(".step");
	const firstDivider = document.querySelector(".divider");

	if (form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			const role = form.querySelector('[name="sign-up-role"]:checked')?.value;
			if (role) {
				const selectedSignUpForm = document.querySelector(
					`[data-id="${role}"]`
				);
				selectRoleBlock.classList.add("hidden");
				tabNames.classList.add("hidden");
				selectedSignUpForm.classList.replace("hidden", "visible");
				firstStep.classList.add("active");
				firstDivider.classList.add("active");
			}
		});
	}
}

function signUpFormActions() {
	const forms = document.querySelectorAll('[data-class="sign-up-form"]');
	const steps = document.querySelectorAll(".step");
	const dividers = document.querySelectorAll(".divider");
	const tabNames = document.querySelector(".sign .tab-names");
	forms.forEach((form) => {
		const formBtn = form.querySelector(".form-btn.active");
		const formBtnHidden = form.querySelector(".form-btn.hidden");
		const formTabs = form.querySelectorAll(".form-tab");
		const showSignInForm = form.querySelector(".show-sign-in-form");

		formBtn.addEventListener("click", (e) => {
			const activeFormTab = form.querySelector(".form-tab.active");
			const errors = [];
			const inputs = activeFormTab.querySelectorAll("input[required]");

			inputs.forEach((el) => {
				if (!el.validity.valid) {
					el.classList.add("err");
					errors.push(el.validity.valid);
				} else {
					el.classList.remove("err");
				}
			});

			if (!errors.includes(false)) {
				if (+activeFormTab.dataset.id !== 3) {
					activeFormTab.classList.replace("active", "hidden");
					formTabs[activeFormTab.dataset.id]?.classList.add("active");
					steps[activeFormTab.dataset.id]?.classList.add("active");
					dividers[activeFormTab.dataset.id]?.classList.add("active");
					dividers[activeFormTab.dataset.id - 1]?.classList.add("full");
				}

				if (+activeFormTab.dataset.id + 1 === 3) {
					formBtn.classList.replace("active", "hidden");
					formBtnHidden.classList.replace("hidden", "active");
				}
			}
		});

		form?.addEventListener("submit", (e) => {
			e.preventDefault();
			formBtnHidden.classList.replace("active", "hidden");

			// add ajax and if success
			if (true) {
				formTabs[2]?.classList.replace("active", "hidden");
				formTabs[3]?.classList.add("active");
				steps[3]?.classList.add("active");
				dividers[3]?.classList.add("active");
				dividers[3 - 1]?.classList.add("full");
				tabNames.classList.remove("hidden");
				showSignInForm.classList.replace("hidden", "active");
			}
		});

		showSignInForm?.addEventListener("click", (e) => {
			document.querySelector('[data-tab-name="sign-in"]')?.click();
		});
	});
}
function signTabsChange() {
	const tabNames = document.querySelectorAll(".sign .tab-names a");
	const tabs = document.querySelectorAll(".tab");
	tabNames.forEach((name) => {
		name.addEventListener("click", (e) => {
			e.preventDefault();
			tabs.forEach((el) => el.classList.remove("active"));
			tabNames.forEach((el) => el.classList.remove("active"));

			name.classList.add("active");
			document
				.querySelector(`.tab[data-tab=${name.dataset.tabName}]`)
				.classList.add("active");
		});
	});
}

openSignModals();
signTabsChange();
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

mainPageReviewSlider();
changeOrderOnAboutPage();
blogPageSlider();

$(document).ready(function () {
	$("select").niceSelect();
});
accordion();
copyContactData();
selectSignUpRole();
signUpFormActions();
