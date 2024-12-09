// Função para alternar a visibilidade do SQL
function toggleSQL(id) {
    // Cria um prefixo para os IDs dos SQLs
    const sqlElement = document.getElementById(`sql-${id}`);

    // Verifica se o SQL está visível e alterna a visibilidade
    if (sqlElement.style.display === "none" || sqlElement.style.display === "") {
        sqlElement.style.display = "block";  // Exibe o SQL
    } else {
        sqlElement.style.display = "none";  // Oculta o SQL
    }
}

// Inicializa todos os SQLs como ocultos ao carregar a página
window.onload = function() {
    for (let i = 1; i <= 30; i++) {
        const sqlElement = document.getElementById(`sql-${i}`);
        if (sqlElement) {
            sqlElement.style.display = "none";  // Esconde o SQL inicialmente
        }
    }
};
