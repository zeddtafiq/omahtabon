/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

/* SHOW SLIDE */
function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  dots.forEach((dot)=>{
    dot.classList.remove("active-dot");
  });

  slides[index].classList.add("active");

  dots[index].classList.add("active-dot");
}

/* NEXT / PREV */
function changeSlide(direction){

  currentIndex += direction;

  if(currentIndex >= slides.length){
    currentIndex = 0;
  }

  if(currentIndex < 0){
    currentIndex = slides.length - 1;
  }

  showSlide(currentIndex);
}

/* DOT NAVIGATION */
function currentSlide(index){

  currentIndex = index;

  showSlide(currentIndex);
}

/* AUTO SLIDE */
setInterval(()=>{

  currentIndex++;

  if(currentIndex >= slides.length){
    currentIndex = 0;
  }

  showSlide(currentIndex);

}, 5000);


/* ================= GALLERY SLIDER ================= */

const gallerySlides = document.querySelectorAll(".gallery-slide");

const prevBtn = document.querySelector(".gallery-prev");

const nextBtn = document.querySelector(".gallery-next");

let galleryIndex = 0;

/* SHOW GALLERY SLIDE */
function showGallerySlide(index){

  gallerySlides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  gallerySlides[index].classList.add("active");
}

/* NEXT BUTTON */
if(nextBtn){

  nextBtn.addEventListener("click", ()=>{

    galleryIndex++;

    if(galleryIndex >= gallerySlides.length){
      galleryIndex = 0;
    }

    showGallerySlide(galleryIndex);

  });

}

/* PREV BUTTON */
if(prevBtn){

  prevBtn.addEventListener("click", ()=>{

    galleryIndex--;

    if(galleryIndex < 0){
      galleryIndex = gallerySlides.length - 1;
    }

    showGallerySlide(galleryIndex);

  });

}

/* AUTO GALLERY SLIDE */
if(gallerySlides.length > 0){

  setInterval(()=>{

    galleryIndex++;

    if(galleryIndex >= gallerySlides.length){
      galleryIndex = 0;
    }

    showGallerySlide(galleryIndex);

  }, 5000);

}


/* ================= SMOOTH SCROLL ================= */

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link)=>{

  link.addEventListener("click", function(e){

    const targetId = this.getAttribute("href");

    if(targetId.startsWith("#")){

      e.preventDefault();

      const targetSection = document.querySelector(targetId);

      if(targetSection){

        window.scrollTo({

          top: targetSection.offsetTop - 80,

          behavior: "smooth"

        });

      }

    }

  });

});


/* ================= HEADER SHADOW ON SCROLL ================= */

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

  if(window.scrollY > 50){

    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";

  }else{

    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

  }

});


/* ================= ANIMATION ON SCROLL ================= */

const cards = document.querySelectorAll(
  ".gallery-slide, .gallery-card, .package-card"
);

window.addEventListener("scroll", ()=>{

  cards.forEach((card)=>{

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = "1";

      card.style.transform = "translateY(0)";

    }

  });

});

/* INITIAL STYLE */
cards.forEach((card)=>{

  card.style.opacity = "0";

  card.style.transform = "translateY(50px)";

  card.style.transition = "0.8s";

});