// ==UserScript==
// @name         Back2stackoverflow
// @version      0.1.41
// @description  Redirect to stackoverflow.com from machine-translated sites
// @namespace    taraflex
// @author       taraflex.red@gmail.com
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @updateURL    https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @homepageURL  https://github.com/Taraflex/Back2stackoverflow
// @supportURL   https://github.com/Taraflex/Back2stackoverflow/issues
// @grant        GM_xmlhttpRequest
// @noframes
// @match        https://stackoverflow.com/search?back2stackoverflow=*
// @match        http://qaru.site/questions/*
// @match        https://qaru.site/questions/*
// @match        http://fooobar.com/questions/*
// @match        https://fooobar.com/questions/*
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
// @match        https://ffff65535.com/*/q/*
// @match        https://qna.one/*
// @match        https://qa-help.ru/questions/*
// @match        https://exceptionshub.com/*
// @match        https://kotaeta.com/*
// @match        https://ciupacabra.com/*
// @match        https://de-vraag.com/*
// @match        https://switch-case.ru/*
// @match        https://switch-case.com/*
// @match        https://*.switch-case.com/*
// @match        https://bildiredi.com/*
// @match        https://donolik.com/*
// @match        https://pytannie.com/*
// @match        https://sozdizimi.com/*
// @match        https://zapytay.com/*
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
// @match        https://www.it-swarm.xyz/*/*
// @match        https://www.it-swarm.asia/*/*
// @match        https://www.it-swarm.dev/*/*
// @match        https://www.it-swarm.net/*/*
// @match        https://bonprog.com/question/*
// @match        https://bestecode.com/question/*
// @match        https://progexact.com/question/*
// @match        https://rstopup.com/*
// @match        https://profikoder.com/question/*
// @match        https://itranslater.com/qa/details/*
// @match        https://www.itranslater.com/qa/details/*
// @match        http://*.voidcc.com/question/*
// @match        https://*.voidcc.com/question/*
// @match        http://v-resheno.ru/*
// @match        https://v-resheno.ru/*
// @match        https://src-bin.com/*/q/*
// @match        https://intellipaat.com/community/*/*
// @match        https://oipapio.com/question-*
// @match        https://www.oipapio.com/question-*
// @match        https://qarus.ru/*
// @match        https://quick-geek.github.io/answers/*
// @match        https://weekly-geekly.github.io/articles/*
// @match        https://askdev.ru/q/*
// @match        https://vike.io/*/*/*
// @match        http://uwenku.com/question/*
// @match        https://uwenku.com/question/*
// @match        http://*.uwenku.com/question/*
// @match        https://*.uwenku.com/question/*
// @match        https://www.soinside.com/question/*
// @match        https://qa.1r1g.com/sf/ask/*
// @match        https://icode9.com/*
// @match        https://www.icode9.com/*
// @match        https://e-learn.cn/topic/*
// @match        https://www.e-learn.cn/topic/*
// @match        https://stackoom.com/question/*
// @match        https://codeindex.ru/q/*
// @match        https://kompsekret.ru/q/*
// @match        https://xszz.org/*/question-*
// @match        https://www.xszz.org/*/question-*
// @match        https://*.developreference.com/article/*
// @match        https://*.develop-bugs.com/article/*
// @match        https://www.thinbug.com/q/*
// @match        https://*.programqa.com/question/*
// @match        https://husl.ru/questions/*
// @match        https://www.husl.ru/questions/*
// @match        https://myht.ru/question/*
// @match        https://www.myht.ru/question/*
// @match        https://qarchive.ru/*
// @match        https://coderoad.ru/*
// @match        https://qastack.ru/*
// @match        https://answeright.com/*
// @match        https://www.answeright.com/*
// @match        https://brokencontrollers.com/faq/*
// @match        https://www.brokencontrollers.com/faq/*
// @match        https://itdaan.com/blog/*
// @match        https://www.itdaan.com/blog/*
// @match        https://legkovopros.ru/questions/*
// @match        https://prog-help.ru/*
// @match        https://www.generacodice.com/*
// ==/UserScript==

