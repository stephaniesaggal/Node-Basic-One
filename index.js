import fs from "fs";
import chalk from "chalk";

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'arquivo não achado'))
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro)
        }
        console.log(texto)
    })
}

pegaArquivo('./arquivos/texto.md')