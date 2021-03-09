import Blockly from "blockly";

import blocklyMessages from "./pt-BR.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Documento sem nome",
    help: "Ajuda",
    load: {
        error: "O arquivo enviado está corrompido e não pode ser carregado pelo Scratch For Discord..."
    },
    file: {
        title: "Arquivo",
        javascript: "Exporta para javascirpt",
        open: "abrir arquivo...",
        save: "Salva"
    },
    edit: {
        title: "Edita",
        undo: "desfazer",
        redo: "refazer",
        clear: "deleta {blockCount} blocos",
        cleanup: "limpa blocos",
        cleardb: "limpa database"
    },
    lang: {
        title: "linguagem"
    },
    examples: {
        title: "Exemplos",
        confirm: {
            title: "Deleta os blocos atual?",
            text: "Você gostaria de remover os blocos do projeto atual antes de importar o exemplo?",
            cancel: "Cancela",
            yes: "Sim",
            no: "Não"
        },
        loaded: "Exemplo {example} importando com sucesso!",
        ping_pong: "comando ping-pong",
        command_parsing: "handler de comandos",
        leveling: "XP e sistema de níveis"
    },
    download: {
        title: "Instale o seu bot",
        content: {
            title: "Como iniciar o seu bot depois de baixado?",
            unzipFile: "Descompacte o arquivo baixado.",
            node: "Instale o NPM e o Node.js (pesquise tutoriais no Google)",
            start: "Execute 'npm install' e 'npm start' em um terminal",
            done: "Seu bot foi iniciado!"
        },
        cancel: "Cancela",
        confirm: "Instala"
    },
    tour: {
        skip: "Pular tour",
        previous: "Anterior",
        next: "Próximo",
        finish: "Termina",
        steps: {
            load_examples: "Importe exemplos para descobrir Scratch4Discord!",
            run_test: "Teste as funcionalidades do seu bot aqui!",
            export_code: "Exporte seu código aqui!"
        }
    },
    warnings: {
        login_block: "O bloco \"Conectar ao Discord\" na categoria \"Base\" é obrigatório."
    },
    run_modal: {
        title: "Clique em Iniciar para testar seu bot!",
        start: "Inicie o bot",
        stop: "Pare o bot",
        invalid_token: "Unable to connect to Discord... Maybe the bot's token isn't valid!",
        error: "Incapaz de conectar ao Discord ... Talvez o token do bot não seja válido!",
        disabled: "⚠️ Este recurso está disponível apenas usando o aplicativo Scratch For Discord (pegue ele {here})",
        here: "aqui"
    },
    code_modal: {
        title: "Código JavaScript do seu bot"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
