document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navbar links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Reveal on scroll
  const revealElements = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Package modal
  const modalEl = document.getElementById("packageModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modal = new bootstrap.Modal(modalEl);

  document.querySelectorAll(".package-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      modalTitle.textContent = this.dataset.title || "Package";
      modalDesc.textContent = this.dataset.desc || "";
      modal.show();
    });
  });

  // Form submit + toast
  const bookingForm = document.getElementById("bookingForm");
  const toastEl = document.getElementById("successToast");
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    toast.show();
    bookingForm.reset();
  });
});