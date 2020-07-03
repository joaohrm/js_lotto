function lottery(quant, min, max){
    
    //defaults
    const v_quant = quant || 1;
    const v_min   = min   || 1;
    const v_max   = max   || 99;
    

    //teste de limite de numeros
    let numbers = document.querySelectorAll('.number');
    let numbersLen = numbers.length;
    if(numbersLen >= v_quant){
        console.log('chegou ao limite!');
        return;
    }
    

    //criando elemento
    const obj = document.createElement('li');
    obj.id = 'obj_'+Date.now();
    obj.className = 'number';
    
    //array para teste de repetido
    let arr = [];
    for(i=0;i<numbersLen;i++){
        arr.push(parseInt(numbers[i].innerHTML));
    }

    
    //gera até encontrar um número válido
    let randGenerated = random(v_min, v_max);
    while(arr.indexOf(randGenerated) != -1){
        randGenerated = random(v_min, v_max);
    }
    
    obj.style.setProperty('order', randGenerated);
    obj.innerHTML = randGenerated;


    document.getElementById('lotto_list').appendChild(obj)
}