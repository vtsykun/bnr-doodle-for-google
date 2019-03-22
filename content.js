(function () {
  var dood = {
    replaceElement: function(el, logo, width = null) {
      if (!el) {
        return;
      }
      logo = chrome.runtime.getURL("images/" + logo);
      el.innerHTML = '<a title="101-годдзе абвяшчэнне Незалежнасці Беларускай Народнай Рэспублікі"  href="https://www.google.by/search?q=A%D0%B1%D0%B2%D1%8F%D1%88%D1%87%D1%8D%D0%BD%D0%BD%D1%8F+%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D0%BA%D0%B0%D0%B9+%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D0%B9+%D0%A0%D1%8D%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D1%96&oq=A%D0%B1%D0%B2%D1%8F%D1%88%D1%87%D1%8D%D0%BD%D0%BD%D1%8F+%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D0%BA%D0%B0%D0%B9+%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D0%B9+%D0%A0%D1%8D%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D1%96"><img src="' + logo + '"> </a>';
      el.title = '101-годдзе абвяшчэнне Незалежнасці Беларускай Народнай Рэспублікі';
      var img = el.getElementsByTagName('img')[0];
      img.style['max-width'] = '100%';

      el.style.display = 'block';
      return img;
    }
  };

  dood.replaceElement(document.getElementById('hplogo'), 'dzien-voli-logo.png');
  dood.replaceElement(document.getElementById('hplogoo'), 'dzien-voli-logo.png');
  var logo = dood.replaceElement(document.getElementsByClassName('logo')[0], 'dzien-voli-logo-small.png');
  if (logo) {
    logo.style.width = '92px';
  }

  var lga = document.getElementById('lga');
  lga = lga ? lga.getElementsByTagName('img')[0] : null;
  lga = dood.replaceElement(lga ? lga.parentElement : null, 'dzien-voli-logo.png');
  if (lga) {
    lga.style.hight = '92px';
    lga.style.display = 'block';
  }
}());
