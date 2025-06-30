import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (navigator.userAgent.includes("SamsungBrowser")) {
	document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
}


// 1. Objeto con la información de cada proyecto, indexado por ID
const projects = {
	codigosa: {
		image: [
			"/img/proyects/previews/Codigosa_preview.webp",
			"/img/proyects/previews/Codigosa_preview_mv.webp"
		],
		name: "Codigosa",
		description:
			"Es un proyecto que tiene como objetivo la digitalización de negocios y buscar aumentar la visibilidad de los negocios a través de internet, con la posibilidad de hacer todo tipo de pagina a gusto del cliente",
		skills: [
			{
				iconSrc: "/img/icons/techIcons/frontend/iconJavaScript.svg",
				iconAlt: "Logo de JavaScript",
				text: "JavaScript",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconHTML5.svg",
				iconAlt: "Logo de HTML5",
				text: "HTML5",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconCSS.svg",
				iconAlt: "Logo de CSS",
				text: "CSS",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconAstro.svg",
				iconAlt: "Logo de Astro",
				text: "Astro",
			},
			{
				iconSrc: "/img/icons/techIcons/other/iconWordPress.svg",
				iconAlt: "Logo de Wordpress",
				text: "Wordpress",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconTypeScript.svg",
				iconAlt: "Logo de TypeScript",
				text: "TypeScript",
			},
		],
		urls: {
			github: "https://github.com/dani2f/codigosa-astro",
			live: "https://www.codigosa.es/",
		}
	},
	proximamente: {
		image: [
			"/img/proyects/proximamente1.webp",
			"/img/proyects/proximamente1.webp"
		],

		name: "Proyecto Próximamente 1",
		description: "Este proyecto se encuentra en desarrollo...",
		comingSoon: true, // Marcamos que es un proyecto aún en desarrollo
		skills: [],
		urls: {

		}
	},
	hireflow: {
		image: [
			"/img/proyects/previews/hireflow_preview.webp",
			"/img/proyects/previews/hireflow_preview_mv.webp"
		],
		name: "HireFlow IA",
		description: "Aplicación de búsqueda de empleo que, gracias a tu perfil, utiliza IA para localizar empresas cercanas y enviar solicitudes por correo electrónico; así podrás enviar muchas candidaturas en poco tiempo.",
		skills: [
			{
				iconSrc: "/img/icons/techIcons/fullstack/iconNext.svg",
				iconAlt: "Logo de NextJs",
				text: "NextJs",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconReact.svg",
				iconAlt: "Logo de React",
				text: "React",
			},
		],
		urls: {
			github: "https://github.com/dani2f/hire-flow-ia",
			live: "https://hire-flow-ia.vercel.app/",
		}
	},
	portfolio: {
		image: [
			"/img/proyects/previews/portfolio_preview.webp",
			"/img/proyects/previews/portolio_preview_mv.webp"
		],
		name: "Portfolio",
		description: "Aqui podrás ver los proyectos que desarrollo en mi tiempo libre. Además de la experiencia laboral y las tecnologías que he utilizado, también puedes ver los certificados que he obtenido durante mi carrera.",
		skills: [
			{
				iconSrc: "/img/icons/techIcons/frontend/iconJavaScript.svg",
				iconAlt: "Logo de JavaScript",
				text: "JavaScript",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconHTML5.svg",
				iconAlt: "Logo de HTML",
				text: "HTML",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconCSS.svg",
				iconAlt: "Logo de CSS",
				text: "CSS",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconTailwind.svg",
				iconAlt: "Logo de Tailwind",
				text: "Tailwind",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconAstro.svg",
				iconAlt: "Logo de Astro",
				text: "Astro",
			},
		],
		urls: {
			github: "https://github.com/dani2f/portfolio",
			live: "https://danielgomezfullstack.vercel.app/",
		}
	},
	adaxa: {
		image: [
			"/img/proyects/previews/Adaxa_preview.webp",
			"/img/proyects/previews/Adaxa_preview_mv.webp"
		],
		name: "Adaxa",
		description: "Proyecto para una empresa de desarrollo web, es la página de presentación la cual pretende dar a conocer sus servicios.",
		skills: [
			{
				iconSrc: "/img/icons/techIcons/frontend/iconJavaScript.svg",
				iconAlt: "Logo de JavaScript",
				text: "JavaScript",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconCSS.svg",
				iconAlt: "Logo de CSS",
				text: "CSS",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconHTML5.svg",
				iconAlt: "Logo de HTML5",
				text: "HTML5",
			},
		],
		urls: {

		}
	},
	bilbaoskp: {
		image: [
			"/img/proyects/previews/BilbaoSkp_preview.webp",
			"/img/proyects/previews/BilbaoSkp_preview_mv.webp"
		],
		name: "BilbaoSKP",
		description:
			"Proyecto para una empresa dedicada al mundo de los Escape Rooms, la cual queria poder tener posibilidad de reservar y tener Escape Rooms para jugar de manera online. Puedes comprar los cupones en la página y mediante ellos comprar o reservar escape rooms",
		skills: [
			{
				iconSrc: "/img/icons/techIcons/frontend/iconCSS.svg",
				iconAlt: "Logo de CSS",
				text: "CSS",
			},
			{
				iconSrc: "/img/icons/techIcons/frontend/iconHTML5.svg",
				iconAlt: "Logo de HTML5",
				text: "HTML5",
			},
			{
				iconSrc: "/img/icons/techIcons/backend/iconJava.svg",
				iconAlt: "Logo de Java",
				text: "Java",
			},
			{
				iconSrc: "/img/icons/techIcons/backend/iconEclipse.svg",
				iconAlt: "Logo de Eclipse",
				text: "Eclipse",
			},
		],
		urls: {

		}
	},
};

