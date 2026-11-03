/* Aviso de cookies: so aparece para quem ainda nao escolheu.
   No Espaco Economico Europeu e no Reino Unido a medicao do Google fica desligada ate "Aceitar". */
(function () {
  try { if (localStorage.getItem('consent-pdp')) return; } catch (e) { return; }
  var d = document.createElement('div');
  d.setAttribute('role', 'dialog');
  d.setAttribute('aria-label', 'Aviso de cookies');
  d.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:560px;margin:0 auto;background:#F7F2E9;color:#2A2622;border:1px solid rgba(125,100,53,.4);border-radius:6px;padding:14px 16px;font:16px/1.5 "Crimson Pro",Georgia,serif;box-shadow:0 4px 18px rgba(0,0,0,.15)';
  d.innerHTML = '<p style="margin:0 0 10px">Usamos um cookie do Google para medir se nossos anúncios funcionam. Você escolhe. <a href="/privacidade.html" style="color:#2F5D4A">Saiba mais</a>.</p>' +
    '<button id="cp-ok" style="padding:8px 16px;margin-right:8px;background:#2F5D4A;color:#F7F2E9;border:0;border-radius:2px;cursor:pointer;font:inherit">Aceitar</button>' +
    '<button id="cp-no" style="padding:8px 16px;background:transparent;color:#2A2622;border:1px solid rgba(125,100,53,.5);border-radius:2px;cursor:pointer;font:inherit">Recusar</button>';
  function fim(v) {
    try { localStorage.setItem('consent-pdp', v); } catch (e) {}
    if (v === 'sim' && typeof gtag === 'function') gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });
    d.remove();
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(d);
    document.getElementById('cp-ok').onclick = function () { fim('sim'); };
    document.getElementById('cp-no').onclick = function () { fim('nao'); };
  });
  if (document.readyState !== 'loading') { document.body.appendChild(d); document.getElementById('cp-ok').onclick = function () { fim('sim'); }; document.getElementById('cp-no').onclick = function () { fim('nao'); }; }
})();
