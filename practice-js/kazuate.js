// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let yosou = document.querySelector('#print');
yosou.addEventListener('click', hanteisouti);

function hanteisouti(){
  let h1 = document.querySelector('h1');
  hantei();
}

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let e = document.querySelector('input["mondai"]');
  let yoso = e.value;


  let h2 = document.querySelector('p#');	
  let yosouu = document.createElement('a');			// 新しい a要素を作成
  yosouu.textContent = '回目の予想';
  // 課題3-1: 正解判定する
  let i = 0;
  let a = new Boolean(false);
  for(i = 1; i < 10; i++){
  p1.textContent = i+'回目の予想: '+yoso;
  //console.log(i+"回目の予想: "+yoso);
  if(yoso == kotae && a == false){
    p.textContent = "正解です。おめでとう！";
    //console.log("正解です。おめでとう！");
    a = true;
  }else if(yoso <= kotae && a == false){
    p.textContent = "まちがい．答えはもっと大きいですよ";
    //console.log("まちがい．答えはもっと大きいですよ");
  }else if(yoso >= kotae && a == false){
    p.textContent = "まちがい．答えはもっと小さいですよ";
    //console.log("まちがい．答えはもっと小さいですよ");
  }else if(a == true){
    p.textContent = "答えは "+kotae+" でした。すでにゲームは終わっています";
    //console.log("答えは "+kotae+" でした。すでにゲームは終わっています");
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
}