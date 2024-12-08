const cardsData = [
    { title: "Agendamentos", image: "images/agendamentos.png" },
    { title: "Clientes", image: "images/clientes.png" },
    { title: "Consultas", image: "images/consultas.png" },
    { title: "Funcionários", image: "images/funcionarios.png" },
    { title: "Itens Vendidos", image: "images/itens_vendidos.png" },
    { title: "Pets", image: "images/pets.png" },
    { title: "Produtos", image: "images/produtos.png" },
    { title: "Serviços", image: "images/servicos.png" },
    { title: "Vendas", image: "images/vendas.png" },
    { title: "Veterinários", image: "images/veterinarios.png" }
  ];
  
  const cardContainer = document.getElementById('cardContainer');
  
  cardsData.forEach(({ title, image }) => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${image}" alt="${title}" class="card-image">
          <div class="title">${title}</div>
        </div>
        <div class="flip-card-back">
          <div class="back-title">${title}</div>
          <button class="back-option">Listar Todos</button>
          <button class="back-option">Adicionar</button>
        </div>
      </div>`;
    card.addEventListener('click', () => card.classList.toggle('clicked'));
    cardContainer.appendChild(card);
  });
  