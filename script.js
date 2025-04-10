
// JS for basic scroll reveal animation (optional)
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll("section");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].style.opacity = "1";
        reveals[i].style.transform = "translateY(0)";
      }
    }
  });
  