// 2. Función para crear una skill card
function createSkillCard({ href, iconSrc, iconAlt, text }) {
	const skillCard = document.createElement("a");

	// Si hay href, se añade el atributo junto con target="_blank"
	if (href) {
		skillCard.setAttribute("href", href);
		skillCard.setAttribute("target", "_blank");
	}

	// Se asigna la clase base con cambios de padding y visibilidad del texto
	skillCard.className = `w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-auto lg:h-auto bg-[var(--main-background-color)] rounded-md flex items-center justify-center gap-2 transition-all duration-300 text-[var(--main-char-color)] text-sm xl:text-base font-thin ${iconSrc ? "px-2 py-2 lg:px-4 rounded-md" : "px-2 py-[0.15rem] lg:px-4 rounded-[0.14rem]"
		} ${text ? "lg:px-4" : "lg:px-[0.5rem]"} ${href ? "cursor-pointer  hover:bg-slate-800" : ""}`;

	// Si se proporciona iconSrc, se crea el elemento img
	if (iconSrc) {
		const skillIcon = document.createElement("img");
		skillIcon.src = iconSrc;
		skillIcon.alt = iconAlt || "";
		skillIcon.className = "w-full lg:w-5 lg:h-5 ";
		skillCard.appendChild(skillIcon);
	}

	// Contenedor para el texto; se muestra solo si hay contenido
	if (text) {
		const textContainer = document.createElement("div");
		textContainer.className = iconSrc ? "hidden lg:flex" : "";;
		textContainer.textContent = text;
		skillCard.appendChild(textContainer);
	}

	return skillCard;
}



