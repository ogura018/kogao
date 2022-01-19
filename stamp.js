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

function SendCompleteMsg(menu_part, name_stretch) {
	document.querySelector(".stamp").style.display = "none";
	DISP_END.style.display = "block";
	DISP_COMPLETE.style.display = "block";
	document.getElementById("archive0").innerHTML = menu_part;
	document.getElementById("archive1").innerHTML = name_stretch;
	DISP_FINISH.style.display = "none";
	BTN_TOP.style.display = "none"
	document.body.style.margin = 0;
	setTimeout(MoveToTop, 2000);
};

function SendPerfectMsg() {
	document.querySelector(".stamp").style.display = "none";
	DISP_END.style.display = "block";
	DISP_COMPLETE.style.display = "block";
	document.getElementById("disp_msg_p0").innerHTML = "おめでとうございます！"
	document.getElementById("disp_msg_p1").innerHTML = "すべての体操をクリアしました！<br>お疲れさまでした！"
	DISP_FINISH.style.display = "none";
	BTN_TOP.style.display = "none"
	document.body.style.margin = 0;
	setTimeout(MoveToTop, 4000);
}


let menu_locked_num = parseInt(localStorage.getItem("menu"))
/* let menu_locked_num = parseInt(localStorage.getItem("menu"));
console.log(menu_locked_num); */

window.addEventListener("load", () => {
	// ロードして(可能なら1秒後に)スタンプ追加
	Stump();

	// 25超えるとリセット

	if (localStorage.getItem("stamps_num") == 26) {
		localStorage.removeItem("stamps_num");
		_num = 1;
		localStorage.setItem("stamps_num", _num);
	};

	// スタンプ追加メイン構造
	let stamp_done = [];

	if (localStorage.getItem("stamps_num") < 26) {
		let stamp_for = window.localStorage.getItem("stamps_num");
		for (let i = 1; i <= parseInt(stamp_for); i++) {
			let _stampimg = document.createElement("img");
			_stampimg.setAttribute("src", `images/dog__stamp.PNG`);
			_stampimg.setAttribute("class", "stamp_img");
			_stampimg.setAttribute("id", `stamp_day${i}`);

			document.querySelector(".stamps").appendChild(_stampimg);
			stamp_done.push(_stampimg);

			console.log(stamp_done.slice(0, i - 1));
			console.log(stamp_done.slice(-1)[0]);

			// stamp_done.slice(-1)[0].style.display = "none";



			function Stamp_today() {
				stamp_done.slice(-1)[0].style.display = "inline";
				// console.log(stamp_done);
			};

			setTimeout(Stamp_today, 1000);

			console.log(stamp_done);


			BTN_TOP.addEventListener("click", () => {
				document.querySelector(".stamp").style.display = "none";
				BTN_TOP.style.display = "none";
				DISP_END.style.display = "block";
				DISP_FINISH.style.display = "block";
				DISP_COMPLETE.style.display = "none"
				document.body.style.margin = 0;
				setTimeout(MoveToTop, 2000);
			});

		};



		if (localStorage.getItem("stamps_num") == 25) {
			console.log(menu_locked_num++);
			localStorage.setItem("menu", menu_locked_num++);

			if (menu_locked_num == 1) {
				SendCompleteMsg("パーツ：目", "目の体操");
			} else if (menu_locked_num == 2) {
				SendCompleteMsg("パーツ：右の頬", "右の頬の体操");
			} else if (menu_locked_num == 3) {
				SendCompleteMsg("パーツ：口", "口の体操");
			} else if (menu_locked_num == 4) {
				SendCompleteMsg("パーツ：左の頬", "左の頬の体操");
			} else if (menu_locked_num == 5) {
				SendPerfectMsg();
				menu_locked_num = 0;
				localStorage.setItem("menu", 0);
			};

		} else {
			DISP_COMPLETE.style.display = "none";
			document.querySelector(".stamp").style.display = "block";
		};
	};
});


// 不正防止
if (window.performance) {
	if (performance.navigation.type === 1) {
		location.href = "index.html"
	}
}

// 動確用
/* window.addEventListener("click", () => {
	localStorage.removeItem("stamps_num");
});

if (localStorage.getItem("stamps_num") <= 25) {
	console.log("a");
} */