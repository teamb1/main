/////////////////////// deklarace proměnných /////////////////
let input = document.querySelector("#input")
let scope = document.querySelector("#scope")
let body = document.querySelector("body")
let inputURL = document.querySelector(".inputURL")
let inputNAME = document.querySelector(".inputNAME")
let button = document.querySelector(".btn")
let link
let ls
let jsonls
let jsonparse
let buttomAdress
let parse
let fullurl
//////////////////////// buttom je deklarovný dole ///////////////////
///////////////////////////////////////////////////////////////////
//////////////////// vyhledávání url ///////////////////////////
//////////////////////////////////////////////////////////////
scope.addEventListener("click", search)

function search(){
    if(input.value === ""){
	    alert("nebyla zadana žádná adresa")
	}
	else{
	let value = "http://google.com/search?q=" + input.value
	window.open(value, "_blank")
	input.value = ""
	}
}
////////////////// vyhledani po stisknuti Entru/////////////////
body.addEventListener("keydown", (e) => {
	if(e.key === "Enter")
		{
			search()
			input.value = ""
		}
		console.log(input.value)
})


//////////////////////////////// uložení do localstorage /////////////////////
button.addEventListener("click", addLink)
  function addLink() {
           let url = prompt("Zadejte adresu odkazu:", "example");
		   if (url.slice(0,6) == "https:"){
			fullurl = url
		   }
		   else if (url.slice(0,5) == "http:"){
			fullurl = url
		   }
		   else {
			fullurl = "https://www." + url
		   }

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
			  console.log(parse)
              let output = document.querySelector("#output")
              output.textContent = parse
              
              output.addEventListener("click", function(){

                let a = parse
                window.open(fullurl, '_blank')
    
})
              
        }
        

//////////////////// čas //////////////////////
let time = document.querySelector(".time")

setInterval(() => {
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString()
}, 1000)



    
