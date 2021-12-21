// stamp
const DISP_COMPLETE = document.querySelector(".complete_msg");

const DISP_FINISH = document.querySelector(".finish_msg");
const BTN_TOP = document.querySelector(".stamp_top");
const DISP_END = document.querySelector(".disp_complete");

let _num = 0;

function Stump() {
	_num = localStorage.getItem("stamps_num");
	_num++;
	localStorage.setItem("stamps_num", _num);
};

function MoveToTop() {
	window.location.href = 'index.html';
};

function SendCompleteMsg() {
	document.querySelector(".stamp").style.display = "none";
	DISP_END.style.display = "block";
	DISP_COMPLETE.style.display = "block";
	DISP_FINISH.style.display = "none";
	BTN_TOP.style.display="none"
	document.body.style.margin = 0;
	setTimeout(MoveToTop, 2000);
};

window.addEventListener("load", () => {
	// ロードして1秒後にスタンプ追加
	Stump();

	// 25超えるとリセット
	if (localStorage.getItem("stamps_num") == 26) {
		localStorage.removeItem("stamps_num");
		_num = 1;
		localStorage.setItem("stamps_num", _num);
	};

	// スタンプ追加メイン構造
	let stamp_done = []

	if (localStorage.getItem("stamps_num") < 26) {
		let stamp_for = window.localStorage.getItem("stamps_num");
		for (let i = 1; i <= parseInt(stamp_for); i++) {
			let _stampimg = document.createElement("img");
			_stampimg.setAttribute("src", `images/dog__stamp.PNG`);
			_stampimg.setAttribute("class", "stamp_img");
			_stampimg.setAttribute("id", `stamp_day${i}`);

			document.querySelector(".stamps").appendChild(_stampimg);

			stamp_done.push(_stampimg);

			console.log(stamp_done.slice(-1)[0]);

			function Stamp_today() {
				document.querySelector(".stamps").appendChild(stamp_done.pop());
			};

			setTimeout(Stamp_today, 2000);

			console.log(stamp_done);


			BTN_TOP.addEventListener("click", () => {
				document.querySelector(".stamp").style.display = "none";
				BTN_TOP.style.display = "none";
				DISP_END.style.display = "block";
				DISP_FINISH.style.display = "block";
				DISP_COMPLETE.style.display="none"
				document.body.style.margin = 0;
				setTimeout(MoveToTop, 2000);
			});

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
/* window.addEventListener("click", () => {
	localStorage.removeItem("stamps_num");
});

if (localStorage.getItem("stamps_num") <= 25) {
	console.log("a");
} */