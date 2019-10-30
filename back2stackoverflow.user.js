// ==UserScript==
// @name         back2stackoverflow
// @version      0.0.25
// @description  Redirect to stackoverflow.com from machine-translated sites
// @namespace    taraflex
// @author       taraflex.red@gmail.com
// @downloadURL  https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @updateURL    https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @match        https://stackoverflow.com/search?back2stackoverflow=1&q=*
// @match        http://qaru.site/questions/*
// @match        https://qaru.site/questions/*
// @match        http://askdev.info/questions/*
// @match        https://askdev.info/questions/*
// @match        https://ubuntugeeks.com/questions/*
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
// @match        https://qa-help.ru/questions/*
// @match        https://exceptionshub.com/*
// @match        https://kotaeta.com/*
// @match        https://ciupacabra.com/*
// @match        https://de-vraag.com/*
// @match        https://switch-case.ru/*
// @match        https://switch-case.com/*
// @match        https://es.switch-case.com/*
// @match        https://pt.switch-case.com/*
// @match        https://de.switch-case.com/*
// @match        https://bn.switch-case.com/*
// @match        https://ar.switch-case.com/*
// @match        https://answer-id.com/*
// @match        https://while-do.com/*
// @match        https://365airsoft.com/*/questions/*
// @match        https://codeday.me/*
// @match        https://publish.codeday.me/post/*
// @match        https://issue.life/questions/*
// @match        https://*.coredump.biz/questions/*
// @match        http://www.code-adviser.com/detail_*
// @match        https://www.code-adviser.com/detail_*
// @match        https://ask-ubuntu.ru/questions/*
// @match        https://stackru.com/questions/*
// @match        https://xbuba.com/questions/*
// @match        http://web-answers.ru/*
// @match        https://web-answers.ru/*
// @match        https://sprosi.pro/questions/*
// @match        https://askvoprosy.com/voprosy/*
// @match        https://stackanswers.net/questions/*
// @match        https://codengineering.ru/q/*
// @match        https://overcoder.net/q/*
// @match        https://coderquestion.ru/q/*
// @match        http://qacode.ru/questions/*
// @match        https://progaide.com/question/*
// @match        http://stackz.ru/en/*
// @match        https://www.it-swarm.net/*
// @match        https://bonprog.com/question/*
// @match        https://bestecode.com/question/*
// @match        https://progexact.com/question/*
// @match        https://rstopup.com/*
// @match        https://profikoder.com/question/*
// ==/UserScript==

function lastPathnamePart() {
    return location.pathname.split('/').filter(Boolean).slice(-1)[0];
}

function originalUrl() {
    if (location.href.startsWith('https://stackoverflow.com/search?back2stackoverflow=1&q=')) {
        var q = new URLSearchParams(location.search).get('q');
        var link = q && Array.prototype.slice.call(document.querySelectorAll('.result-link a')).find(function (link) {
            //@ts-ignore
            return link.href.indexOf('/' + q, 36) !== -1 || link.textContent.trim().endsWith(q);
        });
        if (link) {
            try {
                //@ts-ignore
                history.replaceState(null, null, link.href);
            } catch (e) { }
            //@ts-ignore
            return link.href;
        }
    }

    var n = 0;
    var host = location.hostname.split('.').slice(-2).join('.');
    switch (host) {
        case 'i-harness.com':
        case 'code-examples.net':
            n = parseInt(lastPathnamePart(), 16) || 0;
            break;
        case 'quabr.com':
            n = parseInt(location.pathname.split('/', 2)[1]) || 0;
            break;
        case 'profikoder.com':
        case 'progexact.com':
        case 'bestecode.com':
        case 'bonprog.com':
        case 'progaide.com':
        case 'coderquestion.ru':
        case 'coredump.biz':
        case 'issue.life':
        case 'xbuba.com':
            n = parseInt(location.pathname.split('/', 3)[2]) || 0;
            break;
        case 'exceptionshub.com':
            if (!/\.html$/.test(location.pathname)) {
                break;
            }
        case 'stackz.ru':
            return 'https://stackoverflow.com/search?back2stackoverflow=1&q=' + encodeURIComponent(document.querySelector('h1').textContent.trim());
        case 'codengineering.ru':
        case 'stackanswers.net':
        case 'askvoprosy.com':
            return 'https://stackoverflow.com/search?back2stackoverflow=1&q=' + encodeURIComponent(lastPathnamePart().replace(/(-duplicate)?(-\d+)?(\.html)?$/, ''));
        case 'codeday.me':
            if (location.hostname.startsWith('publish.')) {
                //@ts-ignore
                return document.querySelectorAll('.panel-body a')[1].href;
            }
    }
    if (n > 0) {
        return 'https://stackoverflow.com/questions/' + n;
    }

    var m = {
        'qaru.site': '.question-text > a[href*="stackoverflow.com/questions/"]',
        'askdev.info': '.question-text > a[href*="stackoverflow.com/questions/"]',
        'ubuntugeeks.com': '.question-text > a[href*="askubuntu.com/questions/"]',

        'qa-help.ru': 'a.uncolored-text[href*="stackoverflow.com/questions/"]',//встречаются вопросы с ru.stackoverflow.com
        'programmerz.ru': '.source-share-link',
        '4answered.com': '.view_body span a',
        'qna.one': '.page-container-question .source-share-block a',
        '365airsoft.com': '.origin > a',
        'codeday.me': '.article-es-url > a',
        'code-adviser.com': '.meta_data a',
        'web-answers.ru': '.source > a',
        'sprosi.pro': '#qsource > a',
        'overcoder.net': '.info_outlink',
        'qacode.ru': '.question-info .cc-link',
        'it-swarm.net': '.gat[data-cat="q-source"]',
        'rstopup.com': '.td-post-content .origlink > a',

        'stackru.com': '.q-source',
        'ask-ubuntu.ru': '.q-source',

        'stackoverrun.com': '.post-meta a',
        'stackovernet.com': '.post-meta a',

        'kotaeta.com': '.footer_question.mt-3 > a',
        'ciupacabra.com': '.footer_question.mt-3 > a',
        'de-vraag.com': '.footer_question.mt-3 > a',
        'switch-case.ru': '.footer_question.mt-3 > a',
        'switch-case.com': '.footer_question.mt-3 > a',
        'es.switch-case.com': '.footer_question.mt-3 > a',
        'pt.switch-case.com': '.footer_question.mt-3 > a',
        'de.switch-case.com': '.footer_question.mt-3 > a',
        'bn.switch-case.com': '.footer_question.mt-3 > a',
        'ar.switch-case.com': '.footer_question.mt-3 > a',
        'answer-id.com': '.footer_question.mt-3 > a',
        'while-do.com': '.footer_question.mt-3 > a'
    };
    var link = m[host] && document.querySelector(m[host]);
    return link ? link.href : null;
}

var u = originalUrl();
u && (location.href = u);