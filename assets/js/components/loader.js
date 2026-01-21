/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "_load" }] */

var
    check_load = new Proxy([], {
        set: function (target, property, value) {
            let load = true;
            const
                loader = document.getElementById("loader"),
                no_scroll = document.getElementsByClassName("no_scroll"),

                c1 = "close",
                c2 = "no_scroll"
            ;

            target[property] = value;

            for (let item of target) {
                if (!item) {
                    load = false;
                }
            }

            if (load) {
                loader.classList.add(c1);

                setTimeout(() => {
                    for (let item of no_scroll) {
                        item.classList.remove(c2);
                    }
                }, 2500);
            }

            return true;
        }
    })
;