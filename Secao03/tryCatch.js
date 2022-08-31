function soma(x, y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
        ) {
        throw('x e y precisam ser números.');
    }
    return x + y;
}

// try {
//     console.log(soma(1, 2)); // executada quando não a erro.
//     console.log(soma('3', 2));
// } catch(error) {
//     console.log(error);  // executado quando há erro.
// }


// try {
//     console.log(a);
//     console.log('Abri o arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch (e) {
//     console.log('Tratando o erro');
// } finally { //Sempre
//     console.log('FINALLY:  Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
       throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', //colocando a quantidade de digitos que precisa
        minute:'2-digit',
        second: '2-digit',
        hour12: true // ligando a hora em PM/AM
    });
}

try{
    const data = new Date ();
    const hora = retornaHora(data);
    console.log(hora);
}catch(e) {
    console.log(e);
} finally {
    console.log('Tenha um bom descanso.');
}
