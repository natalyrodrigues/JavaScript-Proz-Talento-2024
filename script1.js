const numerosDaSorte = [37, 14, 26, 5, 94, 87];
        const resultadoDiv = document.getElementById('resultado');

        numerosDaSorte.forEach(numero => {
            let mensagem;
            if (numero < 50) {
                if (numero % 2 === 0) {
                    mensagem = `${numero} é par e menor que 50`;
                } else {
                    mensagem = `${numero} é menor que 50`;
                }
            } else {
                mensagem = `${numero} é maior que 50`;
            }
            resultadoDiv.innerHTML += `<p>${mensagem}</p>`;
        });