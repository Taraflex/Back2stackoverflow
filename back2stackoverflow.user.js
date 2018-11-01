// ==UserScript==
// @name         back2stackoverflow
// @version      0.0.4
// @description  Redirect to stackoverflow.com from machine-translated sites
// @namespace    taraflex
// @author       taraflex.red@gmail.com
// @downloadURL  https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @updateURL    https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @match        http://qaru.site/questions/*
// @match        https://qaru.site/questions/*
// @match        http://askdev.info/questions/*
// @match        https://askdev.info/questions/*
// @match        http://programmerz.ru/questions/*
// @match        https://programmerz.ru/questions/*
// @match        http://www.4answered.com/questions/*
// @match        https://www.4answered.com/questions/*
// @match        http://4answered.com/questions/*
// @match        https://4answered.com/questions/*
// @match        http://code-examples.net/*/q/*
// @match        https://code-examples.net/*/q/*
// @match        http://code.i-harness.com/*/q/*
// @match        https://code.i-harness.com/*/q/*
// @match        http://quabr.com/*
// @match        https://quabr.com/*
// @match        http://stackovernet.com/*/q/*
// @match        https://stackovernet.com/*/q/*
// @match        http://*.stackovernet.com/*/q/*
// @match        https://*.stackovernet.com/*/q/*
// ==/UserScript==

function last(a) {
    return a ? a[a.length - 1] : null;
}

function originalUrl() {
    var n = 0;
    var host = location.hostname.split('.').slice(-2).join('.');
    switch (host) {
        case 'i-harness.com':
        case 'code-examples.net':
            n = parseInt(last(location.pathname.split('/')), 16) || 0;
            break;
        case 'quabr.com':
            n = parseInt(location.pathname.split('/', 2)[1]) || 0;
            break;
    }
    if (n > 0) {
        return 'https://stackoverflow.com/questions/' + n;
    }

    var m = {
        'qaru.site': '.question-text > .a-link',
        'askdev.info': '.question-text > .a-link',//тоже что и qaru.site
        'programmerz.ru': '.source-share-link',
        '4answered.com': '.view_body span a',
        'stackovernet.com': '.post-meta a'
    }
    var link = m[host] && document.querySelector(m[host]);
    return link ? link.href : null;
}

var u = originalUrl();
u && (window.location = u);