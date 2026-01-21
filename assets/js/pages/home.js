/* global gsap Platform check_load */

(function () {
    "use strict";

    check_load[1] = false;

    let
        s3 = document.getElementById("concept"),
        s5 = document.getElementById("mouse_indicator"),
        s6 = document.getElementById("prev_int"),
        s7 = document.getElementById("next_int"),
        s8 = document.getElementById("first"),
        s9 = document.getElementById("second"),
        s10 = document.getElementsByTagName("section"),
        s11 = "mobile",

        // s18 = document.getElementById("int"),
        s20 = document.getElementById("first_email"),

        // p0 = document.getElementById("point_0"),
        // p1 = document.getElementById("point_1"),
        // p2 = document.getElementById("point_2"),
        // p3 = document.getElementById("point_3"),

        c1 = "active",
        c2 = "swiper_next_1",
        c3 = "swiper_prev_1",
        // base_URI = "https://api-wwc.wtadidaslam.com",
        // team = "colombia",
        // json_stats = `${base_URI}/api/player.json?team=${team}`,
        // json_getjerseys = `${base_URI}/api/get-shirt?team=${team}`,

        NSHome = (function () {

            function int_btn() {
                const nextButton = s7;
                nextButton.addEventListener("click", function (e) {
                    const firstForm = s20;
                    if (firstForm.checkValidity()) {
                        e.preventDefault();
                        s8.style.display = "none";
                        s9.style.display = "block";

                    } else {
                        const errorContainer = document.getElementById("error_message");
                        errorContainer.textContent = "Por favor escribe el email";

                        const emailInput = s20;
                        emailInput.classList.add("error");
                        emailInput.focus();
                    }
                });

                const prevButton = s6;
                prevButton.addEventListener("click", function () {
                    s9.style.display = "none";
                    s8.style.display = "grid";
                });
            }

            return {
                mouse_indicator: () => {
                    const
                        observer = new IntersectionObserver(function (entries) {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    s5.classList.add(c1);
                                } else {
                                    s5.classList.remove(c1);
                                }
                            });
                        }),

                        opcionesObserver = {
                            root: null,
                            threshold: 1
                        }
                    ;

                    observer.observe(s3, opcionesObserver);
                },

                int_step: () => {
                    int_btn();
                },
                // disabled_elements: () => {
                //     const
                //         menu = document.getElementById("menu_gooey"),
                //         // icon = document.getElementById("icon_buy"),
                //         section = document.getElementById("int");

                //         if (
                //             window.innerWidth <= 640 &&
                //             (
                //               section &&
                //               section.getBoundingClientRect().top < window.innerHeight
                //             )
                //           ) {
                //             menu.style.display = "none";
                //             // icon.style.display = "none";
                //           } else {
                //             menu.style.display = "block";
                //             // icon.style.display = "block";
                //           }
                // },
                gsap_colombia: () => {
                    let
                    secbanner = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#banner",
                            triggerEnd: "#banner",
                            toggleActions: "play pause resume reset",
                            pin: true,
                            scrub: 1,
                            start: "center center",
                            end: "+=1500",
                            markers: false
                        }
                    })
                    ;

                    // gsap.set("#presentation_banner", {
                    //     xPercent: 100, opacity: 0
                    // });
                    // gsap.set("#presentation_banner", {
                    //     // xPercent: -100, opacity: 0,
                    //     transformPerspective: "initial",
                    //     rotationY: 0,
                    //     // transformPerspective: "720px", rotationY: 15
                    //   });

                    //   secbanner.to("#presentation_banner", {
                    //     keyframes: [
                    //       { 
                    //           xPercent: 0, 
                    //           opacity: 1, 
                    //           transformPerspective: "720px", rotationY: 5,
                    //         //   transformPerspective: "initial",
                    //         //   rotationY: 0,
                    //           ease: "power2.out"
                    //       }
                    //     ],
                    //   })
                    secbanner.to("#presentation_banner", {
                        keyframes: [
                            // { xPercent: 100, ease: "power1.out", opacity: 0 },
                            // { xPercent: 0, opacity: 1 },
                            // { xPercent: 0, opacity: 1 },
                            {scale: 0.9, ease: "power1.in", opacity: 0.6}
                        ],
                    })

                    let sec1 = gsap.timeline({
                        scrollTrigger: {
                          trigger: s3,
                          pin: true,
                          pinSpacing: "margin",
                          scrub: 0.5,
                          start: "center center",
                          end: "+=1000",
                          toggleActions: "play pause resume reset",
                          toggleClass: "active",
                          markers: false
                        }
                      });
                      
                      sec1.to(".a1", {
                        opacity: 0,
                        y: -300,
                        duration: 1,
                        ease: "power2.out"
                      }, 0);
                      
                      sec1.to(".a2", {
                        opacity: 0,
                        y: -400,
                        duration: 1,
                        ease: "power2.out"
                      }, 0);
                      
                      sec1.to(".a3", {
                        opacity: 0,
                        y: -100,
                        duration: 1,
                        ease: "power2.out"
                      }, 0);
                      
                      sec1.to(".a4", {
                        opacity: 0,
                        x: -100,
                        duration: 1,
                        ease: "power1.inOut"
                      }, 0);
                      
                    // End Section 1

                    // Section 2
                    let
                        sec2 = gsap.timeline({
                            scrollTrigger: {
                                trigger: "#concept2",
                                triggerEnd: "#concept2",
                                toggleActions: "play pause resume reset",
                                pin: true,
                                scrub: 0.2,
                                toggleClass: "active",
                                start: "center center",
                                end: "+=1500",
                                markers: false
                            }
                        })
                    ;

                    gsap.set("#concept2 .a6", {
                        yPercent: -100, opacity: 0
                    });

                    gsap.set("#concept2 .a5", {
                        yPercent: 100, opacity: 0
                    });
                    gsap.set("#concept2 .a7", {
                        xPercent: 100, opacity: 0
                    });

                    sec2.to("#concept2 .a6", {
                        keyframes: [
                            { yPercent: -100, ease: "power1.out", opacity: 0 },
                            { yPercent: 0, opacity: 1 },
                            { yPercent: 0, opacity: 1 },
                            { xPercent: 100, ease: "power1.in", opacity: 0}
                        ],
                    })
                        .to("#concept2 .a5", {
                            keyframes: [
                                { yPercent: 100, ease: "power1.out", opacity: 0},
                                { yPercent: 0, opacity: 1 },
                                { yPercent: 0, opacity: 1 },
                                { xPercent: -100, ease: "power1.in", opacity: 0}
                            ],
                        }, 0)

                        .to("#concept2 .a7", {
                            keyframes: [
                                { xPercent: 100, ease: "power1.out", opacity: 0},
                                { xPercent: 0, opacity: 1 },
                                { xPercent: 0, opacity: 1 },
                                { xPercent: 100, ease: "power1.in", opacity: 0}
                            ],
                        }, 0);

                    // End Section 2

                     // Section 3
                     let
                     sec3 = gsap.timeline({
                         scrollTrigger: {
                             trigger: "#team",
                             triggerEnd: "#team",
                             toggleActions: "play pause resume reset",
                             pin: true,
                             scrub: 0.2,
                             toggleClass: "active",
                             start: "center center",
                             end: "+=1500",
                             markers: false
                         }
                     })
                 ;

                 gsap.set("#team .a8", {
                     xPercent: -100, opacity: 0
                 });

                 gsap.set("#team .a10", {
                     xPercent: 100, opacity: 0
                 });
                 gsap.set("#team .a9", {
                     yPercent: 100, opacity: 0
                 });

                 sec3.to("#team .a8", {
                     keyframes: [
                         { xPercent: -100, ease: "power1.out", opacity: 0 },
                         { xPercent: 0, opacity: 1 },
                         { xPercent: 0, opacity: 1 },
                         { xPercent: -100, ease: "power1.in", opacity: 0}
                     ],
                 })
                     .to("#team .a10", {
                         keyframes: [
                             { xPercent: 100, ease: "power1.out", opacity: 0},
                             { xPercent: 0, opacity: 1 },
                             { xPercent: 0, opacity: 1 },
                             { xPercent: 100, ease: "power1.in", opacity: 0}
                         ],
                     }, 0)

                     .to("#team .a9", {
                         keyframes: [
                             { yPercent: 100, ease: "power1.out", opacity: 0},
                             { yPercent: 0, opacity: 1 },
                             { yPercent: 0, opacity: 1 },
                             { yPercent: -100, ease: "power1.in", opacity: 0}
                         ],
                     }, 0);

                // End Section 3

                // Section 4

                let
                    sec4 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#products",
                            triggerEnd: "#products",
                            toggleActions: "play pause resume reset",
                            pin: true,
                            scrub: 1,
                            start: "center center",
                            end: "+=1500",
                            markers: false
                        }
                    })
                ;

                    sec4.to("#presentation4", {
                        keyframes: {
                            "0%":   { scale: 0, opacity: 0},
                            "40%":  { scale: 1, opacity: 1},
                            "80%": { scale: 1, opacity: 1 },
                            "100%": { scale: 0, opacity: 0 }
                        }
                    });

                    // End section 4

                    // Section Products 2

                    let
                    secp2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#products2",
                            triggerEnd: "#products2",
                            toggleActions: "play pause resume reset",
                            pin: true,
                            scrub: 1,
                            start: "center center",
                            end: "+=1500",
                            markers: false
                        }
                    })
                    ;

                    gsap.set("#presentation_p2", {
                        xPercent: -100, opacity: 0
                    });
                    secp2.to("#presentation_p2", {
                        keyframes: [
                            { xPercent: -100, ease: "power1.out", opacity: 0 },
                            { xPercent: 0, opacity: 1 },
                            { xPercent: 0, opacity: 1 },
                            { xPercent: 100, ease: "power1.in", opacity: 0}
                        ],
                    })
                    // secp2.to("#presentation4", {
                    //     keyframes: {
                    //         "0%":   { scale: 0, opacity: 0},
                    //         "40%":  { scale: 1, opacity: 1},
                    //         "80%": { scale: 1, opacity: 1 },
                    //         "100%": { scale: 0, opacity: 0 }
                    //     }
                    // });

                    // End section Products 2

                      // Section 4

                let
                    secp3 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#products3",
                            triggerEnd: "#products3",
                            toggleActions: "play pause resume reset",
                            pin: true,
                            scrub: 1,
                            start: "center center",
                            end: "+=1500",
                            markers: false
                        }
                    })
                ;

                secp3.to("#presentation_p3", {
                    keyframes: {
                        "0%":   { scale: 0, opacity: 0},
                        "40%":  { scale: 1, opacity: 1},
                        "80%": { scale: 1, opacity: 1 },
                        "100%": { scale: 1, opacity: 1 }
                    }
                });

                // End section Products 3

                    // Section 5

                    let
                        sec5 = gsap.timeline({
                            scrollTrigger: {
                                trigger: ".int",
                                triggerEnd: ".int",
                                toggleActions: "play pause resume reset",
                                pin: true,
                                scrub: 0.2,
                                toggleClass: "active",
                                start: "center center",
                                end: "+=1500",
                                markers: false
                            }
                        })
                    ;

                    gsap.set(".first .first_images", {
                      xPercent: -100, opacity: 0,
                      transformPerspective: "720px", rotationY: 15
                    });

                    gsap.set(".first .first_content", {
                       yPercent: 100, opacity: 0

                    });

                    sec5.to(".first .first_images", {
                      keyframes: [
                        { 
                            xPercent: 0, 
                            opacity: 1, 
                            transformPerspective: "initial",
                            rotationY: 0,
                            ease: "power2.out"
                        }
                      ],
                    })

                    .to(".first .first_content", {
                      keyframes: [
                          { yPercent: 0, opacity: 1 }
                      ],
                    }, 0);

                    // End Section 5
                },

                add_class: () => {
                    if (Platform.is_mobile()) {
                        for (let item of s10) {

                            item.classList.add(s11);
                        }
                    }
                },

                swiper_p1: () => {
                    var first_swiper = new Swiper(".first-swiper", {
                        slidesPerView: 1,
                        loop: true,
                        breakpoints: {
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            980: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            }
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                          },
                    });
                },

                swiper_p2: () => {
                    var second_swiper = new Swiper(".second-swiper", {
                        slidesPerView: 1,
                        loop: true,
                        breakpoints: {
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            980: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            }
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                          },
                    });
                },

                swiper_p3: () => {
                    var third_swiper = new Swiper(".third-swiper", {
                        slidesPerView: 1,
                        loop: true,
                        breakpoints: {
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            980: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            }
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                          },
                    });
                }
            };
        }())
    ;

    window.addEventListener("load", function () {
        NSHome.mouse_indicator();
        NSHome.int_step();
        NSHome.swiper_p1();
        NSHome.swiper_p2();
        NSHome.swiper_p3();

        check_load[1] = true;

        if (!Platform.is_mobile()) {
            NSHome.gsap_colombia();
        } else {
            NSHome.add_class();
        }
    });

    // window.addEventListener("scroll", function () {
    //     NSHome.disabled_elements();
    // });

 }());
