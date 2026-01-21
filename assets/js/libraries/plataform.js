/* exported Platform */

/*
 * Author: John Sanchez Alvarez
 * Email: esutoraiki@gmail.com
 * Description:
 * Creation : 20220215
 *
*/

class Platform {
    constructor() { }

    static version() {
        return "20220706";
    }

    static creation() {
        return "20220215";
    }

    static is_mobile() {
        return Boolean(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || navigator.vendor || window.opera));
    }

    static is_android() {
        return Boolean(/Android/i.test(navigator.userAgent));
    }

    static is_osx() {
        return Boolean(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    }

    static is_linux() {
        return Boolean(/linux/i.test(navigator.platform) && /i686|x86_64/i.test(navigator.platform));
    }

    static is_ios() {
        return Boolean(/(iPhone|iPod|iPad)/i.test(navigator.platform));
    }

    static is_mac() {
        return Boolean(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
    }

    static is_iphone() {
        return Boolean(navigator.platform == "iPhone");
    }

    static is_ipod() {
        return Boolean(navigator.platform == "iPod");
    }

    static is_ipad() {
        return Boolean(navigator.platform == "iPad");
    }

    // static is_ipad() {
    //     return Boolean(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || navigator.platform === 'iPad';
    // }
}
