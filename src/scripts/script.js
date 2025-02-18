// 1. Objeto con la información de cada proyecto, indexado por ID
const projects = {
	codigosa: {
	  image: "../../../src/assets/proyects/codigosa.webp",
	  name: "Codigosa",
	  description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie...",
	  skills: [
		{
		  href: "https://github.com/dani2f",
		  iconSrc: "../../../src/assets/icons/techIcons/Other/iconGithub.svg",
		  iconAlt: "Github logo",
		  text: "JavaScript",
		},
		{
		  href: "https://github.com/dani2f",
		  iconSrc: "../../../src/assets/icons/techIcons/Other/iconGithub.svg",
		  iconAlt: "Github logo",
		  text: "TypeScript",
		},
	  ],
	},
	proximamente: {
	  image: "../../../src/assets/proyects/proximamente1.webp",
	  name: "Proyecto Próximamente 1",
	  description: "Este proyecto se encuentra en desarrollo...",
	  comingSoon: true, // Marcamos que es un proyecto aún en desarrollo
	  skills: [],
	},
	codigosa2: {
	  image: "../../../src/assets/proyects/codigosa.webp",
	  name: "Codigosa 2",
	  description: "Una variante del proyecto Codigosa...",
	  skills: [],
	},
	codigosa3: {
	  image: "../../../src/assets/proyects/codigosa.webp",
	  name: "Codigosa 3",
	  description: "Otra variante del proyecto Codigosa...",
	  skills: [],
	},
	bilbaoskp: {
	  image: "../../../src/assets/proyects/bilbaoskp.webp",
	  name: "BilbaoSKP",
	  description:
		"Proyecto sobre BilbaoSKP con X características y Y funcionalidades...",
	  skills: [],
	},
  };
  
  // 2. Función para crear una skill card
  function createSkillCard({ href, iconSrc, iconAlt, text }) {
	const skillCard = document.createElement("a");

	// Si se proporciona href, se asigna junto con target="_blank".
	if (href) {
	  skillCard.setAttribute("href", href);
	  skillCard.setAttribute("target", "_blank");
	}
  
	// Se asigna la clase base y condicional según si hay imagen (src)
	skillCard.className = `bg-[var(--main-background-color)] rounded-md flex items-center gap-2 transition-all duration-300 hover:bg-[var(--second-background-color)] text-[var(--main-char-color)] text-sm xl:text-base font-thin ${
		iconSrc
		? "px-2 py-2 lg:px-4 rounded-md"
		: "px-2 py-[0.15rem] lg:px-4 rounded-[0.14rem]"
	}`;
  
	// Si se proporciona src, se crea el elemento img
	
	if (iconSrc) {
	  const skillIcon = document.createElement("img");
	  skillIcon.src = iconSrc;
	  skillIcon.alt = iconAlt || "";
	  skillIcon.className = "w-4 h-4 sm:w-5 sm:h-5";
	  skillCard.appendChild(skillIcon);
	}
  
	// Contenedor para el texto; se muestra con clase condicional si hay imagen.
	const textContainer = document.createElement("div");
	textContainer.className = iconSrc ? "hidden lg:flex" : "";
	textContainer.textContent = text;
	skillCard.appendChild(textContainer);
  
	return skillCard;
  }

  
  
  // 3. Listener para abrir el overlay al hacer clic en una caja
  document.addEventListener("click", (event) => {
	let target = event.target;
	if (event.target.tagName === "IMG" || event.target.tagName === "P") {
	  target = event.target.parentElement;
	}
  
	if (target.classList.contains("grid-box")) {
	  // Tomamos el ID del proyecto
	  let projectId = null;
	  if(target.getAttribute("id")){
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
			  "h-[35vh]",
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
			comingSoonIcon.src = "../../../src/assets/icons/iconSoon.webp"; // Actualiza la ruta según corresponda
			comingSoonIcon.alt = "Próximamente";
			comingSoonIcon.classList.add("w-[5rem]", "h-[5rem]","lg:w-[10rem]", "lg:h-[10rem]"); // Puedes ajustar el tamaño
  
			// Texto indicativo
			const comingSoonText = document.createElement("p");
			comingSoonText.textContent = "Próximamente";
			comingSoonText.classList.add("text-2xl", "md:text-[2rem]", "lg:text-[3rem]","font-special");
  
			comingSoonContainer.appendChild(comingSoonIcon);
			comingSoonContainer.appendChild(comingSoonText);
			content.appendChild(comingSoonContainer);
		  } else {
			// Contenido normal para proyectos terminados
			content.classList.add(
			  "w-[80vw]",
			  "h-[35vh]",
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
			imageDiv.style.backgroundImage = `url(${projectData.image})`;
  
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
			textContent.classList.add("p-[2%]", "pb-[1%]", "lg:p-[7%]");
			textContent.innerHTML = `
			  <h3 class="text-left text-[1.5rem] lg:text-[3rem] font-special">
				${projectData.name}
			  </h3>
			  <p class="text-start text-[0.8rem] lg:text-[1rem] font-standard text-[var(--second-char-color)]">
				${projectData.description}
			  </p>
			`;
  
			// Contenedor para las skill cards
			const skillContainer = document.createElement("div");
			skillContainer.classList.add("flex", "flex-row", "gap-4", "p-[2%]", "py-[0]", "lg:p-[7%]");
  
			projectData.skills.forEach((skill) => {
				console.log(skill)
			  const card = createSkillCard(skill);
			  skillContainer.appendChild(card);
			});
  
			textContainer.appendChild(textContent);
			textContainer.appendChild(skillContainer);
  
			content.appendChild(imageDiv);
			content.appendChild(textContainer);
		  }
  
		  // Posicionamos el contenido en el centro y animamos la opacidad
		  content.classList.add("absolute","top-1/2", "left-1/2", "transform","-translate-x-1/2", "-translate-y-1/2", "opacity-0", "transition-opacity","duration-300", "ease-in-out"
		  );
		  overlay.appendChild(content);
  
		  setTimeout(() => (content.style.opacity = "1"), 200);
  
		  // Botón de cierre
		  const closeButton = document.createElement("img");
		  closeButton.src = "../../../src/assets/icons/iconClose.svg";
		  closeButton.classList.add("text-white", "absolute", "w-[5%]","md:w-[4%]" ,"lg:w-[3%]","2xl:w-[2%]", "top-5", "right-5", "cursor-pointer", "z-10", "opacity-0", "transition-opacity", "duration-300", "ease-in-out");
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


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
       

        if (entry.isIntersecting) {

          // Eliminar la clase activa de todos
          navLinks.forEach((link) => {
			link.classList.remove("active-section") 
			link.classList.remove("active-sectio-mobile")
		  }
			
		  );

          // Agregar la clase activa al enlace correspondiente
          const activeLink = document.querySelectorAll(`.nav-link[href="#${entry.target.id}"]`);
		  activeLink.forEach((link,index) => {			
			if (link) link.classList.add("active-section");
			if (index === 1) link.classList.add("active-section-mobile");
		  });
         
        }
      });
    },
    {  
		// rootMargin: "-40% 0px -40% 0px", // Define el margen superior e inferior para centrar
		threshold: 0.7 // Se activa cuando el 60% de la sección es visible 
	} 
  );

  sections.forEach((section) => observer.observe(section));



















  

  document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.toggle-panel').forEach((el) => {
	  el.addEventListener('click', function(event) {
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
  


