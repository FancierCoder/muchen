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
    tocHideBtn = document.querySelector('#site-toc-hide-btn');

  tocShowBtn && tocShowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    layer.style.display = 'block';
    layerContent.style.display = 'none';
    toc.style.right = '0';

    window.AD_CONFIG.layer.add(() => {
      toc.style.right = '';
      layer.style.display = 'none';
      layerContent.style.display = '';
    });
  });
  
  tocHideBtn && tocHideBtn.addEventListener('click', window.AD_CONFIG.layer.trigger);
})();
