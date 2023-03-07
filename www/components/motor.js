function calcularconsumo() {
    var altura, peso, consumo;

    altura = document.getElementById('altura').value
    peso = document.getElementById('peso').value

    consumo = peso / (altura * altura)

    document.getElementById("nome").innerHTML = consumo
}
