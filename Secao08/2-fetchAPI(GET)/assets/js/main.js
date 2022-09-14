//Requisição AJAX

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if (response.status !== 200) throw new Error('ERRO e não é 200 ');
        const html = await response.text();
        carregaResultado(html);
        
    } catch (e) {
        console.error(e);
    }
}


// function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     fetch(href)
//         .then(response => {
//             if (response.status !== 200) throw new Error('ERRO e não é 200 ');
//             return response.text();
//         })
//         .then(html => carregaResultado(html))
//         .catch(e => console.error(e));
// }