let listaCompras = [];

function adicionarItem() {
    let item = document.getElementById("item").value;
    item = item.toLowerCase(); 
    if (!item) {
        alert("Preencha o campo");
        return;
    } else {
        if (listaCompras.includes(item)) {
            alert("Este item já foi adicionado à lista.");
            return;
        }
        listaCompras.push(item);
        exibirLista();
        contarItens();
        limpar();
    }
}

function removerItem() {
    let item = document.getElementById("item").value;
    item = item.toLowerCase();
    if (!item) {
        alert("Preencha o campo");
        return;
    } else {
        let index = listaCompras.indexOf(item);
        if (index !== -1) {
            listaCompras.splice(index, 1);
            exibirLista();
            contarItens();
            limpar();
        } else {
            alert("Item não encontrado na lista");
        }
    }
}

function exibirLista() {
    let tabela = document.getElementById("tabelaItens");
    tabela.innerHTML = `
    <tr>
        <th>#</th>
        <th>Item</th>
    </tr>`;
    
    if (listaCompras.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="2">Nenhum produto cadastrado até o momento</td>`;
        tabela.appendChild(tr);
    } else {
        listaCompras.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${item}</td>
            `;
            tabela.appendChild(tr);
        });
    }
}

function contarItens() {
    let quantidade = document.getElementById("quantidade");
    quantidade.innerHTML = `<b>Total de itens: ${listaCompras.length}<b/>`;
}

function limpar() {
    document.getElementById("formItens").reset(); 
}

document.getElementById("formItens").addEventListener("submit", function(event) {
    event.preventDefault();
});
