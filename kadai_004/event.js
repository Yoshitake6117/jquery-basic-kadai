$(window).on( {
  //読み込み
  'load': () => {
    console.log('loadイベントが発生しました');
  },

  //スクロール
  'scroll': () => {
    console.log('scrollイベントが発生しました');
  },
});
