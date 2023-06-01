let yosou = document.querySelector('button#kaitou');
yosou.addEventListener('click', kensaku);

function kensaku() {
    let e = document.querySelector('input[name="kensakuba-"]');
    let Nyuuryokusitanaiyou = e.value;

    let h2 = document.querySelector('h2#kensakukekka');
    h2.textContent = Nyuuryokusitanaiyou+' の検索結果';

    let p1 = document.querySelector('p#zyouhou0');
    let p2 = document.querySelector('p#zyouhou1');
    let p3 = document.querySelector('p#zyouhou2');
    let p4 = document.querySelector('p#zyouhou3');
    let p5 = document.querySelector('p#zyouhou4');
    if(Nyuuryokusitanaiyou == 'エジプト'){
        p1.textContent = 'カイロ';
        p2.textContent = '天気:晴れ';
        p3.textContent = '最高気温:47度';
        p4.textContent = '最低気温:-3度';
        p5.textContent = '湿度:89%';
    }
    if(Nyuuryokusitanaiyou == 'ニホン'){
        p1.textContent = '東京';
        p2.textContent = '天気:雨';
        p3.textContent = '最高気温:6000度';
        p4.textContent = '最低気温:-10度';
        p5.textContent = '湿度:29%';
    }
    if(Nyuuryokusitanaiyou == 'ユナイテッドステイツ'){
        p1.textContent = 'ニューヨーク';
        p2.textContent = '天気:曇り';
        p3.textContent = '最高気温:230°F';
        p4.textContent = '最低気温:133°F';
        p5.textContent = '湿度:42%';
    }
    if(Nyuuryokusitanaiyou == 'フランス'){
        p1.textContent = 'パリ';
        p2.textContent = '天気:晴れ';
        p3.textContent = '最高気温:38度';
        p4.textContent = '最低気温:21度';
        p5.textContent = '湿度:22%';
    }
}