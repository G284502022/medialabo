// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let yosou = document.querySelector('button#kaitou');
yosou.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let e = document.querySelector('input[name="mondai"]');
  let yoso = Number(e.value);


  let p1 = document.querySelector('p#addition');
  let p = document.querySelector('p#result');
  p1.textContent = kaisu+1+'回目の予想: '+yoso;
  // 課題3-1: 正解判定する
  let a = new Boolean(false);
  if(kaisu < 3){
    if(kaisu === 3){
      if(yoso === kotae){
        p.textContent = "正解です。おめでとう！";
      }else{
        p.textContent = "まちがい．残念でした答えは"+kotae+"です．";
      }
    }else{
      if(yoso === kotae){
        p.textContent = "正解です。おめでとう！";
        kaisu=3;
      }else if(yoso > kotae){
        p.textContent = "まちがい．答えはもっと小さいですよ";
      }else{
        p.textContent = "まちがい．答えはもっと大きいですよ";
      }

    }
  }else{
    p.textContent = "答えは "+kotae+" でした。すでにゲームは終わっています";
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソー
  kaisu = kaisu + 1;
}