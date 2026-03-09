const produtos = [
    { id: 1, nome: 'Notebook', valor: 2500, categoria: 'Eletrônicos' },
    { id: 2, nome: 'Smartphone', valor: 1500, categoria: 'Eletrônicos' },
    { id: 3, nome: 'Camiseta', valor: 50, categoria: 'Roupas' },
    { id: 4, nome: 'Calça Jeans', valor: 120, categoria: 'Roupas' },
    { id: 5, nome: 'Fone de Ouvido', valor: 200, categoria: 'Eletrônicos' }
]

const ids = produtos.map(produtos => produtos.id);

console.log(ids);