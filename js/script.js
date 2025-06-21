// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Hamburger Menu Toggle (Mobile)
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Flip Card click (for mobile view)
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('clicked');
  });
});

// Optional: Video banner auto-rotate
const video = document.getElementById("bannerVideo");
if (video) {
  const sources = ["video/banner1.mp4"];
  let index = 0;

  function rotateBanner() {
    index = (index + 1) % sources.length;
    video.src = sources[index];
    video.load();
    video.play();
  }

  setInterval(rotateBanner, 10000);
}

// Optional: Drag-to-scroll (for horizontal card section)
const slider = document.getElementById("slider");
const track = document.getElementById("track");

if (slider && track) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => isDown = false);
  slider.addEventListener("mouseup", () => isDown = false);

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
}

  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }
