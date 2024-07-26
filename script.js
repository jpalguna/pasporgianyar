const menuIcon = document.getElementById("menuIcon");
const navMenu = document.querySelector(".menu-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const backIcon = document.querySelector(".back-icon");

menuIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  if (window.innerWidth < 834) {
    navMenu.classList.toggle("show");
  }
});

dropdownMenu.previousElementSibling.addEventListener("click", function () {
  if (window.innerWidth < 834) {
    dropdownMenu.classList.add("show");
    menuIcon.classList.add("hide");
  }
});

backIcon.addEventListener("click", function () {
  if (window.innerWidth < 834) {
    dropdownMenu.classList.remove("show");
    menuIcon.classList.remove("hide");
  }
});

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Rotate arrow icon accordion
// Ambil semua elemen dengan kelas .accordion di dalam container
const accordionIcons = document.querySelectorAll(".accordion");

// Tambahkan event listener untuk setiap elemen .accordion
accordionIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Cari accordion item yang mengandung ikon yang di-klik
    const accordionItem = this.closest(".accordion");

    // Temukan semua ikon panah dalam accordion item
    const itemArrowIcons = accordionItem.querySelectorAll(".arrow-icon");

    // Toggle kelas "rotate" untuk semua ikon panah dalam accordion item
    itemArrowIcons.forEach((itemIcon) => {
      itemIcon.classList.toggle("rotate");
    });

    // Toggle kelas "active" untuk panel terkait
    const panel = accordionItem.nextElementSibling;
    panel.classList.toggle("active");
  });
});

// Accordion privacy & policy
var acc = document.getElementsByClassName("privacy-policy-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Rotate arrow icon accordion privacy & policy
// Ambil semua elemen dengan kelas .accordion di dalam container
const accordionIconsPP = document.querySelectorAll(".privacy-policy-accordion");

// Tambahkan event listener untuk setiap elemen .accordion
accordionIconsPP.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Cari accordion item yang mengandung ikon yang di-klik
    const accordionItem = this.closest(".privacy-policy-accordion");

    // Temukan semua ikon panah dalam accordion item
    const itemArrowIcons = accordionItem.querySelectorAll(".arrow-icon");

    // Toggle kelas "rotate" untuk semua ikon panah dalam accordion item
    itemArrowIcons.forEach((itemIcon) => {
      itemIcon.classList.toggle("rotate");
    });

    // Toggle kelas "active" untuk panel terkait
    const panel = accordionItem.nextElementSibling;
    panel.classList.toggle("active");
  });
});
