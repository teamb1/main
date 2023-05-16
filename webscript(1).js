let input = document.querySelector("#input")
let scope = document.querySelector("#scope")
let body = document.querySelector("body")
let inputURL = document.querySelector(".inputURL")
let inputNAME = document.querySelector(".inputNAME")
let link
let ls
let jsonls
let jsonparse
let buttomAdress
let parse
//////////////////////// buttom je deklarovný dole ///////////////////

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


///////////////////////////// buttom deklarace ////////////////////////////////
let button = document.querySelector(".btn")
button.addEventListener("click", addLink)
  function addLink() {
           let url = prompt("Zadejte adresu odkazu:", "example.com");
           let fullurl = "https://www." + url
           console.log(fullurl)
  			if(prompt != null){
  				link = url
  			}else{
  				alert("Nezadali jste URL adresu")
  			}
  			jsonls = JSON.stringify(link)
              ls = localStorage.setItem("URL", jsonls)
              jsonparse = localStorage.getItem("URL")
              parse = JSON.parse(jsonparse)
              button.classList.add("used")
              buttom.src = parse
        }
        
        
///////////////////////// kontrola zadane adresy ///////////////////////
//if(prompt === )
  
  



