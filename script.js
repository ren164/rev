
function boasVindas() {
    const nome = prompt("Qual é o seu nome?");
    if (nome && nome.trim() !== "") {
        const mensagem = `🎉 Olá, ${nome}! Seja bem-vindo(a) ao nosso sistema!`;
        mostrarResultado('boasVindasResult', mensagem, 'success');
    } else {
        mostrarResultado('boasVindasResult', '❌ Nome não informado!', 'error');
    }
}


function mostrarTexto() {
    const texto = document.getElementById('textoInput').value;
    if (texto.trim() !== "") {
        mostrarResultado('textoResult', `📝 Texto digitado: "${texto}"`, 'highlight');
    } else {
        mostrarResultado('textoResult', '❌ Digite algo no campo de texto!', 'error');
    }
}

function somarValores() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const soma = num1 + num2;
        const resultado = `🔢 ${num1} + ${num2} = ${soma}`;
        mostrarResultado('somaResult', resultado, 'success');
    } else {
        mostrarResultado('somaResult', '❌ Digite dois números válidos!', 'error');
    }
}



function concatenarNumero() {
    const numero = document.getElementById('numConcat').value;
    if (numero !== "") {
        const resultado = `🔗 Número concatenado: "O número é ${numero}"`;
        mostrarResultado('concatResult', resultado, 'highlight');
    } else {
        mostrarResultado('concatResult', '❌ Digite um número!', 'error');
    }
}

// 3. Maioridade
function verificarMaioridade() {
    const idade = parseInt(document.getElementById('idade').value);
    
    if (!isNaN(idade) && idade > 0) {
        let resultado;
        if (idade >= 18) {
            resultado = `✅ Você tem ${idade} anos e é MAIOR de idade!`;
        } else {
            resultado = `👶 Você tem ${idade} anos e é MENOR de idade!`;
        }
        mostrarResultado('maioridadeResult', resultado, 'success');
    } else {
        mostrarResultado('maioridadeResult', '❌ Digite uma idade válida!', 'error');
    }
}

// ========================================
// FUNÇÕES DE TEXTO
// ========================================

// 1. Manipulando Texto
function manipularTexto() {
    const frase = document.getElementById('frase').value;
    
    if (frase.trim() !== "") {
        const resultado = `📝 FRASE: "${frase}"

🔢 Quantidade de caracteres: ${frase.length}
🔠 Em maiúsculas: "${frase.toUpperCase()}"
🔡 Em minúsculas: "${frase.toLowerCase()}"
🔄 Substituindo "a" por "o": "${frase.replace(/a/g, 'o')}"
🔍 Contém a palavra "de": ${frase.toLowerCase().includes('de') ? 'Sim' : 'Não'}
📍 Caractere na posição 5: "${frase.charAt(5)}"`;
        
        mostrarResultado('textoManipuladoResult', resultado, 'highlight');
    } else {
        mostrarResultado('textoManipuladoResult', '❌ Digite uma frase!', 'error');
    }
}

// ========================================
// FUNÇÕES MATEMÁTICAS
// ========================================

// Variável global para o jogo de adivinhação
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// 1. Adivinhar o número
function adivinharNumero() {
    const palpite = parseInt(document.getElementById('palpite').value);
    
    if (!isNaN(palpite) && palpite >= 1 && palpite <= 10) {
        let resultado;
        if (palpite === numeroAleatorio) {
            resultado = `🎉 PARABÉNS! Você acertou! O número era ${numeroAleatorio}`;
            mostrarResultado('adivinharResult', resultado, 'success');
        } else if (palpite < numeroAleatorio) {
            resultado = `📈 Tente um número MAIOR! Seu palpite: ${palpite}`;
            mostrarResultado('adivinharResult', resultado, 'highlight');
        } else {
            resultado = `📉 Tente um número MENOR! Seu palpite: ${palpite}`;
            mostrarResultado('adivinharResult', resultado, 'highlight');
        }
    } else {
        mostrarResultado('adivinharResult', '❌ Digite um número entre 1 e 10!', 'error');
    }
}

// Gerar novo número para o jogo
function gerarNovoNumero() {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    mostrarResultado('adivinharResult', '🔄 Novo número gerado! Tente adivinhar!', 'highlight');
    document.getElementById('palpite').value = '';
}

