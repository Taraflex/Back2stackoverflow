// ==UserScript==
// @name         back2stackoverflow
// @version      0.1.2
// @description  Redirect to stackoverflow.com from machine-translated sites
// @namespace    taraflex
// @author       taraflex.red@gmail.com
// @downloadURL  https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @updateURL    https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @grant        GM_xmlhttpRequest
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
// @match        http://quabr.com/*/*
// @match        https://quabr.com/*/*
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
// @match        https://codeday.me/*/*
// @match        https://publish.codeday.me/post/*
// @match        https://issue.life/questions/*
// @match        https://*.coredump.biz/questions/*
// @match        http://www.code-adviser.com/detail_*
// @match        https://www.code-adviser.com/detail_*
// @match        https://ask-ubuntu.ru/questions/*
// @match        https://stackru.com/questions/*
// @match        https://xbuba.com/questions/*
// @match        http://web-answers.ru/*/*
// @match        https://web-answers.ru/*/*
// @match        https://sprosi.pro/questions/*
// @match        https://askvoprosy.com/voprosy/*
// @match        https://stackanswers.net/questions/*
// @match        https://codengineering.ru/q/*
// @match        https://overcoder.net/q/*
// @match        https://coderquestion.ru/q/*
// @match        http://qacode.ru/questions/*
// @match        https://progaide.com/question/*
// @match        http://stackz.ru/en/*/*
// @match        http://stackz.ru/ru/*/*
// @match        https://www.it-swarm.net/*/*
// @match        https://bonprog.com/question/*
// @match        https://bestecode.com/question/*
// @match        https://progexact.com/question/*
// @match        https://rstopup.com/*
// @match        https://profikoder.com/question/*
// @match        https://itranslater.com/qa/details/*
// @match        https://www.itranslater.com/qa/details/*
// @match        http://ru.voidcc.com/question/*
// @match        https://ru.voidcc.com/question/*
// @match        http://v-resheno.ru/*
// @match        https://v-resheno.ru/*
// @match        https://src-bin.com/*/q/*
// @match        https://intellipaat.com/community/*/*
// @match        https://askdev.ru/q/*
// ==/UserScript==

(async () => {
    'use strict';

    /**
     * @param {string} q
     */
    async function yaTranslate(q) {
        if (!q) {
            return null;
        }
        q = 'https://api.browser.yandex.ru/dictionary/translate?statLang=en&targetLang=en&text=' + encodeURIComponent(q)
        try {
            //dosn't work in chrome
            return await fetch(q, { mode: 'no-cors', credentials: 'omit' })
                .then(r => r.json())
                .then(r => r.text);
        } catch (e) {
            console.error(e);
            //works only in tampermonkey
            return new Promise((resolve, reject) => {
                //@ts-ignore
                GM_xmlhttpRequest({
                    url: q,
                    responseType: 'json',
                    anonymous: true,
                    onload: (xhr) => {
                        if (xhr.status === 200) {
                            resolve(xhr.response.text)
                        } else {
                            reject(xhr)
                        }
                    },
                    onerror: reject
                })
            })
        }
    }

    function lastPathPart() {
        return location.pathname.split('/').filter(Boolean).slice(-1)[0];
    }

    /**
     * @param {string} q
     * @param {Date} [before]
     */
    function findByApi(q, before) {
        return q && fetch('https://api.stackexchange.com/2.2/search?page=1&pagesize=1&order=desc&sort=relevance&intitle=' + encodeURIComponent(q) + '&site=stackoverflow' + (before ? '&todate=' + (before.getTime() / 1000 | 0) : ''), { credentials: 'omit' })
            .then(r => r.json())
            .then(r => r.items && r.items[0] && r.items[0].link);
    }

    /**
     * @param {string} selector
     */
    function textContent(selector) {
        const e = document.querySelector(selector);
        return e ? e.textContent.trim() || null : null
    }

    /**
     * @param {string} s
     */
    function toSearch(s) {
        return s ? 'https://stackoverflow.com/search?back2stackoverflow=1&q=' + encodeURIComponent(s) : null;
    }

    /**
     * @param {string} s
     * @param {number} [radix]
     */
    function byNumber(s, radix) {
        const n = parseInt(s, radix);
        return n > 0 ? 'https://stackoverflow.com/questions/' + n : null;
    }

    /**
     * @param {string} s
     */
    function wOnly(s) {
        return s && s.replace(/\sa\s|\san\s|\sthe\s/g, ' ').replace(/[^a-z0-9]/gi, '');
    }

    if (location.href.startsWith('https://stackoverflow.com/search?back2stackoverflow=1&q=')) {
        const q = new URLSearchParams(location.search).get('q');
        const qw = wOnly(q);
        const link = q && Array.prototype.slice.call(document.querySelectorAll('.result-link a'))
            //@ts-ignore
            .find(link => link.href.indexOf('/' + q, 36) !== -1 || wOnly(link.textContent.replace(/ \[closed|dublicate\]\s*$/, '')).endsWith(qw));
        if (link) {
            try {
                //@ts-ignore
                history.replaceState(null, null, link.href);
            } catch (e) { }
            //@ts-ignore
            return link.href;
        }
    }

    const host = location.hostname.split('.').slice(-2).join('.');
    switch (host) {
        case 'askdev.ru':
            if (textContent('.block_share span')) {
                const s = textContent('h1');
                return toSearch(await yaTranslate(s ? s.replace('[дубликат]', '') : s));
            }
            break;
        case 'intellipaat.com':
            return findByApi(
                textContent('h1'),
                new Date(document.querySelector('.qa-q-view-main time').getAttribute('datetime'))
            );
        case 'v-resheno.ru':
            return textContent('.linkurl > b');
        case 'src-bin.com':
        case 'i-harness.com':
        case 'code-examples.net':
            return byNumber(lastPathPart(), 16);
        case 'quabr.com':
            return byNumber(location.pathname.split('/', 2)[1]);
        case 'profikoder.com':
        case 'progexact.com':
        case 'bestecode.com':
        case 'bonprog.com':
        case 'progaide.com':
        case 'coderquestion.ru':
        case 'coredump.biz':
        case 'issue.life':
        case 'xbuba.com':
            return byNumber(location.pathname.split('/', 3)[2]);
        case 'exceptionshub.com':
            if (!/\.html$/.test(location.pathname)) {
                return;
            }//отсутствие break - не ошибка
        case 'codengineering.ru':
        case 'stackanswers.net':
        case 'askvoprosy.com':
            return toSearch(lastPathPart().replace(/(-duplicate)?(-\d+)?(\.html)?$/, ''));
        case 'stackz.ru':
            const enLink = document.querySelector('a[href^="/en/' + location.pathname.split('/', 3)[2] + '/"]');
            if (enLink) {
                //@ts-ignore
                return enLink.href;
            }
            return toSearch(textContent('h1'));
        case 'codeday.me':
            if (location.hostname.startsWith('publish.')) {
                //@ts-ignore
                return document.querySelectorAll('.panel-body a')[1].href;
            }
        default:
            const cssSelectors = {
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
                'itranslater.com': '.body > div:last-child > a',
                'voidcc.com': '.source > a',

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
            const link = cssSelectors[host] && document.querySelector(cssSelectors[host]);
            return link ? link.href : null;
    }

})().then(u => u && (location.href = u)).catch(console.error.bind(console));