const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = true;

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}