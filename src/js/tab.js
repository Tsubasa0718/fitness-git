document.addEventListener('DOMContentLoaded', () => {
    const pcTabButtons = [...document.querySelectorAll('.c-tab-btn')];
    const spTabButtons = [...document.querySelectorAll('.c-tab-btn--sp')];
    const pcTabContents = [...document.querySelectorAll('.p-price__tab-content-wrapper.l-pc-only .p-price__tab-content')];
    const spTabContents = [...document.querySelectorAll('.p-price__tab-content-wrapper.l-sp-only .p-price__tab-content')];

    const setActiveClass = (buttons, contents, activeClass) => {
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const targetTab = button.dataset.tab;

          buttons.forEach(btn => btn.classList.remove(activeClass));
          contents.forEach(content => content.classList.remove(activeClass));

          button.classList.add(activeClass);
          document.getElementById(targetTab).classList.add(activeClass);
        });
      });

      // 初期状態の処理として、最初のタブをアクティブに設定
      buttons[0].classList.add(activeClass);
      contents[0].classList.add(activeClass);
    };

    setActiveClass(pcTabButtons, pcTabContents, 'active');
    setActiveClass(spTabButtons, spTabContents, 'active');
    // クラスの付与
      const priceCells = document.querySelectorAll('.p-price__table-sp-td[data-label="料金"]');
      const benefitCells = document.querySelectorAll('.p-price__table-sp-td[data-label="特典"]');

    // 各列調整し、クラスを追加
    priceCells.forEach(cell => {
      cell.classList.add('price-cell');
    });

    benefitCells.forEach(cell => {
      cell.classList.add('benefit-cell');
    });
  });
