let char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const chars = ['$','%','#','@','&','(',')','=','*','/'];
const charsTotal = chars.length;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let title = 'SwiftOL';
let i = 0;
setInterval(() => {
	// document.title = chars[getRandomInt(0, charsTotal - 1)];
	// document.title = title.substring(0, i + 1);
	document.title = title.substring(0, i + 1);
	// document.title = chars[getRandomInt(0, charsTotal - 1)];
	if (i == 0) {
		direction = 1;
	} else if (i == title.length) {
		direction = -1;
	}
	i += direction;
}, 400);