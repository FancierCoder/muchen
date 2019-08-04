(() => {
  const auth = () => {
    const day = 60 * 60 * 24 * 1000;
    const { is_post, lock, passwords, root } = window.AD_CONFIG;

    if(is_post === false || lock === false) {
      return;
    }

    let [password, expires] = atob(window.localStorage.getItem('auth')).split(':'),
      now = new Date().getTime();

    if(passwords.includes(password) && now < expires) {
      return; 
    }

    password = prompt('输入您的名称小写全拼 (例如: 李三 => lisan)');
    password = sha256(password || '');

    if(passwords.includes(password)) {
      expires = now + day * 3;
      window.localStorage.setItem('auth', btoa(`${password}:${expires}`));
    } else {
      alert('您没有阅读权限');
      window.location.href = root;
    }
  };

  // print github and demo info
  console.log(
    '\n%c Theme-AD v2.6.0 %c' + 
    ' 🎉 https://github.com/dongyuanxin/theme-ad 🎉\n' + 
    '\n%c Preview Online %c' + 
    ' 🔍 https://godbmw.com/ 🔍  \n' +
    '\n%c 本站地址 %c' +
    ' ✨ https://muchen.fun ✨  \n' ,
    'color: #fadfa3; background: #030307; padding:3px 0;', '', 'color: #fadfa3; background: #030307; padding:3px 0;', '',
      'color: #fadfa3; background: #030307; padding:3px 0;', ''
  );

  // article password auth
  auth();
})();