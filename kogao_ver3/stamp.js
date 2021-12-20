// stamp


let _stamp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(_stamp.length);

let _num = 0;
localStorage.setItem("stamp", _stamp);

function Stump() {
	console.log("1");
	_num = localStorage.getItem("stamps_num");
	_num++;
	localStorage.setItem("stamps_num", _num);

	document.getElementsByClassName("stamps")
};

window.addEventListener("load", () => {
	// ロードして1秒後にスタンプ追加
	setTimeout(Stump, 1000);



	// 25超えるとリセット
	if (localStorage.getItem("stamps_num") == 26) {
		localStorage.removeItem("stamps_num");
		_num = 1;
		localStorage.setItem("stamps_num", _num);
	};



});

// 動確用
window.addEventListener("click", () => {
	localStorage.removeItem("stamps_num");
});

if (localStorage.getItem("stamps_num") <= 25) {
	console.log("a");
}