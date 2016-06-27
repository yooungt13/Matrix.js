/**
 * @author youngtian13
 * @date 2016-06-16
 */

'use strict';

module.exports = function*(next) {
    let userAgent = this.headers['user-agent'] || '';

    let isIPhone = /iPhone/.test(userAgent);
    let isAndroid = /Android/.test(userAgent);
    let isAndroidLike = !isIPhone && !isAndroid && /AppleWebKit/.test(userAgent);

    let isIOS7 = /iPhone; CPU iPhone OS 7_/.test(userAgent);
    let isIOS8 = /iPhone; CPU iPhone OS 8_/.test(userAgent);
    let isIOS9 = /iPhone; CPU iPhone OS 9_/.test(userAgent);
    let isIOS7Less = !isIOS7 && !isIOS8 && !isIOS9 && isIPhone;

    let isWx = /micromessenger/i.test(userAgent);

    this.device = new Device(userAgent);

    this.ua = {
        isIPhone: isIPhone,
        isAndroid: isAndroid,
        isAndroidLike: isAndroidLike,
        isIOS7: isIOS7,
        isIOS8: isIOS8,
        isIOS9: isIOS9,
        isIOS7Less: isIOS7Less,
        isWx: isWx
    };

    yield next;
};

function Device(ua) {
    ua = ua || '';

    let os = this.os = {};
    let browser = this.browser = {};

    let webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
    let android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let osx = !!ua.match(/\(Macintosh; Intel /);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    let ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    let iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    let webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
    let touchpad = webos && ua.match(/TouchPad/);
    let kindle = ua.match(/Kindle\/([\d.]+)/);
    let silk = ua.match(/Silk\/([\d._]+)/);
    let blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
    let bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
    let rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
    let playbook = ua.match(/PlayBook/);
    let uc = ua.match(/UCBrowser\/([\w.\s]+)/);
    let chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
    let firefox = ua.match(/Firefox\/([\d.]+)/);
    let ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/);
    let webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);
    let safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);

    if (browser.webkit === !!webkit) browser.version = webkit[1];

    if (android) {
        os.android = true;
        os.version = android[2];
    }
    if (iphone && !ipod) {
        os.ios = os.iphone = true;
        os.version = iphone[2].replace(/_/g, '.');
    }
    if (ipad) {
        os.ios = os.ipad = true;
        os.version = ipad[2].replace(/_/g, '.');
    }
    if (ipod) {
        os.ios = os.ipod = true;
        os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    }
    if (webos) {
        os.webos = true;
        os.version = webos[2];
    }
    if (touchpad) {
        os.touchpad = true;
    }
    if (blackberry) {
        os.blackberry = true;
        os.version = blackberry[2];
    }
    if (bb10) {
        os.bb10 = true;
        os.version = bb10[2];
    }
    if (rimtabletos) {
        os.rimtabletos = true;
        os.version = rimtabletos[2];
    }
    if (playbook) {
        browser.playbook = true;
    }
    if (uc) {
        os.uc = true;
        os.ucversion = uc[1];
    }
    if (kindle) {
        os.kindle = true;
        os.version = kindle[1];
    }
    if (silk) {
        browser.silk = true;
        browser.version = silk[1];
    }
    if (!silk && os.android && ua.match(/Kindle Fire/)) {
        browser.silk = true;
    }

    if (chrome) {
        browser.chrome = true;
        browser.version = chrome[1];
    }
    if (firefox) {
        browser.firefox = true;
        browser.version = firefox[1];
    }
    if (ie) {
        browser.ie = true;
        browser.version = ie[1];
    }
    if (safari && (osx || os.ios)) {
        browser.safari = true;
        if (osx) browser.version = safari[1];
    }
    if (webview) {
        browser.webview = true;
    }

    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
        (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));
    os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
        (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
        (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));
};