// 3. Listener para abrir el overlay al hacer clic en una caja
document.addEventListener("click", (event) => {
	let target = event.target;
	if (event.target.tagName === "IMG" || event.target.tagName === "P") {
		target = event.target.parentElement;
	}

	if (target.classList.contains("grid-box")) {

		//quitamos la clase que ahce la animacion de hover (para que en movil no se quede pillado), y luego la agregamos
		target.classList.remove("box");

		// Función para volver a añadir la clase cuando el usuario toque otra parte de la pantalla
		const restoreBox = () => {
			setTimeout(() => {
				target.classList.add("box");
			}, 150);

			document.removeEventListener("touchstart", restoreBox); // Eliminamos el listener después de ejecutarlo
			document.removeEventListener("click", restoreBox);
		};
		// Escuchamos el siguiente toque en la pantalla
		document.addEventListener("touchstart", restoreBox);
		document.addEventListener("click", restoreBox);





		// Tomamos el ID del proyecto
		let projectId = null;
		if (target.getAttribute("id")) {
			projectId = target.getAttribute("id");
		}

		if (!projectId || !projects[projectId]) {
			projectId = "proximamente";
		}

		const projectData = projects[projectId];

		// Animaciones y dimensiones del overlay
		const rect = target.getBoundingClientRect();
		const parentRect = document.getElementById("all-grid").getBoundingClientRect();

		const startLeft = rect.left - parentRect.left;
		const startTop = rect.top - parentRect.top;
		const startWidth = rect.width;
		const startHeight = rect.height;

		// Removemos overlays previos (si hubiera)
		document.querySelectorAll(".grid-overlay").forEach((el) => el.remove());

		// Creamos el overlay
		const overlay = document.createElement("div");
		overlay.classList.add("grid-overlay");

		// Definimos variables CSS para animación si lo deseas
		document.documentElement.style.setProperty("--start-left", `${startLeft}px`);
		document.documentElement.style.setProperty("--start-top", `${startTop}px`);
		document.documentElement.style.setProperty("--start-width", `${startWidth}px`);
		document.documentElement.style.setProperty("--start-height", `${startHeight}px`);

		// Estilos del overlay
		overlay.style.position = "absolute";
		overlay.style.top = `${startTop}px`;
		overlay.style.left = `${startLeft}px`;
		overlay.style.width = `${startWidth}px`;
		overlay.style.height = `${startHeight}px`;
		overlay.style.background = "rgba(46, 58, 68)";
		overlay.style.borderRadius = "0.5rem";
		overlay.style.zIndex = "10";
		overlay.style.animation = "expandAnimation 1200ms ease-out forwards";
		overlay.classList.add("shadow-2xl");
		// Añadimos transición para la opacidad al cerrar
		overlay.style.transition = "opacity 300ms ease";

		document.getElementById("all-grid").appendChild(overlay);

		requestAnimationFrame(() => {
			overlay.classList.add("active");
			setTimeout(() => {
				// Creamos el contenido del overlay
				const content = document.createElement("div");

				// Si es un proyecto "Próximamente", mostramos un panel especial
				if (projectData.comingSoon) {
					content.classList.add(
						"w-[80vw]",
						"h-[50vh]",
						"sm:w-[70vw]",
						"sm:h-[40vh]",
						"md:w-[80vw]",
						"md:h-[50vh]",
						"lg:w-[60rem]",
						"lg:h-[70vh]",
						"cursor-pointer",
						"bg-[var(--second-background-color)]",
						"text-[var(--main-char-color)]",
						"flex",
						"flex-col",
						"justify-center",
						"items-center",
						"rounded-lg"
					);

					// Contenedor interno para centrar el icono y el texto
					const comingSoonContainer = document.createElement("div");
					comingSoonContainer.classList.add("flex", "flex-col", "justify-center", "items-center", "gap-[3rem]");

					// Icono (la ruta la colocarás tú)
					const comingSoonIcon = document.createElement("img");
					comingSoonIcon.src = "/img/icons/iconSoon.webp"; // Actualiza la ruta según corresponda
					comingSoonIcon.alt = "Próximamente";
					comingSoonIcon.classList.add("w-[5rem]", "h-[5rem]", "lg:w-[10rem]", "lg:h-[10rem]"); // Puedes ajustar el tamaño

					// Texto indicativo
					const comingSoonText = document.createElement("p");
					comingSoonText.textContent = "Próximamente";
					comingSoonText.classList.add("text-2xl", "md:text-[2rem]", "lg:text-[3rem]", "font-special");

					comingSoonContainer.appendChild(comingSoonIcon);
					comingSoonContainer.appendChild(comingSoonText);
					content.appendChild(comingSoonContainer);
				} else {
					// Contenido normal para proyectos terminados
					content.classList.add(
						"w-[80vw]",
						"h-[50vh]",
						"sm:w-[70vw]",
						"sm:h-[40vh]",
						"md:w-[80vw]",
						"md:h-[50vh]",
						"lg:w-[60rem]",
						"lg:h-[70vh]",
						"cursor-pointer",
						"bg-[var(--second-background-color)]",
						"text-[var(--main-char-color)]",
						"flex",
						"flex-col",
						"lg:flex-row",
						"justify-center",
						"items-center",
						"mb-[5rem]",
						"rounded-lg"
					);

					// Imagen de fondo dinámica
					const imageDiv = document.createElement("div");
					imageDiv.classList.add(
						"bg-cover",
						"bg-center",
						"w-full",
						"h-[50%]",
						"lg:w-[50%]",
						"lg:h-full",
						"rounded-lg"
					);
					if (window.innerWidth >= 1024) {
						imageDiv.style.backgroundImage = `url(${projectData.image[0]})`;
					}
					else {
						imageDiv.style.backgroundImage = `url(${projectData.image[1]})`;
					}
					// imageDiv.style.backgroundImage = `url(${projectData.image})`;

					// Contenedor de texto y skills
					const textContainer = document.createElement("div");
					textContainer.classList.add(
						"w-full",
						"h-[50%]",
						"lg:w-[50%]",
						"lg:h-full",
						"flex",
						"flex-col",
						"justify-around",
						"lg:justify-between",
						"items-start",
						"lg:gap-6"
					);

					const textContent = document.createElement("div");
					textContent.classList.add("p-[2%]", "pt-0", "pb-[1%]", "lg:p-[7%]");
					textContent.innerHTML = `
			  <h3 class="text-left text-[1.5rem] lg:text-[3rem] font-special">
				${projectData.name}
			  </h3>
			  <p class="text-start text-[0.5rem] lg:text-[1rem] font-standard text-[var(--second-char-color)] mb-[1rem]">
				${projectData.description}
			  </p>

			`;
					//container de links para movil
					const linksContainerLg = document.createElement("div");
					linksContainerLg.classList.add("hidden", "lg:flex", "flex-row", "justify-start", "items-center", "gap-2", "w-full");
					//container de links para pc
					const linksContainer = document.createElement("div");
					linksContainer.classList.add("flex", "flex-row", "flex-wrap", "gap-2", "py-[0]", "lg:hidden");

					//si hay github la ponemos sino no
					if (projectData.urls.github) {
						linksContainerLg.appendChild(createSkillCard({
							href: projectData.urls.github,
							iconSrc: "/img/icons/techIcons/other/iconGithub.svg",
							iconAlt: "Github logo",
						}));

						linksContainer.appendChild(createSkillCard({
							href: projectData.urls.github,
							iconSrc: "/img/icons/techIcons/other/iconGithub.svg",
							iconAlt: "Github logo",
						}));
					}

					//si hay url la ponemos sino no
					if (projectData.urls.live) {
						linksContainerLg.appendChild(createSkillCard({
							href: projectData.urls.live,
							iconSrc: "/img/icons/iconGoOtherPage.svg",
							iconAlt: "Nueva Ventana logo",
						}));
						linksContainer.appendChild(createSkillCard({
							href: projectData.urls.live,
							iconSrc: "/img/icons/iconGoOtherPage.svg",
							iconAlt: "Nueva Ventana logo",
						}));
					}

					textContent.appendChild(linksContainerLg);

					// Contenedor para las skill cards
					const btnContainer = document.createElement("div");
					btnContainer.classList.add("flex", "flex-row", "flex-wrap", "justify-between", "gap-4", "p-[2%]", "py-[0]", "lg:p-0", "w-full");

					const skillContainer = document.createElement("div");
					skillContainer.classList.add("flex", "flex-row", "flex-wrap", "gap-2", "lg:p-[7%]", "py-[0]", "lg:p-[7%]");



					projectData.skills.forEach((skill) => {
						const card = createSkillCard(skill);
						skillContainer.appendChild(card);
					});


					btnContainer.appendChild(skillContainer);
					btnContainer.appendChild(linksContainer);

					textContainer.appendChild(textContent);
					textContainer.appendChild(btnContainer);

					content.appendChild(imageDiv);
					content.appendChild(textContainer);
				}

				// Posicionamos el contenido en el centro y animamos la opacidad
				content.classList.add("absolute", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "opacity-0", "transition-opacity", "duration-300", "ease-in-out"
				);
				overlay.appendChild(content);

				setTimeout(() => (content.style.opacity = "1"), 200);

				// Botón de cierre
				const closeButton = document.createElement("img");
				closeButton.src = "/img/icons/iconClose.svg";
				closeButton.classList.add("text-white", "absolute", "w-[5%]", "md:w-[4%]", "lg:w-[3%]", "2xl:w-[2%]", "top-5", "right-5", "cursor-pointer", "z-10", "opacity-0", "transition-opacity", "duration-300", "ease-in-out", "text-shadow");
				closeButton.alt = "Cerrar";


				closeButton.addEventListener("click", () => {
					// Al cerrar, animamos el overlay a opacidad 0
					overlay.style.opacity = "0";
					// Una vez terminada la transición (300ms) removemos el overlay
					setTimeout(() => overlay.remove(), 300);
				});

				overlay.appendChild(closeButton);
				setTimeout(() => (closeButton.style.opacity = "1"), 200);
			}, 1200);
		});
	}
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {


//         if (entry.isIntersecting) {

//           // Eliminar la clase activa de todos
//           navLinks.forEach((link) => {
// 			link.classList.remove("active-section") 
// 			link.classList.remove("active-sectio-mobile")
// 		  }

// 		  );

//           // Agregar la clase activa al enlace correspondiente
//           const activeLink = document.querySelectorAll(`.nav-link[href="#${entry.target.id}"]`);
// 		  activeLink.forEach((link,index) => {			
// 			if (link) link.classList.add("active-section");
// 			if (index === 1) link.classList.add("active-section-mobile");
// 		  });

//         }
//       });
//     },
//     {  
// 		// rootMargin: "-40% 0px -40% 0px", // Define el margen superior e inferior para centrar
// 		threshold: 0.7 // Se activa cuando el 60% de la sección es visible 
// 	} 
//   );

//   sections.forEach((section) => observer.observe(section));
























document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.toggle-panel').forEach((el) => {
		el.addEventListener('click', function (event) {
			// Si se hace clic en un hijo, closest() obtiene el contenedor .toggle-panel
			const togglePanel = event.target.closest(".toggle-panel");
			const contentPanel = togglePanel.nextElementSibling;
			const parent = togglePanel.parentElement;

			if (contentPanel.style.maxHeight && contentPanel.style.maxHeight !== "0px") {
				// Colapsar: reiniciamos el max-height y eliminamos los paddings verticales
				contentPanel.style.maxHeight = "0px";
				contentPanel.style.paddingTop = "0";
				contentPanel.style.paddingBottom = "0";
				parent?.classList.remove("h-['72%']");
			} else {
				// Expandir: asignamos los paddings verticales y el max-height según su scrollHeight
				parent?.classList.add("h-['72%']");
				contentPanel.style.paddingTop = "1rem";
				contentPanel.style.paddingBottom = "1rem";
				contentPanel.style.maxHeight = "500px";
			}
		});
	});



});





