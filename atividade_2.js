let lista_produtos = [];

function limparFormulario() {
    document.getElementById('formProduto').reset();
}

function atualizarTabela() {
    const tabela = document.getElementById('tabelaProdutos');
    tabela.innerHTML = `
        <tr>
            <th>#</th>
            <th>Nome do Produto</th>
            <th>Qtd.Estoque</th>
            <th>Valor Unit.</th>
            <th>Fornecedor</th>
            <th>Alterar</th>
            <th>Excluir</th>
        </tr>
    `;

    if (lista_produtos.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="7">Nenhum produto cadastrado até o momento</td>`;
        tabela.appendChild(tr);
    } else {
        lista_produtos.forEach((produto, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${produto.nomeProduto}</td>
                <td>${produto.qtdEstoque}</td>
                <td>${produto.valorUnitario.toFixed(2)}</td>
                <td>${produto.fornecedor}</td>
                <td><button onclick="alterar(${index})">Alterar</button></td>
                <td><button onclick="excluir(${index})">Excluir</button></td>
            `;
            tabela.appendChild(tr);
        });
    }
}

function excluir(index) {
    lista_produtos.splice(index, 1);
    atualizarTabela();
}

function alterar(index) {
    const produto = lista_produtos[index];
    document.getElementById('nomeProduto').value = produto.nomeProduto;
    document.getElementById('qtdEstoque').value = produto.qtdEstoque;
    document.getElementById('ValorUni').value = produto.valorUnitario;
    document.getElementById('FornecedorProduto').value = produto.fornecedor;
    excluir(index);
}

function gravar() {
    let nomeProduto = document.getElementById("nomeProduto").value;
    let qtdEstoque = parseInt(document.getElementById("qtdEstoque").value);
    let valorUni = parseFloat(document.getElementById("ValorUni").value);
    let fornecedor = document.getElementById("FornecedorProduto").value;

    if (!nomeProduto || !fornecedor || isNaN(qtdEstoque) || isNaN(valorUni)) {
        alert("Preencha todos os campos corretamente");
        limparFormulario();
        return;
    } else {
        let novoProduto = {
            nomeProduto: nomeProduto,
            qtdEstoque: qtdEstoque,
            valorUnitario: valorUni,
            fornecedor: fornecedor
        };
        lista_produtos.push(novoProduto);
        console.log(lista_produtos);
        atualizarTabela();
        limparFormulario();
    }
}
