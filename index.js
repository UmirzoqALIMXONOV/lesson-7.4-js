function getQavs() {
    let InputVal = document.getElementById("Input").value

    ochiq = 0
    yopiq = 0

    for (var i of InputVal) {
        if (i === "(") {
            ochiq++
        } else if (i === ")") {
            yopiq++
        }else{
            document.getElementById("display2").innerText = "faqat qavslar kiriting!"
        }
    }
    document.getElementById("display").innerText = ochiq+" ta ochiq qavs bor "+ " va "+yopiq+" ta yopiq qavs bor"


    if(ochiq > yopiq){
        document.getElementById("display2").innerText = "ochuvchi qavslar soni ko'p"
    }else if(ochiq < yopiq){
        document.getElementById("display2").innerText = "yopuvchi qavslar soni ko'p"
    }else if(ochiq === yopiq){
        document.getElementById("display2").innerText = " qavslar soni teng!"
    }else{
      
        document.getElementById("display2").innerText = "faqat qavslar kiriting!"
    }
}



