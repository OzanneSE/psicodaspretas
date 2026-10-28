/*
 * Conversões do Google Ads · Psicologia das Pretas
 *
 * O formulário fica no Google Forms, que não volta para o site depois do envio.
 * Por isso a conversão é registrada no clique: no botão que leva ao formulário
 * e no link de WhatsApp.
 *
 * Para ativar: no Google Ads, Metas > Conversões > Nova ação de conversão >
 * Site > configurar manualmente. Crie uma ação para "Clique no formulário"
 * (e, se quiser, outra para "Clique no WhatsApp"). Na instalação manual,
 * o Google mostra send_to: 'AW-18538540122/XXXXXXXX'. Cole só o trecho
 * depois da barra entre as aspas abaixo.
 */
var CONVERSOES = {
  formulario: '',
  whatsapp: ''
};

document.addEventListener('click', function (e) {
  var a = e.target.closest ? e.target.closest('a[href]') : null;
  if (!a) return;
  var href = a.href || '';
  var tipo = null;
  if (href.indexOf('forms.gle') > -1 || href.indexOf('docs.google.com/forms') > -1) tipo = 'formulario';
  else if (href.indexOf('wa.me') > -1 || href.indexOf('api.whatsapp.com') > -1) tipo = 'whatsapp';
  if (!tipo || !CONVERSOES[tipo] || typeof gtag !== 'function') return;
  gtag('event', 'conversion', {
    send_to: 'AW-18538540122/' + CONVERSOES[tipo],
    transport_type: 'beacon'
  });
});
