// Capturando os elementos
const titulo = document.getElementById('titulo');
const link = document.querySelector('a');
const listaNaoOrdenada = document.querySelector('ul');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo ao h1 e ao link

titulo.innerText = "Bem-vindo ao Projeto!";
link.innerText = "Visite a pagina Prozeducação";

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>JavaScript 1</li>
    <li>Captura de Elementos</li>
    <li>Propriedade .innerHTML</li>
`;

// Adicionando itens à lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://www.youtube.com/watch?v=WRlfwBof66s&ab_channel=TigerCodes">Aprendar JavaScript</a></li>
    <li><a href="https://www.youtube.com/watch?v=YgHQRdGZw3w&ab_channel=DevClub%7CPrograma%C3%A7%C3%A3o">Funções em JavaScript</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript">Artigo JavaScript</a></li>
`;