document.addEventListener('DOMContentLoaded', () => {
	// Seleccionamos todos los enlaces del menú
	const navLinks = document.querySelectorAll('.nav-link');

	// Función que se ejecuta en cada evento de scroll
	function onScroll() {
		// console.log("scroll");

		const scrollPos = window.scrollY || document.documentElement.scrollTop;

		navLinks.forEach(link => {
			// Obtenemos la sección que coincide con el href del enlace
			const section = document.querySelector(link.getAttribute('href'));

			if (section) {
				const sectionTop = section.offsetTop;
				const sectionBottom = section.offsetTop + section.offsetHeight; // Posición del borde inferior
				const sectionHeight = section.offsetHeight;

				// Ajusta el valor del offset (por ejemplo, 150) según tus necesidades
				if (scrollPos >= (sectionTop - 450) && scrollPos < (sectionTop + sectionHeight - 450)) {
					link.classList.add('active-section');
				} else {
					link.classList.remove('active-section');
				}
			}
		});
	}

	// Escuchamos el evento scroll
	window.addEventListener('scroll', onScroll);
	// Ejecutamos una vez al cargar la página
	onScroll();
});


//menu burger
const menuToggle = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector("header");

menuToggle.addEventListener("click", () => {
	header.classList.toggle("backdrop-blur-lg");
	mobileMenu.classList.toggle("opacity-100");
	mobileMenu.classList.toggle("pointer-events-auto");
	mobileMenu.classList.toggle("opacity-0");
	mobileMenu.classList.toggle("pointer-events-none");
});









// Asegurar que el código solo se ejecute en el cliente
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);

	document.addEventListener("DOMContentLoaded", () => {

		// Fade-in desde la opacidad 0
		const fadeInElements = document.querySelectorAll(".fade-in");
		fadeInElements.forEach((el) => {
			gsap.from(el, {
				opacity: 0,
				duration: 1,
				y: 50,
				scrollTrigger: {
					trigger: el,
					start: "top 98%",
					toggleActions: "play none none none",
				},
			});
		});



		// Zoom-in
		const zoomInElements = document.querySelectorAll(".zoom-in");
		zoomInElements.forEach((el) => {
			gsap.from(el, {
				scale: 0.8,
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			});
		});


		// Efecto Parallax
		const parallaxElements = document.querySelectorAll(".parallax");
		parallaxElements.forEach((el) => {
			gsap.to(el, {
				y: -500,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			});
		});

	});
}





document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll("[data-animate]");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	}, { threshold: 0.2 });

	elements.forEach((el) => observer.observe(el));
});
