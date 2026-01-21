/* global check_load */
import { loadComponentHTML } from "../js/core/fn.js";

(function () {
    "use strict";

    check_load[0] = false;

    let
        cent_menu_close = true
    ;

    const
        s1 = document.getElementById("container_main_header"),
        s2 = document.getElementById("mouse_indicator"),

        c1 = "open",
        c2 = "close",

        mouse_path = "../components/mouse_indicator.html",

        NSMain = (function () {
            return {
                lock_empty_link: (nodes) => {
                    for (let item of nodes) {
                        let path_href = item.href.split("/");

                        if (path_href[path_href.length - 1] === "#") {
                            item.addEventListener("click", e => e.preventDefault());
                        }
                    }
                },

                module_header: () => {
                    if (s1) {
                        loadComponentHTML({
                            node: s1,
                            path: "../components/header.html",
                            type: "header",
                            attr: [
                               ["id", "main_header"],
                               ["class", "main_header"]
                            ],
                            success: () => {
                                const
                                    s2 = document.getElementById("menu_close"),
                                    s3 = document.getElementById("main_menu"),
                                    s4 = s3.querySelectorAll(".main_nav .item"),

                                    s5 = document.getElementById("button_gooey"),
                                    s6 = document.getElementById("arrow_down")                           
                                ;

                                NSMain.lock_empty_link(document.getElementsByTagName("a"));
                                s2.addEventListener("click", function () {
                                    if (cent_menu_close) {
                                        if (this.classList.contains(c1)) {
                                            this.classList.add(c2);
                                            s3.classList.add(c2);
                                        } else {
                                            this.classList.remove(c2);
                                            s3.classList.remove(c2);
                                        }

                                        this.classList.toggle(c1);
                                        cent_menu_close = false;

                                        window.setTimeout(() => {
                                            cent_menu_close = true;
                                        }, 650);
                                    }
                                });

                                if (s5 && s6) {
                                    s5.addEventListener("click", function () {
                                      if (s6.style.opacity === "0") {
                                        s6.style.opacity = "1";
                                      } else {
                                        s6.style.opacity = "0";
                                      }
                                    });
                                  }

                                const checkbox = document.getElementById("chc");
                                const button_icon = document.getElementById("button_gooey");
     
                                checkbox.addEventListener("change", function () {
                                    if (this.checked) {
                                        button_icon.classList.add("open");
                                    } else {
                                        button_icon.classList.remove("open");
                                    }
                                });

                                for (let item of s4) {
                                    item.addEventListener("click", function () {
                                        if (cent_menu_close) {
                                            s2.classList.add(c2);
                                            s3.classList.add(c2);

                                            s2.classList.remove(c1);

                                            cent_menu_close = false;

                                            window.setTimeout(() => {
                                                cent_menu_close = true;
                                            }, 650);
                                        }
                                    });
                                }
                            }
                        });
                    }
                },
                mouse_indicator: () => {
                    if (s2) {
                        loadComponentHTML({
                            node: s2,
                            path: mouse_path,
                            attr: [
                                ["id", "container_mouse_indicator"],
                                ["class", "container_mouse_indicator"],
                            ]
                        });
                    }
                },
            };
        }())
    ;

    window.addEventListener("load", function () {
        NSMain.module_header();
        NSMain.mouse_indicator();
        check_load[0] = true;
    });
}());
