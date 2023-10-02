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

function closeSignModals() {
	const closeModalBtns = document.querySelectorAll(
		".sign-modal-block .close-modal "
	);
	const modals = document.querySelectorAll(".sign-modal-block");
	closeModalBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			btn.closest(".sign-modal-block ").classList.remove("active");

			if ($("#city").data("select2")) {
				$("#city").select2("destroy");
			}
		});
	});
	modals.forEach((modal) => {
		modal.addEventListener("click", (e) => {
			if (
				modal.classList.contains("active") &&
				e.target.classList.contains("sign-modal-block")
			) {
				modal.classList.remove("active");
				if ($("#city").data("select2")) {
					$("#city").select2("destroy");
				}
			}
		});
	});
}

function openSignModals() {
	const signInBtn = document.querySelector(".sign-in");
	const signModal = document.querySelector(".sign");
	const openForgotModal = document.querySelector("#open-forgot-modal");
	const forgotModal = document.querySelector(".forgot-password");
	const backToSign = document.querySelector(".forgot-password .back-to-sign");
	const openSignModalAfterPasswordChange = document.querySelector(
		".success-message-after-password-change  .show-sign-in-form"
	);
	const successModal = document.querySelector(
		".success-message-after-password-change"
	);
	if (signModal) {
		signInBtn.addEventListener("click", (e) => {
			e.preventDefault();
			signModal.classList.add("active");
		});
	}
	if (openForgotModal) {
		openForgotModal.addEventListener("click", (e) => {
			e.preventDefault();
			signModal.classList.remove("active");
			forgotModal.classList.add("active");
		});
	}
	if (openSignModalAfterPasswordChange) {
		openSignModalAfterPasswordChange.addEventListener("click", (e) => {
			successModal.classList.remove("active");
			signModal.classList.add("active");
		});
	}
	// if (backToSign) {
	// 	backToSign.addEventListener("click", (e) => {
	// 		forgotModal.classList.remove("active");
	// 		signModal.classList.add("active");
	// 	});
	// }
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
				// tabNames.classList.add("hidden");
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
				// tabNames.classList.remove("hidden");
				showSignInForm.classList.replace("hidden", "active");
			}
		});

		showSignInForm?.addEventListener("click", (e) => {
			document.querySelector('[data-tab-name="sign-in"]')?.click();
		});
	});
}

function tabsChange(parent) {
	const parentEl = document.querySelector(parent);
	const tabNames = parentEl.querySelectorAll(".tab-names a");
	const tabs = parentEl.querySelectorAll(".tab");

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

function showPassword() {
	const showPasswordBtns = document.querySelectorAll(".form-row.password img");
	showPasswordBtns.forEach((btn) => {
		let typePassword = true;
		btn.addEventListener("click", (e) => {
			const input = btn.closest(".form-row.password")?.querySelector("input");
			typePassword = !typePassword;
			typePassword === false
				? (input.type = "text")
				: (input.type = "password");
		});
	});
}

function productPageSwiper() {
	const swiper = new Swiper(".product-page .thumbs", {
		spaceBetween: 8,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 0,
				spaceBetween: 0,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 8,
			},
		},
	});
	const swiper2 = new Swiper(".product-page .product-page-swiper", {
		spaceBetween: 0,
		slidesPerView: 1,
		thumbs: {
			swiper: swiper,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.2,
				spaceBetween: 8,
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		},
	});
}

