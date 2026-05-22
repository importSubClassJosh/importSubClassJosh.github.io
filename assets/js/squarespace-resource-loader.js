(function () {
  if (window.brqSquarespaceResourceLoaderActive) return;
  window.brqSquarespaceResourceLoaderActive = true;

  var SOURCE_ORIGIN = 'https://importsubclassjosh.github.io';
  var ROUTES = {
    '/start-here/': '/start-here/',
    '/resource-center/': '/resource-center/',
    '/articles/': '/articles/',
    '/downloads/': '/downloads/',
    '/about/': '/about/',
    '/contact/': '/contact/',
    '/privacy-policy/': '/privacy-policy/',
    '/editorial-policy/': '/editorial-policy/',
    '/real-estate-disclaimer/': '/real-estate-disclaimer/',
    '/the-agent-resource-desk/': '/author/the-agent-resource-desk/',

    '/choose-real-estate-brokerage-georgia/': '/choose-real-estate-brokerage-georgia/',
    '/flat-fee-real-estate-brokerage-georgia-agents/': '/flat-fee-real-estate-brokerage-georgia-agents/',
    '/new-georgia-real-estate-agent-first-client-checklist/': '/new-georgia-real-estate-agent-first-client-checklist/',
    '/fmls-vs-georgia-mls-agents/': '/fmls-vs-georgia-mls-agents/',
    '/real-estate-referral-commissions-georgia/': '/real-estate-referral-commissions-georgia/',
    '/rental-commissions-real-estate-agents/': '/rental-commissions-real-estate-agents/',
    '/pay-at-close-real-estate-agents/': '/pay-at-close-real-estate-agents/',
    '/listing-prep-checklist-georgia-agents/': '/listing-prep-checklist-georgia-agents/',
    '/buyer-agent-checklist-georgia-real-estate/': '/buyer-agent-checklist-georgia-real-estate/',
    '/earnest-money-guide-real-estate-agents/': '/earnest-money-guide-real-estate-agents/',
    '/real-estate-agent-vendor-list/': '/real-estate-agent-vendor-list/',
    '/part-time-real-estate-agent-productivity/': '/part-time-real-estate-agent-productivity/',
    '/referral-based-real-estate-business/': '/referral-based-real-estate-business/',
    '/real-estate-agent-branding-guide/': '/real-estate-agent-branding-guide/',
    '/dba-branding-real-estate-agents/': '/dba-branding-real-estate-agents/',
    '/new-real-estate-agent-mistakes/': '/new-real-estate-agent-mistakes/',
    '/georgia-real-estate-advertising-basics-agents/': '/georgia-real-estate-advertising-basics-agents/',
    '/first-real-estate-closing-checklist/': '/first-real-estate-closing-checklist/',
    '/short-term-rental-investing-georgia-basics/': '/short-term-rental-investing-georgia-basics/',
    '/real-estate-long-term-wealth-building/': '/real-estate-long-term-wealth-building/',

    '/georgia-agent-first-client-checklist/': '/downloads/georgia-agent-first-client-checklist/',
    '/listing-prep-checklist/': '/downloads/listing-prep-checklist/',
    '/buyer-agent-transaction-checklist/': '/downloads/buyer-agent-transaction-checklist/',
    '/brokerage-comparison-worksheet/': '/downloads/brokerage-comparison-worksheet/',
    '/vendor-list-builder/': '/downloads/vendor-list-builder/',
    '/first-closing-preparation-checklist/': '/downloads/first-closing-preparation-checklist/',
    '/referral-commission-question-sheet/': '/downloads/referral-commission-question-sheet/',

    '/agent-basics/': '/category/agent-basics/',
    '/brokerage-commission-education/': '/category/brokerage-commission-education/',
    '/mls-education/': '/category/mls-education/',
    '/listing-preparation/': '/category/listing-preparation/',
    '/buyer-representation/': '/category/buyer-representation/',
    '/referrals-rentals/': '/category/referrals-rentals/',
    '/transaction-basics/': '/category/transaction-basics/',
    '/agent-business-growth/': '/category/agent-business-growth/',
    '/agent-branding/': '/category/agent-branding/',
    '/compliance-minded-guides/': '/category/compliance-minded-guides/',
    '/investor-education/': '/category/investor-education/',
    '/georgia-market-education/': '/category/georgia-market-education/',
    '/checklists-downloads/': '/category/checklists-downloads/'
  };

  function normalizedPath() {
    var path = window.location.pathname || '/';
    if (!path.endsWith('/')) path += '/';
    return path;
  }

  var path = normalizedPath();
  var sourcePath = ROUTES[path];
  if (!sourcePath) return;

  function ensureStyle() {
    if (document.getElementById('brq-resource-loader-style')) return;
    var style = document.createElement('style');
    style.id = 'brq-resource-loader-style';
    style.textContent = [
      '.brq-resource-root{--merlot:#5b1724;--charcoal:#252525;--ivory:#fbf7ef;--brass:#b68a35;color:#252525;background:#fbf7ef;font-family:Poppins,Arial,sans-serif;line-height:1.65;}',
      '.brq-resource-root *{box-sizing:border-box;}',
      '.brq-resource-root a{color:#5b1724;text-decoration-thickness:1px;text-underline-offset:3px;}',
      '.brq-resource-root img{max-width:100%;height:auto;display:block;}',
      '.brq-resource-root .hero,.brq-resource-root .article-hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,520px);gap:34px;align-items:center;padding:56px max(24px,6vw);background:#2a2523;color:#fbf7ef;}',
      '.brq-resource-root .hero h1,.brq-resource-root .article-hero h1{font-family:"Bricolage Grotesque",Poppins,Arial,sans-serif;font-size:clamp(2rem,4vw,4.25rem);line-height:1.05;margin:0 0 18px;}',
      '.brq-resource-root .hero p,.brq-resource-root .article-hero p{font-size:1.05rem;max-width:760px;}',
      '.brq-resource-root .hero-image,.brq-resource-root .featured-image{margin:0;}',
      '.brq-resource-root .hero-image img,.brq-resource-root .featured-image img{border-radius:8px;box-shadow:0 18px 48px rgba(0,0,0,.24);}',
      '.brq-resource-root figcaption{font-size:.8rem;color:#6b625b;margin-top:8px;}',
      '.brq-resource-root .hero figcaption,.brq-resource-root .article-hero figcaption{color:#ded4c5;}',
      '.brq-resource-root .eyebrow{letter-spacing:.08em;text-transform:uppercase;font-weight:700;font-size:.78rem;color:#b68a35;margin:0 0 10px;}',
      '.brq-resource-root .button,.brq-resource-root .actions a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 16px;margin:8px 8px 0 0;border:1px solid #b68a35;border-radius:6px;background:#b68a35;color:#1f1715;text-decoration:none;font-weight:700;}',
      '.brq-resource-root .button.secondary,.brq-resource-root .actions a.secondary{background:transparent;color:#fbf7ef;}',
      '.brq-resource-root .content-band,.brq-resource-root .article-body,.brq-resource-root .resource-section,.brq-resource-root .download-body{max-width:1120px;margin:0 auto;padding:42px 24px;}',
      '.brq-resource-root .article-body{max-width:880px;}',
      '.brq-resource-root h2{font-family:"Bricolage Grotesque",Poppins,Arial,sans-serif;font-size:clamp(1.5rem,2.4vw,2.3rem);line-height:1.15;margin:34px 0 14px;color:#2a2523;}',
      '.brq-resource-root h3{font-size:1.15rem;margin:24px 0 10px;color:#5b1724;}',
      '.brq-resource-root p,.brq-resource-root li{font-size:1rem;}',
      '.brq-resource-root ul,.brq-resource-root ol{padding-left:1.25rem;}',
      '.brq-resource-root .card-grid,.brq-resource-root .resource-grid,.brq-resource-root .category-grid,.brq-resource-root .related-grid,.brq-resource-root .download-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;margin-top:18px;}',
      '.brq-resource-root .card,.brq-resource-root .resource-card,.brq-resource-root .category-card,.brq-resource-root .related-card,.brq-resource-root .checklist-card,.brq-resource-root .path-section{border:1px solid rgba(91,23,36,.18);border-radius:8px;background:#fffdf8;padding:20px;box-shadow:0 8px 24px rgba(37,37,37,.06);}',
      '.brq-resource-root .path-section{display:grid;grid-template-columns:minmax(0,1fr) minmax(220px,340px);gap:18px;margin:18px 0;}',
      '.brq-resource-root .toc,.brq-resource-root .disclaimer-block,.brq-resource-root .author-box{border-left:4px solid #b68a35;background:#fffdf8;padding:18px 20px;margin:24px 0;border-radius:6px;}',
      '.brq-resource-root .site-disclaimer,.brq-resource-root footer{background:#2a2523;color:#fbf7ef;padding:28px 24px;}',
      '.brq-resource-root .site-disclaimer a,.brq-resource-root footer a{color:#f1d58d;}',
      '.brq-resource-nav{display:flex;flex-wrap:wrap;gap:10px;align-items:center;padding:14px 24px;background:#fffdf8;border-bottom:1px solid rgba(91,23,36,.16);}',
      '.brq-resource-nav a{font-size:.9rem;font-weight:700;color:#5b1724;text-decoration:none;border:1px solid rgba(91,23,36,.18);border-radius:6px;padding:7px 10px;background:#fbf7ef;}',
      '.brq-resource-root table{width:100%;border-collapse:collapse;margin:18px 0;background:#fffdf8;}',
      '.brq-resource-root th,.brq-resource-root td{border:1px solid rgba(91,23,36,.18);padding:10px;text-align:left;vertical-align:top;}',
      '.brq-resource-status{max-width:900px;margin:40px auto;padding:22px;border:1px solid #b68a35;background:#fffdf8;color:#252525;}',
      '@media (max-width:800px){.brq-resource-root .hero,.brq-resource-root .article-hero,.brq-resource-root .path-section{grid-template-columns:1fr;padding:34px 20px;}.brq-resource-root .content-band,.brq-resource-root .article-body,.brq-resource-root .resource-section,.brq-resource-root .download-body{padding:30px 18px;}}',
      '@media print{body>*:not(#brq-resource-print-root){display:none!important}.brq-resource-root{background:white;color:black}.brq-resource-root a{color:black}.brq-resource-root .hero,.brq-resource-root .article-hero{background:white;color:black;padding:0}.brq-resource-root .button,.brq-resource-root nav,.brq-resource-root footer{display:none!important}}'
    ].join('');
    document.head.appendChild(style);
  }

  function rewriteUrl(value) {
    if (!value || value.charAt(0) === '#' || value.indexOf('mailto:') === 0 || value.indexOf('tel:') === 0) return value;
    var url;
    try {
      url = new URL(value, SOURCE_ORIGIN);
    } catch (e) {
      return value;
    }
    if (url.origin !== SOURCE_ORIGIN) return url.href;
    var next = url.pathname;
    if (next.indexOf('/assets/') === 0) return SOURCE_ORIGIN + next;
    if (next.indexOf('/downloads/') === 0) next = '/' + next.split('/').filter(Boolean).slice(-1)[0] + '/';
    if (next.indexOf('/category/') === 0) next = '/' + next.split('/').filter(Boolean).slice(-1)[0] + '/';
    if (next === '/author/the-agent-resource-desk/' || next === '/author/the-agent-resource-desk') next = '/the-agent-resource-desk/';
    return next + (url.hash || '');
  }

  function extractMain(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var title = doc.querySelector('title');
    var description = doc.querySelector('meta[name="description"]');
    var main = doc.querySelector('main');
    if (!main) throw new Error('No content found in source page.');
    main.querySelectorAll('a[href]').forEach(function (link) {
      link.setAttribute('href', rewriteUrl(link.getAttribute('href')));
    });
    main.querySelectorAll('img[src]').forEach(function (img) {
      img.setAttribute('src', rewriteUrl(img.getAttribute('src')));
      img.setAttribute('loading', img.getAttribute('loading') || 'lazy');
      img.setAttribute('decoding', 'async');
    });
    main.querySelectorAll('script').forEach(function (script) {
      script.remove();
    });
    return {
      html: main.innerHTML,
      title: title ? title.textContent : '',
      description: description ? description.getAttribute('content') : ''
    };
  }

  function updateMeta(content) {
    if (content.title) {
      document.title = content.title.replace(' | BRIQUE REALTY', ' | BRIQUE REALTY');
    }
    if (content.description) {
      var meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content.description);
    }
  }

  function render(content) {
    ensureStyle();
    var page = document.querySelector('main#page') || document.querySelector('main') || document.body;
    var root = document.createElement('article');
    root.id = 'brq-resource-print-root';
    root.className = 'brq-resource-root';
    root.innerHTML = resourceNav() + content.html;
    page.innerHTML = '';
    page.appendChild(root);
    updateMeta(content);
  }

  function resourceNav() {
    return '<nav class="brq-resource-nav" aria-label="Real estate resource navigation">' +
      '<a href="/">Home</a>' +
      '<a href="/start-here/">Start Here</a>' +
      '<a href="/resource-center/">Resource Center</a>' +
      '<a href="/articles/">Blog / Articles</a>' +
      '<a href="/about/">About</a>' +
      '<a href="/contact/">Contact</a>' +
      '<a href="/privacy-policy/">Privacy Policy</a>' +
      '<a href="/editorial-policy/">Editorial Policy</a>' +
      '<a href="/real-estate-disclaimer/">Real Estate Disclaimer</a>' +
    '</nav>';
  }

  function showStatus(message) {
    ensureStyle();
    var page = document.querySelector('main#page') || document.querySelector('main') || document.body;
    page.innerHTML = '<div class="brq-resource-status">' + message + '</div>';
  }

  function load() {
    showStatus('Loading Georgia real estate resource...');
    fetch(SOURCE_ORIGIN + sourcePath, { credentials: 'omit', cache: 'force-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('Source returned ' + response.status);
        return response.text();
      })
      .then(extractMain)
      .then(render)
      .catch(function (error) {
        showStatus('This resource is temporarily unavailable. Please use the Resource Center or contact page while the page is refreshed.');
        if (window.console) console.warn('BRQ resource loader failed:', error);
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);
  else load();
})();
