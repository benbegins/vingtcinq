import "../scss/style.scss"

const siteHeader = document.querySelector(".site-header")
const navSections = document.querySelector(".nav-sections")
const pourquoiChoisir = document.querySelector(".pourquoi-choisir")
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section-scroll")

const stickySections = () => {
	const headerHeight = siteHeader.offsetHeight
	const navSectionsHeight = navSections.offsetHeight
	navSections.style.top = `${headerHeight}px`
	pourquoiChoisir.style.top = `calc(${
		headerHeight + navSectionsHeight
	}px + 2rem)`
}

const navScrollTo = () => {
	const scrollY = window.scrollY + 160

	sections.forEach((section) => {
		const top = section.offsetTop
		const height = section.offsetHeight
		const id = section.getAttribute("id")

		if (scrollY > top && scrollY <= top + height) {
			navLinks.forEach((link) => {
				link.classList.remove("active")
			})
			document
				.querySelector(`.nav-link[href="#${id}"]`)
				.classList.add("active")
		} else {
			document
				.querySelector(`.nav-link[href="#${id}"]`)
				.classList.remove("active")
		}
	})
}

const navClickTo = () => {
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.forEach((link) => {
				link.classList.remove("active")
			})
			window.removeEventListener("scroll", navScrollTo)
			link.classList.add("active")

			setTimeout(() => {
				window.addEventListener("scroll", navScrollTo)
			}, 1000)
		})
	})
}

const init = () => {
	stickySections()
	navClickTo()
	window.addEventListener("scroll", navScrollTo)
}

document.addEventListener("DOMContentLoaded", init)