// 2. Arredondando valores
function arredondarValores() {
    const decimal = parseFloat(document.getElementById('decimal').value);
    
    if (!isNaN(decimal)) {
        const resultado = `🔢 Número: ${decimal}

⬆️ Arredondado para cima (ceil): ${Math.ceil(decimal)}
⬇️ Arredondado para baixo (floor): ${Math.floor(decimal)}
➡️ Arredondado normalmente (round): ${Math.round(decimal)}`;
        
        mostrarResultado('arredondarResult', resultado, 'highlight');
    } else {
        mostrarResultado('arredondarResult', '❌ Digite um número decimal válido!', 'error');
    }
}

// 3. Manipulando números
function analisarNumeros() {
    // Gerar 10 números aleatórios entre 1 e 100
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    
    const resultado = `🔢 Sequência de 10 números: ${numeros.join(', ')}

📊 Análise:
   • Maior número: ${maior}
   • Menor número: ${menor}
   • Soma total: ${numeros.reduce((a, b) => a + b, 0)}
   • Média: ${(numeros.reduce((a, b) => a + b, 0) / numeros.length).toFixed(2)}`;
    
    mostrarResultado('analiseResult', resultado, 'highlight');
}

// 4. Novos valores
function transformarNumero() {
    const numero = parseFloat(document.getElementById('numTransform').value);
    
    if (!isNaN(numero)) {
        const resultado = `🔢 Número original: ${numero}

✨ Transformações:
   • Valor absoluto: ${Math.abs(numero)}
   • Elevado a 4: ${Math.pow(numero, 4)}
   • Raiz quadrada: ${Math.sqrt(numero).toFixed(4)}`;
        
        mostrarResultado('transformResult', resultado, 'highlight');
    } else {
        mostrarResultado('transformResult', '❌ Digite um número válido!', 'error');
    }
}

// ========================================
// DATAS
// ========================================

// 1. Mostrando a data
function mostrarData() {
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    
    const resultado = `📅 Data atual: ${dataFormatada}
🕐 Hora atual: ${horaFormatada}

📊 Detalhes:
   • Dia da semana: ${agora.toLocaleDateString('pt-BR', {weekday: 'long'})}
   • Mês: ${agora.toLocaleDateString('pt-BR', {month: 'long'})}
   • Ano: ${agora.getFullYear()}
   • Dia: ${agora.getDate()}`;
    
    // Mostrar no console também
    console.log('Data atual:', agora);
    console.log('Data formatada:', dataFormatada);
    
    mostrarResultado('dataResult', resultado, 'success');
}

// 2. Dia do aniversário
function calcularAniversario() {
    const dataAniversario = document.getElementById('aniversario').value;
    
    if (dataAniversario) {
        const hoje = new Date();
        const aniversario = new Date(dataAniversario);
        
        // Definir o próximo aniversário
        const proximoAniversario = new Date(aniversario);
        proximoAniversario.setFullYear(hoje.getFullYear());
        
        // Se o aniversário já passou este ano, calcular para o próximo ano
        if (proximoAniversario < hoje) {
            proximoAniversario.setFullYear(hoje.getFullYear() + 1);
        }
        
        // Calcular diferença em milissegundos
        const diferenca = proximoAniversario - hoje;
        const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
        
        const resultado = `🎂 Seu aniversário: ${aniversario.toLocaleDateString('pt-BR')}
📅 Próximo aniversário: ${proximoAniversario.toLocaleDateString('pt-BR')}
⏰ Dias restantes: ${diasRestantes} dias`;
        
        mostrarResultado('aniversarioResult', resultado, 'success');
    } else {
        mostrarResultado('aniversarioResult', '❌ Selecione uma data de aniversário!', 'error');
    }
}

// ========================================
// FUNÇÃO AUXILIAR PARA MOSTRAR RESULTADOS
// ========================================

function mostrarResultado(elementId, texto, tipo = 'highlight') {
    const elemento = document.getElementById(elementId);
    elemento.style.display = 'block';
    elemento.textContent = texto;
    
    // Remover classes anteriores
    elemento.className = 'result';
    
    // Adicionar classe de tipo
    if (tipo === 'success') {
        elemento.classList.add('success');
    } else if (tipo === 'error') {
        elemento.classList.add('error');
    } else {
        elemento.classList.add('highlight');
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

// Definir data de hoje como valor padrão para o campo de aniversário
document.addEventListener('DOMContentLoaded', function() {
    const hoje = new Date();
    const dataFormatada = hoje.toISOString().split('T')[0];
    document.getElementById('aniversario').value = dataFormatada;
    
    console.log('🎉 Aplicação de Revisão JavaScript carregada com sucesso!');
    console.log('📚 Todos os exercícios estão funcionando!');
});