let a = document.querySelector('#udon');
a.addEventListener('mousemove', changeBackgroundColorRandom);


function changeBackgroundColorRandom() {
	// ランダムな RGB の色
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	// 色のプロパティ値を作る
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';

	let body = document.querySelector('body');
	body.style.backgroundColor = color;
}
