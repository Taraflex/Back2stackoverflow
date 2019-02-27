// ==UserScript==
// @name         back2stackoverflow
// @version      0.0.8
// @description  Redirect to stackoverflow.com from machine-translated sites
// @namespace    taraflex
// @author       taraflex.red@gmail.com
// @downloadURL  https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @updateURL    https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @match        http://qaru.site/questions/*
// @match        https://qaru.site/questions/*
// @match        https://askdev.info/questions/*
// @match        http://programmerz.ru/questions/*
// @match        https://programmerz.ru/questions/*
// @match        http://www.4answered.com/questions/*
// @match        https://www.4answered.com/questions/*
// @match        http://4answered.com/questions/*
// @match        https://4answered.com/questions/*
// @match        https://code-examples.net/*/q/*
// @match        http://code.i-harness.com/*/q/*
// @match        https://code.i-harness.com/*/q/*
// @match        http://quabr.com/*
// @match        https://quabr.com/*
// @match        https://stackovernet.com/*/q/*
// @match        https://*.stackovernet.com/*/q/*
// @match        https://stackoverrun.com/*/q/*
// @match        https://qna.one/*
// @match        https://devask.gr/questions/*
// @match        https://devask.cz/questions/*
// @match        https://devask.nl/questions/*
// @match        https://devask.in/questions/*
// @match        https://coredump.tech/questions/*
// @match        https://coredump.ist/questions/*
// @match        https://coredump.one/questions/*
// @match        https://coredump.guru/questions/*
// @match        https://coredump.ro/questions/*
// @match        https://coredump.su/questions/*
// @match        https://coredump.pt/questions/*
// @match        https://coredump.uno/questions/*
// @match        https://itkerdes.com/questions/*
// @match        https://itproblemy.pl/questions/*
// @match        https://frageit.de/questions/*
// @match        https://qa-help.ru/questions/*
// @match        https://exceptionshub.com/*
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
        case 'exceptionshub.com':
            if (/\.html$/.test(location.pathname)) {
                return 'https://stackoverflow.com/search?q=' + encodeURIComponent(document.querySelector('h1.name.post-title').textContent.trim());
            }
            break;
    }
    if (n > 0) {
        return 'https://stackoverflow.com/questions/' + n;
    }

    var m = {
        'qaru.site': 'a[href^="https://stackoverflow.com/questions/"]',
        'askdev.info': 'a[href^="https://stackoverflow.com/questions/"]',

        'qa-help.ru': 'a.uncolored-text[href*="stackoverflow.com/questions/"]',//встречаются вопросы с ru.stackoverflow.com
        'programmerz.ru': '.source-share-link',
        '4answered.com': '.view_body span a',
        'qna.one': '.page-container-question .source-share-block a',

        'stackoverrun.com': '.post-meta a',
        'stackovernet.com': '.post-meta a',

        'devask.gr': '.fuente',
        'devask.cz': '.fuente',
        'devask.nl': '.fuente',
        'devask.in': '.fuente',
        'coredump.tech': '.fuente',
        'coredump.ist': '.fuente',
        'coredump.one': '.fuente',
        'coredump.guru': '.fuente',
        'coredump.ro': '.fuente',
        'coredump.su': '.fuente',
        'coredump.pt': '.fuente',
        'coredump.uno': '.fuente',
        'itkerdes.com': '.fuente',
        'itproblemy.pl': '.fuente',
        'frageit.de': '.fuente',
    }
    var link = m[host] && document.querySelector(m[host]);
    return link ? link.href : null;
}

var u = originalUrl();
u && (location.href = u);