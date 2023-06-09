let kensaku = document.querySelector('button#kensaku');
let henkan = document.querySelector('button#henkan');
let henkan2 = document.querySelector('button#henkan2');
let keywords = document.querySelector('button#keyword_kensaku');

//地図
let america = document.querySelector('button#america');
let england = document.querySelector('button#england');

kensaku.addEventListener('click', sendRequest);
henkan.addEventListener('click', changeTemperature);
henkan2.addEventListener('click', changeTemperature2);
keywords.addEventListener('click', keyword);

//地図
america.addEventListener('click', usa);
england.addEventListener('click', eng);
//セルシウス度
let temperature = '℃';
//華氏にするためのフラグ
let flag = new Boolean(false);
let flag1 = new Boolean(false);

function keyword() {
    let e = document.querySelector('input[name="kensakuba-2"]');
    let Nyuuryokusitanaiyoukeyword = e.value;
    let suuti = 0;

    if("カイロ"===Nyuuryokusitanaiyoukeyword){
        suuti = 360630;
    }

    if("モスクワ"===Nyuuryokusitanaiyoukeyword){
        suuti = 524901;
    }

    if("ヨハネスブルク"===Nyuuryokusitanaiyoukeyword){
        suuti = 993800;
    }

    if("北京"===Nyuuryokusitanaiyoukeyword){
        suuti = 1816670;
    }

    if("東京"===Nyuuryokusitanaiyoukeyword){
        suuti = 1850147;
    }

    if("シンガポール"===Nyuuryokusitanaiyoukeyword){
        suuti = 1880252;
    }

    if("シドニー"===Nyuuryokusitanaiyoukeyword){
        suuti = 2147714;
    }

    if("ロンドン"===Nyuuryokusitanaiyoukeyword){
        suuti = 2643743;
    }

    if("パリ"===Nyuuryokusitanaiyoukeyword){
        suuti = 2968815;
    }

    if("リオデジャネイロ"===Nyuuryokusitanaiyoukeyword){
        suuti = 3451189;
    }

    if("ニューヨーク"===Nyuuryokusitanaiyoukeyword){
        suuti = 5128581;
    }

    if("ロサンゼルス"===Nyuuryokusitanaiyoukeyword){
        suuti = 5368361;
    }

    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+suuti+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

let seijouki = false;//地図に使うやつ
let unionflag = false;
function usa(){
    seijouki = true;
    sendRequest();
}
function eng(){
    unionflag = true;
    sendRequest();
}
let Nyuuryokusitanaiyou;
let e;
function sendRequest() {
    let random = Math.floor(Math.random() * 2);
    if(seijouki){
        if(random == 0){
            Nyuuryokusitanaiyou = 5128581;
        }else{
            Nyuuryokusitanaiyou = 5368361;
        }
        seijouki = false;
    }else{
        e = document.querySelector('input[name="kensakuba-"]');
        Nyuuryokusitanaiyou = Number(e.value);
    }
    if(unionflag){
        Nyuuryokusitanaiyou = 2643743;
        unionflag = false;
    }else{
        e = document.querySelector('input[name="kensakuba-"]');
        Nyuuryokusitanaiyou = Number(e.value);
    }

    

        let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+Nyuuryokusitanaiyou+'.json';

        // 通信開始
        axios.get(url)
            .then(showResult)   // 通信成功
            .catch(showError)   // 通信失敗
            .then(finish);      // 通信の最後の処理
}

let a = 0;

function changeTemperature() {

    if(a === 0){
        temperature = '°F';
        flag = true;
        keyword();
        a++;
    }else if(a === 1){
        temperature = '℃';
        flag = false;
        keyword();
        a--;
    }
}

let b = 0;

function changeTemperature2() {

    if(b === 0){
        temperature = '°F';
        flag1 = true;
        sendRequest();
        b++;
    }else if(b === 1){
        temperature = '℃';
        flag1 = false;
        sendRequest();
        b--;
    }
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }


    if(flag === false){
        data.main.temp = data.main.temp;
        data.main.temp_max = data.main.temp_max;
        data.main.temp_min = data.main.temp_min;
    }else if(flag === true){
        data.main.temp = (data.main.temp * 9 /5) + 32;
        data.main.temp_max = (data.main.temp_max * 9 /5) + 32;
        data.main.temp_min = (data.main.temp_min * 9 /5) + 32;
    }

    if(flag1 === false){
        data.main.temp = data.main.temp;
        data.main.temp_max = data.main.temp_max;
        data.main.temp_min = data.main.temp_min;
    }else if(flag1 === true){
        data.main.temp = (data.main.temp * 9 /5) + 32;
        data.main.temp_max = (data.main.temp_max * 9 /5) + 32;
        data.main.temp_min = (data.main.temp_min * 9 /5) + 32;
    }

    let h2 = document.querySelector('h2#data_name');
    let p0 = document.querySelector('p#data_weather');
    let p1 = document.querySelector('p#temp');
    let p2 = document.querySelector('p#temp_max');
    let p3 = document.querySelector('p#temp_min');
    let p4 = document.querySelector('p#humidity');
    // データ表示
    h2.textContent = data.name+'の検索結果';
    p0.textContent = '天気:'+data.weather[0].main+'————'+data.weather[0].description;
    p1.textContent = '気温:'+data.main.temp+temperature;
    p2.textContent = '最高気温:'+data.main.temp_max+temperature;
    p3.textContent = '最低気温:'+data.main.temp_min+temperature;
    p4.textContent = '湿度:'+data.main.humidity+'%';
    // data をコンソールに出力
    console.log(data.name);
    console.log(data.weather[0].main);
    console.log(data.weather[0].description);

    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

function err(){
    console.log('通信に失敗しました');
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}