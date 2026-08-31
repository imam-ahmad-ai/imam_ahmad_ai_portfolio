/* =========================================================
   IMAM AHMAD AI PORTFOLIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function handleNavbarScroll() {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();



    /* =====================================================
       2. MOBILE NAVBAR CLOSE
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".navbar .nav-link");

    const navbarCollapse =
        document.querySelector("#mainNavbar");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bootstrapCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bootstrapCollapse) {

                    bootstrapCollapse.hide();

                }

            }

        });

    });



    /* =====================================================
       3. ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();



    /* =====================================================
       4. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, .service-card, .project-card, .skills-card, .contact-info-card, .contact-form-card, .about-content, .about-highlight, .stat-item"
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================================
       5. SKILL BAR ANIMATION
    ===================================================== */

    const skillBars =
        document.querySelectorAll(
            ".skill-progress span"
        );


    skillBars.forEach(function (bar) {

        const originalWidth =
            bar.style.width;

        bar.dataset.width =
            originalWidth;

        bar.style.width = "0%";

    });


    const skillObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const bars =
                            entry.target.querySelectorAll(
                                ".skill-progress span"
                            );


                        bars.forEach(function (bar, index) {

                            setTimeout(function () {

                                bar.style.width =
                                    bar.dataset.width;

                            }, index * 150);

                        });


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    document
        .querySelectorAll(".skills-card")
        .forEach(function (card) {

            skillObserver.observe(card);

        });



    /* =====================================================
       6. PROJECT CARD HOVER
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add(
                    "project-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove(
                    "project-hover"
                );

            }
        );

    });



    /* =====================================================
       7. CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form-card form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function () {

                const name =
                    document.querySelector(
                        "#name"
                    ).value.trim();

                const email =
                    document.querySelector(
                        "#email"
                    ).value.trim();

                const service =
                    document.querySelector(
                        "#service"
                    ).value;

                const budget =
                    document.querySelector(
                        "#budget"
                    ).value;

                const message =
                    document.querySelector(
                        "#message"
                    ).value.trim();


                if (
                    !name ||
                    !email ||
                    !service ||
                    !message
                ) {

                    return;

                }


                /*
                 * Create WhatsApp message
                 */

                const whatsappMessage =

                    "Assalamu alaikum Imam Ahmad,%0A%0A" +

                    "I would like to discuss a project.%0A%0A" +

                    "Name: " +
                    encodeURIComponent(name) +
                    "%0A" +

                    "Email: " +
                    encodeURIComponent(email) +
                    "%0A" +

                    "Service: " +
                    encodeURIComponent(service) +
                    "%0A" +

                    "Budget: " +
                    encodeURIComponent(
                        budget || "Not specified"
                    ) +
                    "%0A%0A" +

                    "Project Details:%0A" +

                    encodeURIComponent(message);


                /*
                 * Store WhatsApp URL
                 */

                contactForm.dataset.whatsapp =
                    "https://wa.me/2349029004611?text=" +
                    whatsappMessage;

            }
        );

    }



    /* =====================================================
       8. BACK TO TOP BUTTON
    ===================================================== */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =====================================================
       9. AUTOMATIC YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });



    /* =====================================================
       10. IMAGE ERROR HANDLING
    ===================================================== */

    const projectImages =
        document.querySelectorAll(
            ".project-image img"
        );


    projectImages.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.style.display =
                    "none";

                image.parentElement.classList.add(
                    "image-not-found"
                );

            }
        );

    });

});