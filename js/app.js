const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector("#input");

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const today = new Date();
DATE_HTML.innerHTML = today.toLocaleString("en-US", options);

document.addEventListener("keyup", event => {
	// console.log(event.code)

	// TODO: get Enter code
	if(event.code === "Enter"){
		const inputValue = INPUT_HTML.value;
		if(inputValue !=""){
			//1. add todo
			console.log(inputValue);
			//2. clearTnput
			clearInput();
		} 
	}

	// TODO: get value from input 
	// TODO: check condition if not null and console value
	// TODO: clear  input 
});

function clearInput() {
	// TODO: clear input
	INPUT_HTML.value="";
}