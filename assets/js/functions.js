// created by Leandro Gonçalves


document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os elementos com a classe 'toggle-button' e 'close-button'
  const toggleButtons = document.querySelectorAll('.toggle-button');
  const closeButtons = document.querySelectorAll('.close-button');

  // Alternar visibilidade das seções ao clicar nos botões
  toggleButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault(); // Previne comportamento padrão do link
      const sectionId = button.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      if (section) {
        section.classList.toggle('active');
      }
    });
  });

  // Fechar seções ao clicar no botão de fechar
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Procura pela seção pai mais próxima (com classe 'toggle-section' ou 'modal-section')
      const section = button.closest('.toggle-section, .modal-section');
      if (section) {
        section.classList.remove('active'); // Remove a classe 'active' para ocultar
      }
    });
  });
});


  //============== Aos Scrolling ======================== //

  AOS.init();

  //============== Parallax Effect ======================== //

      // Parallax Scrolling Effect
     const parallaxElements = document.querySelectorAll('.parallax');

      window.addEventListener('scroll', () => {
      parallaxElements.forEach(el => {
      const speed = 0.5; // Adjust the speed of the parallax effect
      const offset = window.scrollY * speed;
      el.style.transform = `translateY(${offset}px)`;
  });
  });

  //============== Accordion ======================== //

  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.icon');

    header.addEventListener('click', () => {
      const isOpen = content.style.maxHeight;
      // Close all accordions
      accordions.forEach(i => {
        i.querySelector('.accordion-content').style.maxHeight = null;
        i.querySelector('.icon').classList.remove('open');
      });

      // Open current accordion if it wasn't open
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('open');
      }
    });
  });

//============== Cookies Banner ======================== //

const cookieBanner = document.getElementById('cookieBanner');
const acceptButton = document.getElementById('acceptCookies');
const rejectButton = document.getElementById('rejectCookies');

// Função para verificar o estado dos cookies
function checkCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted') {
    cookieBanner.classList.remove('visible');
  } else {
    showBanner();
  }
}

// Mostrar o banner
function showBanner() {
  cookieBanner.classList.add('visible');
}

// Aceitar cookies
acceptButton.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  hideBanner();
});

// Recusar cookies
rejectButton.addEventListener('click', () => {
  hideBanner();
});

// Ocultar o banner
function hideBanner() {
  cookieBanner.classList.remove('visible');
  setTimeout(() => {
    cookieBanner.classList.add('hidden');
  }, 500); // Corresponde ao tempo da transição
}

// Verificar estado inicial
checkCookieConsent();

//============== Scroll Up Counter Logic ======================== //


  const counters = document.querySelectorAll('.counter');
let counterActivated = false; // Controla se a contagem já foi ativada
let scrolledToTop = true; // Controla se o usuário voltou ao topo

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const increment = Math.ceil(target / 100); // Incremento para suavidade
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.textContent = current;
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
}

function activateCounters() {
  counters.forEach(counter => {
    const delay = +counter.getAttribute('data-delay') || 0; // Tempo de atraso em ms
    setTimeout(() => {
      counter.classList.add('visible');
      animateCounter(counter);
    }, delay);
  });
}

function checkCountersInView() {
  const section = document.querySelector('#counter-section');
  const rect = section.getBoundingClientRect();

  // Verifica se a seção está visível e a contagem ainda não foi ativada
  if (rect.top < window.innerHeight && rect.bottom >= 0 && !counterActivated) {
    activateCounters();
    counterActivated = true; // Marca como ativado
  }
}

function resetCounters() {
  counters.forEach(counter => {
    counter.textContent = "0"; // Reinicia o valor
    counter.classList.remove('visible'); // Reseta a classe
  });
  counterActivated = false; // Permite nova ativação
}

function handleScroll() {
  // Checa se o usuário está no topo da página
  if (window.scrollY === 0) {
    scrolledToTop = true;
    resetCounters(); // Reinicia os contadores
  }

  // Se o usuário descer novamente, ativa os contadores
  if (scrolledToTop) {
    checkCountersInView();
  }

  // Bloqueia nova ativação enquanto o usuário não voltar ao topo
  if (counterActivated) {
    scrolledToTop = false;
  }
}

// Evento de scroll
window.addEventListener('scroll', handleScroll);

//============== Dopdown ======================== //

  // Seleciona todos os itens de menu com dropdown
const dropdowns = document.querySelectorAll('.dropdown');

// Adiciona o evento de clique para cada dropdown
dropdowns.forEach(dropdown => {
const toggle = dropdown.querySelector('.dropdown-toggle');

toggle.addEventListener('click', (e) => {
  e.preventDefault(); // Evita comportamento padrão do link

  // Fecha todos os outros dropdowns antes de abrir o atual
  dropdowns.forEach(d => {
    if (d !== dropdown) {
      d.classList.remove('dropdown-open');
    }
  });

  // Alterna o estado do dropdown clicado
  dropdown.classList.toggle('dropdown-open');
});
});

// Fecha o dropdown ao clicar fora
document.addEventListener('click', (e) => {
if (!e.target.closest('.dropdown')) {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('dropdown-open');
  });
}
});


// =========== MENU NAV ====================//

const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener("click", function(){
    let menuNav = document.querySelector('.nav-mobile');
    let menuIcon = document.querySelector('.menu-icon');
    if( menuNav.classList.contains('show') == true && menuIcon.classList.contains('close') == true ){
        menuNav.classList.remove('show');
        menuIcon.classList.remove('close');
    } else {
        menuNav.classList.add('show');
        menuIcon.classList.add('close');
    }
    
});

// =========== SECTIONS SELECT ====================//


const sections = document.querySelectorAll('section');//
const navLink = document.querySelectorAll('.nav-menu ul li a');

window.addEventListener('scroll', function(){
    let current ='';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if( scrollY >= ( sectionTop - sectionHeight / 3 )){
            current = section.getAttribute('id')
        }
    });
    navLink.forEach( a =>{
        a.classList.remove('nav-active');
        if( a.classList.contains(current) ){
            a.classList.add('nav-active')
        }
    });
} );






//============== Scroll toTop ======================== //

 window.onscroll = function() {scrollTotop()};

function scrollTotop() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#btn-toTop").className = "visible";
  } else {
    document.querySelector("#btn-toTop").className = "hidden";
  }
}


//============== Load more ======================== //

const loadmore = document.querySelector('.load-more');

let currentItems = 3;
loadmore.addEventListener('click', function(e){
  const elementList = [...document.querySelectorAll('.work-all li')]
  e.target.classList.add('show-loader');

  for ( let i = currentItems; i < currentItems +3; i++ ){
    setTimeout(function(){
      e.target.classList.remove('show-loader');
      if(elementList[i]){
        elementList[i].style.display = 'block';
      }
    },3000)
  }
  currentItems += 3;
  if( currentItems >= elementList.length ){
    e.target.classList.add('loaded')
  }
});


//============== Load more ======================== //



