let input = document.querySelector("#input")
let scope = document.querySelector("#scope")
let body = document.querySelector("body")
let inputURL = document.querySelector(".inputURL")
let inputNAME = document.querySelector(".inputNAME")

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

let btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
	let list = document.querySelector(".list")
	list.classList.add(".active")
})

/////////////////////////////////////////////////////////////
let button = document.querySelector(".btn")
button.addEventListener("click", addLink)
  function addLink() {
            var url = prompt("Zadejte adresu odkazu:", "https://www.example.com");
            if (url != null) {
                var link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("target", "_blank");
                var linkText = document.createTextNode(url);
                link.appendChild(linkText);
                document.body.appendChild(link);
            }
  }


