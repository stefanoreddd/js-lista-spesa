let listaSpesa = ["Latte", "Uova", "Burro", "Pane", "Caffè"];

for (i = 0; i < listaSpesa.length; i++){
    console.log(i+1 + ") " + listaSpesa[i]);
    document.getElementById("listaDellaSpesa").innerHTML += `<li>${listaSpesa[i]}</li>`
}


/*let i = 0

while (i < listaSpesa.length){
    console.log(i+1 + ") " + listaSpesa[i]);
    i++;
}*/

function spesaButton () {
    let spesaAddOne = document.getElementById("addItem").value;

    listaSpesa.push(spesaAddOne);

    document.getElementById("listaDellaSpesa").innerHTML += `<li>${listaSpesa[(listaSpesa.length - 1)]}</li>`;
}

document.getElementById("buttonAdd").addEventListener("click", spesaButton);





