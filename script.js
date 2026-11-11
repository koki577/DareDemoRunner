(function () {
  var button = document.getElementById('languageButton');
  if (!button) return;
  button.addEventListener('click', function () {
    var lang = document.documentElement.lang === 'ja' ? 'en' : 'ja';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ja][data-en]').forEach(function (element) {
      element.textContent = element.getAttribute('data-' + lang);
    });
    button.textContent = lang === 'ja' ? 'English' : '日本語';
  });
})();