function profilePageActions() {
	const tabBtns = document.querySelectorAll(".profile-tab-name");
	const tabs = document.querySelectorAll(".profile-tab");

	const profilePage = document.querySelector(".profile");

	if (profilePage) {
		const tabNames = [
			"favourite-products",
			"cart",
			"history",
			"addresses",
			"my-info",
			"security",
		];

		const pageUrl = window.location.href;
		const url = window.location.href.split("#")[0];
		const activeTab = window.location.href.split("#")[1];

		if (activeTab && tabNames.includes(activeTab)) {
			const selectedTabs = document.querySelectorAll(
				`[data-tab-name="${activeTab}"]`
			);
			selectedTabs.forEach((tab) => tab.classList.add("active"));
		} else {
			tabBtns[0]?.classList.add("active");
			tabs[0]?.classList.add("active");
			window.location.href = url + "#" + tabNames[0];
		}

		tabBtns.forEach((btn, index) => {
			btn.addEventListener("click", (e) => {
				removeActiveClasses();
				btn.classList.add("active");
				tabs[index]?.classList.add("active");

				tabNames[index] && (window.location.href = url + "#" + tabNames[index]);
			});
		});

		function removeActiveClasses() {
			[...tabBtns, ...tabs].forEach((btn) => {
				btn.classList.remove("active");
			});
		}

		// orders

		const seeOrderInfo = document.querySelectorAll(".see-order-info");
		seeOrderInfo.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				btn.closest(".order-card").classList.toggle("active");
			});
		});

		// my info tab

		const editBtn = document.querySelectorAll(".edit-btn:not(.edit-password)");
		const saveBtn = document.querySelectorAll(".save-btn");
		const x = document.querySelector(".x");

		editBtn.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				btn
					.closest("form")
					.querySelectorAll("input")
					.forEach((el, index, arr) => {
						arr[0].focus();
						el.removeAttribute("readonly");
					});

				btn.classList.add("hidden");
				btn
					.closest("form")
					.querySelector(".save-btn")
					?.classList.remove("hidden");
				btn.closest("form").querySelector(".x")?.classList.remove("hidden");
			});
		});

		x.addEventListener("click", () => {
			x.closest("form")
				.querySelectorAll("input")
				.forEach((el) => {
					el.setAttribute("readonly", true);
				});

			x.classList.add("hidden");
			editBtn?.classList.remove("hidden");
			saveBtn?.classList.add("hidden");
		});

		// edit password
		const editPassword = document.querySelector(".edit-password");
		const passwordModal = document.querySelector(".password-modal");
		const nextPass = document.querySelector(".password-modal .form-btn.next");
		const newPassBlock = document.querySelector(".new-password-block");
		const oldPassBlock = document.querySelector(".old-password-block");
		const passwordTabNames = document.querySelectorAll(
			".password-modal .tab-names a"
		);
		editPassword.addEventListener("click", () => {
			passwordModal.classList.add("active");
		});

		nextPass.addEventListener("click", () => {
			oldPassBlock.classList.add("hidden");
			newPassBlock.classList.remove("hidden");
			passwordTabNames.forEach((el) => el.classList.toggle("hidden"));
		});

		// addresses
		const addAddressBtn = document.querySelector(".add-address");
		const addressModal = document.querySelector(".add-address-modal");
		const cityAddBtn = document.querySelector(".city-select-btn");
		const selectedCity = document.querySelector("#city");
		const addressModalBlocks = document.querySelectorAll(
			".address-modal-blocks"
		);
		let select;
		createCitySelect();

		function createCitySelect() {
			select = $("#city").select2({
				closeOnSelect: false,
			});

			select.on("select2:closing", function (e) {
				e.preventDefault();
			});
		}

		addAddressBtn.addEventListener("click", (e) => {
			document.querySelector(".city-block").classList.remove("hidden");
			document.querySelector(".street-block").classList.add("hidden");

			createCitySelect();
			addressModal.classList.add("active");
			select.select2("open");
		});

		cityAddBtn.addEventListener("click", () => {
			if (selectedCity.value != 0) {
				if ($("#city").data("select2")) {
					$("#city").select2("destroy");
				}
				addressModalBlocks.forEach((el) => el.classList.toggle("hidden"));
			}
		});
	}
}

openSignModals();
tabsChange(".sign");
tabsChange(".order-page-aside");
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
	$("select:not(#city)").niceSelect();
});
accordion();
copyContactData();
selectSignUpRole();
signUpFormActions();
showPassword();
closeSignModals();
productPageSwiper();
profilePageActions();
