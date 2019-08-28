(() => {
  function handleImgClick(event) {
    // window.open(event.target.getAttribute('src'), '_blank');
    // let wid = event.target.width;
    let wid = document.body.clientWidth * 0.95;
    let fire = {
      imageUrl: event.target.getAttribute('src'),
      // imageHeight: 800,
      width: wid,
      imageWidth: wid,
      padding: '0',
      imageAlt: 'A image',
      showConfirmButton: false,
      allowOutsideClick: true,
      showCloseButton: true
    };
    Swal.fire(fire);
    // $('.swal2-actions').hide()
    $('.swal2-image').css('margin', '0')
  }

  const { is_post, page_type } = window.AD_CONFIG;

  document
    .querySelectorAll('.passage-article')
    .forEach(
      passage => 
        passage
          .querySelectorAll('img')
          .forEach(image => image.addEventListener('click', handleImgClick))
    );

  if(!is_post && ['about', 'friends'].includes(page_type) === false) {
    return;
  }

  const layer = document.querySelector('#site-layer'),
    layerContent = layer.querySelector('.site-layer-content'),
    toc = document.querySelector('#site-toc'),
    tocShowBtn = document.querySelector('#site-toc-show-btn'),
    tocHideBtn = document.querySelector('#site-toc-hide-btn'),
    tocShowBtn2 = document.querySelector('#toggle-menu-tree');
    // tocHideBtn2 = document.querySelector('#site-toc-show-btn');

  tocShowBtn && tocShowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    layer.style.display = 'block';
    layerContent.style.display = 'none';
    toc.style.right = '0';
    toc.classList.add('display-menu-tree');

    window.AD_CONFIG.layer.add(() => {
      toc.style.right = '';
      layer.style.display = 'none';
      layerContent.style.display = '';
      toc.classList.remove('display-menu-tree');
      tocShowBtn2.removeEventListener('click', window.AD_CONFIG.layer.trigger);
    });
    tocShowBtn2.addEventListener('click', window.AD_CONFIG.layer.trigger);
  });

  tocShowBtn2 && tocShowBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    layer.style.display = 'block';
    layerContent.style.display = 'none';
    toc.style.right = '0';
    toc.classList.add('display-menu-tree');

    window.AD_CONFIG.layer.add(() => {
      toc.style.right = '';
      layer.style.display = 'none';
      layerContent.style.display = '';
      toc.classList.remove('display-menu-tree');
      tocShowBtn2.removeEventListener('click', window.AD_CONFIG.layer.trigger);
    });
    tocShowBtn2.addEventListener('click', window.AD_CONFIG.layer.trigger);
  });

  tocHideBtn && tocHideBtn.addEventListener('click', window.AD_CONFIG.layer.trigger);

  $('#table-toc a.toc-link[href^="#"]').each(function () {
    var b = $(this).attr("href");
    b.match(/^#/) && ($(this).off("click").on("click", function () {
      scroll(b.substring(1), !0);
    }))
  });
  
  function scroll(b, c) {
    var e = w();
    b = isNaN(b) ?
        $("#" + b).offset().top - e : b;
    c = void 0 !== c && !0 === c ? 600 : 0;
    $("body,html").animate({scrollTop: b}, c);
    return !1
  }

  let w = function () {
    var b = 0, c = $(".site-header");
    c && !c.is(":hidden") && (b = c.innerHeight());
    return b
  }

})();

$(function(){"use strict";$(".preloader").fadeOut()});