(async () => {
    'use strict';

    /**
     * @param {string} bgcolor
     * @param {string} link
     */
    async function promtRedirect(bgcolor, link) {
        const dialog = document.createElement('div');
        try {
            document.body.appendChild(dialog);
            const shadowRoot = dialog.attachShadow ?
                dialog.attachShadow({ mode: 'open' }) :
                //@ts-ignore
                dialog.createShadowRoot && dialog.createShadowRoot();
            if (!shadowRoot) {
                throw 'Shadow dom required!';
            }
            shadowRoot.innerHTML = `
<style>
:host{
    position: fixed;
    bottom: 0;
    z-index: 16777271; 
    width: 100%; 
    color: white;
    background-color: ${bgcolor};
}
.m{
    padding: 14px;
    font-family: Ubuntu,Segoe UI,Optima,Trebuchet MS,-apple-system,BlinkMacSystemFont,sans-serif;
    font-size: 14px;
}
#close-btn{
    float: right;
    cursor: pointer;
}
a{
    color: white;
}
.search-icon{
    font-size: 24px;
    line-height: 0;
    text-decoration: none;
}
</style>
<div class="m">[ Back2stackoverflow ] <a id="ok-btn" href="#">Try to find the original question?<a href="#" class="search-icon"> ⌕<a></a><span id="close-btn">✖</button></span>`;
            shadowRoot.querySelector('#ok-btn').href = shadowRoot.querySelector('.search-icon').href = link;
            await new Promise((_, reject) => {
                //shadowRoot.querySelector('#ok-btn').addEventListener('click', reject);
                shadowRoot.querySelector('#close-btn').addEventListener('click', reject);
            });
        } finally {
            document.body.removeChild(dialog);
        }
    }

    /**
     * @param {string} q
     * @param {string} sourceLang
     */
    async function yaTranslate(q, sourceLang) {
        q = dropMarks(q);
        if (!q) {
            return null;
        }
        //todo гугл переводчик вставляет пробелы где не нужно, исследовать вокруг каких знаков стоит удалять пробелы
        q = q.replace(/ \/ /g, '/');
        q = 'https://api.browser.yandex.ru/dictionary/translate?statLang=en&targetLang=en&text=' + encodeURIComponent(q) + (sourceLang ? '&fromLang=' + sourceLang : '')
        try {
            //dosn't work in chrome
            return await fetch(q, { mode: 'no-cors', credentials: 'omit' })
                .then(r => r.json())
                .then(r => r.text);
        } catch (_) {
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
     * @param {Date} [after]
     * @param {string[]} [tags]
     */
    function findByApi(q, before, after, tags) {
        q = dropMarks(q);
        return q && fetch(
            `https://api.stackexchange.com/2.2/search?page=1&pagesize=1&order=desc&sort=relevance&intitle=${encodeURIComponent(q)}&site=stackoverflow` +
            (after ? '&fromdate=' + (after.getTime() / 1000 - 120 | 0) : '') +
            (before ? '&todate=' + (before.getTime() / 1000 + 120 | 0) : '') +
            (Array.isArray(tags) && tags.length > 0 ? '&tagged=' + encodeURIComponent(Array.from(new Set(tags)).join(';')) : '')
            , { credentials: 'omit' })
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
     * @param {boolean} [real]
     */
    function toSearch(s, real) {
        s = dropMarks(s);
        return s ? `https://stackoverflow.com/search?back2stackoverflow=${+!!real}&q=` + encodeURIComponent(s) : null;
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
    function dropMarks(s) {
        return s && s.replace(/\[(на удержании|on hold|duplikować|duplicado|duplicar|duplikat|dublicate|duplicate|дубликат|закрыто|закрытый|closed|geschlossen|zamknięte|cerrado)\]\s*$/i, '').trim();
    }

    /**
     * @param {string} s
     */
    function normalize(s) {
        return s && ' ' + s.toLowerCase() + ' '
    }

    let auxiliaryRe = null;
    /**
     * @param {string} s
     */
    function removeAuxiliary(s) {
        return s && s.replace(auxiliaryRe || (auxiliaryRe = new RegExp([
            'a', 'an', 'the',
            //Conjunctions http://englishgu.ru/soyuzyi-v-angliyskom-yazyike-tablitsa-spisok/
            //https://7esl.com/english-conjunctions/
            'according to', 'after', 'against', 'also', 'although', 'and', 'as far as', 'as if', 'as long as', 'as much as', 'as soon as', 'as though', 'as well as', 'as', 'assuming that', 'at last', 'at least', 'because of', 'because', 'before', 'beyond', 'both', 'but', 'by the time', 'either', 'even if', 'even though', 'for', 'from now on', 'from time to time', 'how', 'however', 'if', 'in case', 'in order', 'in spite of', 'in terms of', 'lest', 'like', 'meanwhile', 'moreover', 'neither', 'nevertheless', 'no matter how', 'no matter what', 'no matter when', 'no matter where', 'no matter who', 'no matter why', 'nor', 'not so as', 'not yet', 'now that', 'on behalf of', 'on condition', 'on the contrary', 'on the other hand', 'once', 'only if', 'or', 'otherwise', 'owing to', 'provided that', 'rather than', 'since', 'so that', 'so', 'still', 'than', 'that is why', 'that', 'therefore', 'though', 'thus', 'till', 'unless', 'unlike', 'until', 'what', 'whatever', 'when', 'whenever', 'where', 'whereas', 'wherever', 'whether', 'which', 'whichever', 'while', 'who', 'whoever', 'whom', 'whomever', 'whose', 'with', 'within', 'without', 'yet',
            //some of Preposition https://www.englishclub.com/grammar/prepositions-list.htm
            //https://www.talkenglish.com/vocabulary/top-50-prepositions.aspx
            'aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'anti', 'around', 'at', 'behind', 'below', 'beneath', 'beside', 'besides', 'beyond', 'but', 'by', 'concerning', 'considering', 'despite', 'down', 'during', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'including', 'inside', 'into', 'of', 'off', 'on', 'onto', 'opposite', 'out', 'outside', 'over', 'past', 'per', 'regarding', 'since', 'than', 'through', 'throughout', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'within', 'without',
            //some of https://7esl.com/interjections-exclamations/
            'aah', 'ah', 'aha', 'ahem', 'alas', 'argh', 'aw', 'aww', 'bah', 'behold', 'bingo', 'boo', 'bravo', 'brr', 'dear', 'duh', 'eek', 'eh', 'er', 'eww', 'gah', 'gee', 'grr', 'hah', 'hello', 'hey', 'hi', 'hmm', 'huh', 'hullo', 'humph', 'hurrah', 'meh', 'mhm', 'muahaha', 'nuh-uh', 'oh', 'ooh', 'ooh-la-la', 'oomph', 'oops', 'ouch', 'oww', 'oy', 'pew', 'pff', 'phew', 'psst', 'sheesh', 'shh', 'shoo', 'tsk-tsk', 'uh-hu', 'uh-oh', 'uh-uh', 'uhh', 'um', 'umm', 'wee', 'well', 'whoa', 'wow', 'yahoo', 'yay', 'yeah', 'yikes', 'yippee', 'yoo-hoo', 'yuck', 'yuh-uh', 'zing',
            //modals
            'can', 'could', 'be able to', 'may', 'might', 'shall', 'should', 'must', 'have to', 'will', 'would',
        ].sort((a, b) => b.length - a.length).map(w => `\\W${w}(?!\\w)`).join('|'), 'g')), ' ');
    }

    /**
    * @param {string} s
    */
    function onlyAlphanum(s) {
        return s && s.replace(/[^a-z0-9]+/gi, '');
    }

    /**
     * @param {Function[]} fns
     */
    function pipe(...fns) {
        return (v) => {
            for (let f of fns) {
                v = f(v);
            }
            return v;
        }
    }

    /**
     * @param {string} s
     * @return {HTMLElement[]}
     */
    function all(s) {
        return Array.prototype.slice.call(document.querySelectorAll(s));
    }

    /**
     * @param {string} s
     * @return {string[]}
     */
    function allTexts(s) {
        return all(s).map(a => a.textContent.trim())
    }

    const href = location.href;

    if (href.startsWith('https://stackoverflow.com/search?back2stackoverflow=')) {
        const searchParams = new URLSearchParams(location.search);
        const prepare = +searchParams.get('back2stackoverflow') ? pipe(dropMarks, normalize, onlyAlphanum) : pipe(dropMarks, normalize, removeAuxiliary, onlyAlphanum);
        const q = searchParams.get('q');
        const preparedQ = prepare(q);
        if (preparedQ) {
            //@ts-ignore
            const link = all('.result-link a').find(link => link.href.indexOf('/' + q, 36) !== -1 || preparedQ.startsWith(prepare(link.textContent.replace(/^\s*(Q|A):/, ''))));
            if (link) {
                try {
                    //@ts-ignore
                    history.replaceState(null, null, link.href);
                } catch (e) { }
                //@ts-ignore
                return link.href;
            } else {
                return `https://www.google.com/search?q=${encodeURIComponent(q)}+site%3Astackoverflow.com`;
            }
        }
    } else if (href.startsWith('https://weekly-geekly.github.io/articles/')) {
        return document.querySelector('a[href^="https://habr.com/ru/post/"]');
    }

    const host = location.hostname.split('.').slice(-2).join('.');
    switch (host) {
        case 'legkovopros.ru':
            const legkovopros = await yaTranslate(textContent('h1'), 'ru');
            return (await findByApi(legkovopros, null, null, allTexts('.tag'))) || promtRedirect('#55b252', toSearch(legkovopros));
        case 'askdev.ru':
            let askdev = textContent('.block_share span') ? textContent('h1') : null;
            if (askdev) {
                askdev = await yaTranslate(askdev, 'ru');
                return (await findByApi(askdev, null, null, allTexts('.block_taxonomies a'))) || promtRedirect('#970f1b', toSearch(askdev));
            }
            return;
        case 'vike.io':
            let vike = textContent('h1');
            if (vike) {
                vike = await yaTranslate(vike.replace(/[^–]+–\s/, ''), location.pathname.split('/', 2).find(Boolean));
                const d = new Date(document.querySelector('.question-box .author__date').getAttribute('datetime'));
                return (await findByApi(vike, d, d, allTexts('.tags__item--blue'))) || promtRedirect('#09c199', toSearch(vike));
            }
            return;
        case 'soinside.com':
            const soinside = await yaTranslate(textContent('h1'), 'zh');
            return soinside && ((await findByApi(soinside, null, null, allTexts('.q-tag'))) || promtRedirect('#007bff', toSearch(soinside)));
        case '1r1g.com':
            const qa1r1g = await yaTranslate(textContent('h1'), 'zh');
            return qa1r1g && ((await findByApi(qa1r1g, null, null, allTexts('.badge'))) || promtRedirect('#343a40', toSearch(qa1r1g)));
        case 'xszz.org':
            return findByApi(
                textContent('.page-title'),
                new Date(document.querySelector('.gp-meta-date').getAttribute('datetime'))
            );
        case 'develop-bugs.com':
        case 'developreference.com':
            const parts = document.title.split(' - ');
            const tag = parts.pop();
            return findByApi(parts.join(' - '), null, null, [tag]);
        case 'intellipaat.com':
            return findByApi(
                textContent('h1'),
                new Date(document.querySelector('.qa-q-view-main time').getAttribute('datetime')),
                null,
                allTexts('.qa-q-view-main .qa-tag-link')
            );
        case 'oipapio.com':
            return findByApi(
                textContent('h1').replace(/^.*? - /, ''),
                new Date(textContent('.post-meta .date')),
                null,
                allTexts('.category')
            );
        case 'icode9.com':
            return textContent('#paragraph > p:last-child').split('来源：', 2)[1].trim();
        case 'v-resheno.ru':
            return textContent('.linkurl > b');
        case 'stackoom.com':
            return byNumber(document.getElementById('question').dataset.questionid);
        case 'myht.ru':
            return byNumber(lastPathPart().split('-', 1)[0]);
        case 'ffff65535.com':
        case 'src-bin.com':
        case 'i-harness.com':
        case 'code-examples.net':
            return byNumber(lastPathPart(), 16);
        case 'coderoad.ru':
        case 'quabr.com':
            return byNumber(location.pathname.split('/', 2)[1]);
        case 'brokencontrollers.com':
        case 'programqa.com':
        case 'thinbug.com':
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
            return toSearch(lastPathPart().replace(/(-closed|-duplicate)?(-\d+)?(\.html)?$/, ''), true);
        case 'stackz.ru':
            const enLink = document.querySelector('a[href^="/en/' + location.pathname.split('/', 3)[2] + '/"]');
            if (enLink) {
                //@ts-ignore
                return enLink.href;
            }
            return toSearch(textContent('h1'), true);
        case 'codeday.me':
            if (location.hostname.startsWith('publish.')) {
                //@ts-ignore
                return all('.panel-body a')[1].href;
            }
        case 'itdaan.com':
            const uv = document.querySelector('input[name="url"]');
            //@ts-ignore
            return uv && uv.value;
        default:
            const cssSelectors = {
                'kompsekret.ru': '.question-text > .a-link',
                'qaru.site': '.question-text > .aa-link',
                'fooobar.com': '.question-text > .aa-link',
                'askdev.info': '.question-text > .a-link',
                'ubuntugeeks.com': '.question-text > .a-link',
                'prog-help.ru': '.eclip > a[href*="stackoverflow.com/questions/"]',
                'generacodice.com': '#fontePrincipale > a.link',

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
                'rstopup.com': '.td-post-content .origlink > a',
                'itranslater.com': '.body > div:last-child > a',
                'voidcc.com': '.source > a',
                'qarus.ru': 'em > a',
                'uwenku.com': '.post-info a',
                /*'quick-geek.github.io'*/ 'github.io': '.question-hyperlink',
                'e-learn.cn': '.zhuanzai + div a',
                'codeindex.ru': '.text-muted.small',
                'husl.ru': '.source-link',
                'qarchive.ru': 'cite > a',
                'qastack.ru': '.text-muted > a:last-child',
                'answeright.com': '.wrapper-question-card .v-card__actions > a:not(.edited-author-button):not(.category-question-button)',

                'it-swarm.xyz': '.gat[data-cat="q-source"]',
                'it-swarm.asia': '.gat[data-cat="q-source"]',
                'it-swarm.dev': '.gat[data-cat="q-source"]',
                'it-swarm.net': '.gat[data-cat="q-source"]',

                'stackru.com': '.q-source',
                'ask-ubuntu.ru': '.q-source',

                'stackoverrun.com': '.post-meta a',
                'stackovernet.com': '.post-meta a',

                'kotaeta.com': '.footer_question.mt-3 > a',
                'ciupacabra.com': '.footer_question.mt-3 > a',
                'de-vraag.com': '.footer_question.mt-3 > a',
                'switch-case.ru': '.footer_question.mt-3 > a',
                'switch-case.com': '.footer_question.mt-3 > a',
                'bildiredi.com': '.footer_question.mt-3 > a',
                'donolik.com': '.footer_question.mt-3 > a',
                'pytannie.com': '.footer_question.mt-3 > a',
                'sozdizimi.com': '.footer_question.mt-3 > a',
                'zapytay.com': '.footer_question.mt-3 > a',
                'answer-id.com': '.footer_question.mt-3 > a',
                'while-do.com': '.footer_question.mt-3 > a'
            };
            const link = cssSelectors[host] && document.querySelector(cssSelectors[host]);
            return link ? link.href : null;
    }

})().then(u => u && (location.href = u)).catch(console.error.bind(console));
