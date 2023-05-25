function calcularGorjeta(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let people = document.getElementById('people').value;

    if(bill == '' | serviceQuality == 0){
        alert("Por favor, preencha os valores")
        return;
    }

    let total = (bill * serviceQuality) / people;
    total = total.toFixed(2);
    document.getElementById('valorTotal').innerHTML = total;
    document.getElementById('total').style.display = "block";
    
}

document.getElementById('total').style.display = "none";

document.getElementById('formulario').addEventListener('submit', calcularGorjeta);