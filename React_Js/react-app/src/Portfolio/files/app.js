// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();
// document.addEventListener("DOMContentLoaded", function() {
//     // Your code here
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         });
//     });

//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed");

//     const themeBtn = document.querySelector(".theme-btn");
//     if (themeBtn) {
//         console.log("Theme button found");
//         themeBtn.addEventListener("click", () => {
//             document.body.classList.toggle("light-mode");
//         });
//     } else {
//         console.log("Theme button not found");
//     }

//     const controls = document.querySelectorAll(".control");
//     if (controls.length > 0) {
//         console.log("Controls found:", controls.length);
//         controls.forEach(button => {
//             button.addEventListener("click", function() {
//                 document.querySelector(".active-btn").classList.remove("active-btn");
//                 this.classList.add("active-btn");
//                 document.querySelector(".active").classList.remove("active");
//                 document.getElementById(button.dataset.id).classList.add("active");
//             });
//         });
//     } else {
//         console.log("Controls not found");
//     }
// });
