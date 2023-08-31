document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".multitext", {
    strings: [
      "React JS Developer",
      "Frontend Developer",
      "Software Developer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
function SendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("Message").value,
    number: document.getElementById("number").value,
  };

  // Disable the submit button to prevent multiple clicks
  var submitBtn = document.getElementById("submit-btn");
  if (submitBtn.disabled) {
    return; // return early if already disabled
  }
  submitBtn.disabled = true;

  emailjs
    .send("service_38lqkkp", "template_cobaupe", params)
    .then(function (res) {
      console.log("Message Sent" + res.status);
      alert("Message Sent Successfully");
      location.reload();
    })
    .catch(function (err) {
      console.log("Failed to send email. Error: " + err);
      alert("Failed to send email. Please try again later.");
    });
}

// Add the event listener once
document.getElementById("submit-btn").addEventListener("click", SendMail);

const hireBtn = document.getElementById("hire-btn");
hireBtn.addEventListener("click", function () {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.click();
});
