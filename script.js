function contar() {
    var ini =  document.getElementById('inicio');
    var fim =  document.getElementById('fim');
    var pas = document.getElementById('passo');
    var res = document.querySelector('div#resultado');
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando...\u{23F3}  <br><br>`
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);

        if (p <= 0) {
            alert('Passo inválido considerando passo 1')
            p = 1;
        }
        if (i < f) {
            //Contagem crescente 
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{23E9}`
            }
        } else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{23E9}`
            }
        }
        res.style.fontStyle = 'normal';
        res.innerHTML += ` \u{2705}`;
    } 
}