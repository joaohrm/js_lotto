//RANDOM DE INTERVALO DE VALORES

function random(min, max){
    const v_min = min || 0;
    const v_max = max || 100;
    return parseInt(Math.random()*(v_max-v_min)+v_min);
}

/*
**versão arrow function
random = (min, max) => {
    const v_min = min || 0;
    const v_max = max || 100;
    return parseInt(Math.random()*(v_max-v_min)+v_min);
}
  */