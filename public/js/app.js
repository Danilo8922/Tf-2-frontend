const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const itens = document.querySelectorAll('li.item');

        itens.forEach(item => {
            item.addEventListener('click', (event) => {
                // Sempre pega o <li> clicado (mesmo se clicou em span/strong)
                const liClicado = event.currentTarget;

                // Remove a classe .selected de todos
                itens.forEach(i => i.classList.remove('selected'));

                // Adiciona no <li> clicado
                liClicado.classList.add('selected');
            });
        });
    });
});