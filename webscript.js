let input = document.querySelector("#input")
let scope = document.querySelector("#scope")
let body = document.querySelector("body")

scope.addEventListener("click", search)

function search(){
	let value = "https://www." + input.value
	window.open(value, "_blank")
	input.value = " "
}

body.addEventListener("keydown", (e) => {
	if(e.key === "Enter")
		{
			search()
			input.value = " "
		}
})

/*let btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
	////////////////////////////////////////////// input pro url ////////////
})*/

