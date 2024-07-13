/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');

window.addEventListener('load', () => {
  //ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    { //動かす内容
      opacity: [1, 0],
      visibility: 'hidden',
    },
    { //動きの詳細
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  //ローディング中（薄緑スクリーン）
  loadingAreaGreen.animate(
    { //動かす内容
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    { //動きの詳細
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});