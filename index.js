import fs from "fs";
import chalk from "chalk";

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'arquivo não achado'))
}

//async/await

async function pegaArquivo(caminhoDoArquivo) {
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto)
    } catch(erro){
        trataErro(erro)
    }
}




//promises são para códigos assíncrono
//then você passa o parametro e o que espera de resposta
//catch é o parametro caso o then não ache o que procura

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(texto))
//         .catch((trataErro))
// }




pegaArquivo('./arquivos/texto.md')