fetch('https://fakestoreapi.com/products') 
// fetch é um busca dados 
.then(res => res.json())//quando os dados chegam transforma eles em json
  .then(data => { //os dados estão prontos e são colocados na variavel
    const tableBody = document.getElementById('product-table-body'); //faz com que os produtos apareçam no lugar certo
    const produtos = data.slice(0, 20); // só os 20 primeiros

    produtos.forEach(produto => { //ele vai passa em produto e criar uma linha na tabela
      const row = `
        <tr>
          <th scope="row">${produto.id}</th>
          <td>${produto.title}</td>
          <td>$${produto.price.toFixed(2)}</td>
          <td>${produto.category}</td>
          <td>
            <img src="${produto.image}" alt="Imagem do produto" width="60" height="60" style="object-fit: contain;">
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;//ele pega oq ja tem dentro da tabela e adiciona mais uma linha. 
    });
  })
  .catch(error => { //caso de algum erro vai ser mostrado no console
    console.error('Erro ao carregar os produtos:', error);
  });
