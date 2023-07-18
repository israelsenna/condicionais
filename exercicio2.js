const valorDaCompra = 100;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    //a vista - com 10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar R$ ${valorAPagar}`);
    //Ou em uma linha:
    console.log(`Você deve pagar R$ ${valorDaCompra - valorDaCompra * 0.1}`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de R$ ${valorDaParcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //Parcelas de 7 até 12 vezes com taxa de juros 1% ao mes
    const valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros} devido a incidência de juros.`);
} else {
    console.log("Parcela não aceita!");
}