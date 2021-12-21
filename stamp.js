// stamp
const DISP_COMPLETE = document.querySelector(".disp_complete");

let _num = 0;


function Stump() {
	_num = localStorage.getItem("stamps_num");
	_num++;
	localStorage.setItem("stamps_num", _num);
};

function MoveToTop() {
	window.location.href = 'index.html';
}

function SendCompleteMsg() {
	// alert("nice");
	document.querySelector(".stamp").style.display = "none";
	DISP_COMPLETE.style.display = "block";
	document.body.style.margin = 0;
	setTimeout(MoveToTop, 2000);
};

window.addEventListener("load", () => {
	// ロードして1秒後にスタンプ追加
	// setTimeout(Stump, 1000);
	Stump();

	// 25超えるとリセット
	if (localStorage.getItem("stamps_num") == 26) {


		localStorage.removeItem("stamps_num");
		_num = 1;
		localStorage.setItem("stamps_num", _num);
	};

	// スタンプ追加メイン構造
	if (localStorage.getItem("stamps_num") < 26) {
		let stamp_for = window.localStorage.getItem("stamps_num");
		console.log(parseInt(stamp_for) + 10);
		console.log(stamp_for + 100);

		for (let i = 1; i <= parseInt(stamp_for); i++) {
			console.log("a");
			let _stampimg = document.createElement("img");
			_stampimg.setAttribute("src", `images/dog__stamp.PNG`);
			_stampimg.setAttribute("class", "stamp_img");
			_stampimg.setAttribute("id", `stamp_day${i}`);
			document.querySelector(".stamps").appendChild(_stampimg);
		};

		if (localStorage.getItem("stamps_num") == 25) {
			// setTimeout(SendCompleteMsg, 1000);
			SendCompleteMsg();
		} else {
			DISP_COMPLETE.style.display = "none";
			document.querySelector(".stamp").style.display = "block";

		};
	};
});

// 動確用
window.addEventListener("click", () => {
	localStorage.removeItem("stamps_num");
});

if (localStorage.getItem("stamps_num") <= 25) {
	console.log("a");
}