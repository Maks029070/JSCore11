function show(data) {
	console.log(data);
}

function task1() {

	function myFunct(str) {
		str = str.charAt(0).toUpperCase() + str.slice(1);
		return str;
	}

	var testString = 'maxim';
	show(myFunct(testString));
	show(myFunct('yura'));
}

function task2() {
	function truncate(str, maxlength) {
		if (str.length > maxlength) {
			str = str.substring(0, maxlength - 3) + "...";
		}
		return str;
	}

	var testString = 'Ось, що мені хотілося б сказати на цю тему';
	show(truncate(testString, 20));
	show(truncate("Всім привіт!", 20));
	show(truncate("Всім привіт!", 10));
}

function task3() {
	function extractCurrencyValue(str) {
		str = str.replace('$', '');
		str = str.trim();
		return str;
	}

	var testString = '$ 120';
	var testString2 = '550 $';

	show(extractCurrencyValue(testString));
	show(extractCurrencyValue(testString2));
	show(extractCurrencyValue('$       355'));
	
}