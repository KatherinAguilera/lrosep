(function () {
    "use strict";

    let
        shirt,
        img1,
        img3,
        send_data,
        bg,
        id_team
    ;

    const
        s1 = document.getElementById("text"),
        s2 = document.getElementById("save"),
        s3 = document.getElementById("first_email"),
        s4 = document.getElementById("share_facebook"),
        s5 = document.getElementById("share_twitter"),
        s6 = document.getElementById("message_nick"),
        
        c1 = "disabled",

        canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),


        textX = canvas.width * 0.28,
        textY = canvas.height * 0.28,
        font_1 = new FontFace("adineue_bold", "url(../assets/fonts/adineue/adineue_bold.woff2)"),
        font_s = "29px",
        font_c = "#273343",
        font_f = "adineue_bold",
        path_api = "https://api-wwc.wtadidaslam.com",
        path_get_shirt = path_api + "/api/get-shirt?team=colombia",
        path_set_shirt = path_api + "/api/save-shirt"

    ;

    function preload_image(source, callback) {
        const img = new Image();
        img.src = source;
        img.onload = callback;
        img.setAttribute('crossorigin', 'anonymous'); 

        return img;
    }

    function get_shirt(attr = {}) {
        const
            no_is_firt = attr.no_is_firt || false,
            success = attr.success || (function () { return undefined; })
        ;

        if (!no_is_firt) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            bg = preload_image(img3, function () {
                ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

                shirt = preload_image(img1, function () {

                    const newWidth = 350;
                    const newHeight = 350;
                
                    ctx.drawImage(shirt, 20, 25, newWidth, newHeight);
                    success();
                });
            });
        } else {
            shirt = preload_image(img1, function () {
                ctx.drawImage(shirt, 0, 0, canvas.width, canvas.height);
                success();
            });
        }
    }

    function toggle_message() {
        if (s1.value.trim() === "") {
          s6.style.display = "block";
        } else {
          s6.style.display = "none";
        }
      }
      

    window.addEventListener("load", function () {
        // Load shirts
        fetch(path_get_shirt, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(result => result.json())
            .then(data => {
                console.dir(data);

                //    img1 = data.jersey_back_home;
                //    img3 = data.image_background_home;
                img1 = "../assets/img/int/jersey-colombia.webp";
                img3 = "../assets/img/int/bg-jersey.webp";
                font_1.load().then(function (font) {
                    document.fonts.add(font);

                    ctx.font = font_s + " " + font_f;
                    ctx.fillStyle = font_c;
                    ctx.textAlign = "center";

                    get_shirt();

                    s1.addEventListener("keyup", function () {
                        toggle_message();

                        get_shirt({
                            no_is_firt: true,
                            success: () => {
                             
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

                                const newWidth = 350;
                                const newHeight = 350;

                                ctx.drawImage(shirt, 20, 25, newWidth, newHeight);
                                ctx.fillText(s1.value, textX, textY);
                            }
                        });
                    });

                    s2.addEventListener("click", function (e) {
                        e.preventDefault(); 
                        if (s1.checkValidity() === false) {
                            console.log("El campo está vacío. No se puede guardar.");
                            toggle_message();
                            
                            return;
                        }

                        const
                           dataURL = canvas.toDataURL("image/jpeg"),
                           email = s3.value
                        ;

                        send_data = {
                            email: email,
                            id_team: 1,
                            client: "dafiti",
                            image_binary: dataURL
                        }

                        fetch(path_set_shirt, {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(send_data)
                        })
                            .then(result => result.json())
                            .then(data => {
                                console.dir(data);

                                id_team = data.id_team;
                                console.log("id_team:", id_team);

                                s4.classList.remove(c1);
                                s5.classList.remove(c1);

                                const name_title = "¡Comparte tu pasión con nosotros!";

                                s4.href = "https://www.facebook.com/sharer/sharer.php?u=https://api-wwc.wtadidaslam.com/api/share?share=" + id_team;
                                s5.href = "https://twitter.com/intent/tweet?text=" + name_title + "&url=https://api-wwc.wtadidaslam.com/api/share?share=" + id_team;
                                console.log("validando", s4.href);

                            })
                            .catch(err => {
                                console.error(err);
                            })
                        ;
                        // this.href = dataURL;
                    });
                    
                }, (err) => {
                    console.error(err);
                });
            })
            .catch(err => {
                console.error(err);
            })
        ;
    });
}());
