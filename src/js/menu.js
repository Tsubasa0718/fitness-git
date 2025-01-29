  // ボタンイベント
  const MenuBtn = document.getElementById('js-menu-btn');
  const Nav = document.getElementById('js-nav')
  MenuBtn.addEventListener('click', () => {
    MenuBtn.classList.toggle('active');
    Nav.classList.toggle('active');
  });
