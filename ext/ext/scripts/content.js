function generateEvenlySpacedList(x) { 
    if (x == 1){
        return [20];
    }
    const interval = 20 / (x - 1);
    let list = [];
  
    for (let i = 0; i < x; i++) {
      const number = Math.round(i * interval) + 1;
      list.push(number-1);
    }
    return list;
}

  
function main() {
    const grayPalette = ['#000000', '#080808', '#0f0f0f', '#141414', '#181818', '#1c1d1c', '#202120', '#252525', '#292a29', '#2e2e2e', '#323332', '#373737', '#3b3c3b', '#404140', '#454645', '#494b49', '#4e4f4e', '#535453', '#585958', '#5d5f5d'];

    var fontSizes = [];
    var textElms = [];

    var elems = document.getElementsByTagName('*');
    var total = elems.length;

    for(var x = 0; x < total; x++) {
        if (elems[x].innerText != undefined){
            elems[x].style.backgroundColor = "white";
            textElms.push(elems[x]);
            fontSize = window.getComputedStyle(elems[x], null).getPropertyValue('font-size').slice(0,-2);
            if (+fontSizes < 14){
                elems[x].style.fontSize = "18px";
            }
            if(fontSizes.indexOf(fontSize) == -1){
                fontSizes.push(fontSize);
            }
        }
    }
    fontSizes = fontSizes.sort((a, b) => a - b);
    fontSizes = fontSizes.slice(0,20);
    fontColors = generateEvenlySpacedList(fontSizes.length);

    for (x of textElms){
        x.style.color = grayPalette[fontColors[fontSizes.indexOf(window.getComputedStyle(x, null).getPropertyValue('font-size').slice(0,-2))]]; 
    }
}

main()