import Blockly from "blockly";

import blocklyMessages from "./ru-RU.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Untitled document",
    help: "Помощь",
    load: {
        error: "Загруженный файл повреждёг и не может быть открыт в Scratch For Discord..."
    },
    file: {
        title: "Файл",
        javascript: "Экспорт в Javascript",
        open: "Открыть файл...",
        save: "Сохранить"
    },
    edit: {
        title: "Изменить",
        undo: "Назад",
        redo: "Вперёд",
        clear: "Очистить {blockCount} блоков",
        cleanup: "Расставить блоки",
        cleardb: "Очитстить датабазу"
    },
    lang: {
        title: "Язык"
    },
    examples: {
        title: "Примеры",
        confirm: {
            title: "Удалить действующие блоки?",
            text: "Удалить блоки из проекта чтобы заменить их блокаи из примера?",
            cancel: "Отмена",
            yes: "Да",
            no: "Нет"
        },
        loaded: "Пример {example} успешно загружен!",
        ping_pong: "ping-pong команда",
        command_parsing: "Обработчик команд",
        leveling: "Система XP и уровней"
    },
    download: {
        title: "Скачать вашего бота",
        content: {
            title: "Как включить бота после скачивания?",
            unzipFile: "Разархивируйте скачанный файл.",
            node: "Установите Node.Js Current",
            start: "Запустите \"npm install\" и \"npm start\" в cmd",
            done: "Ваш бот запущен!"
        },
        cancel: "Отмена",
        confirm: "Скачать"
    },
    tour: {
        skip: "Пропустить туториал",
        previous: "Назад",
        next: "Вперёд",
        finish: "Финиш",
        steps: {
            load_examples: "Загрузите примеры для просмотра возможностей Scratch For Discord!",
            run_test: "Проверьте функциональность вашего бота здесь!",
            export_code: "Экспортируйте код здесь!"
        }
    },
    warnings: {
        login_block: "Блок \"Подключиться к Discord\" в категории \"Базовые блоки\" обязателен."
    },
    run_modal: {
        title: "Нажмите запустить бота!",
        start: "Запустить бота",
        stop: "Выключить бота",
        invalid_token: "Не получается присоедениться к Discord... Может быть Вы ввели неправильный токен!",
        error: "Не получается присоедениться к Discord... Попробуйте позже!",
        disabled: "⚠️ Эта возможность возможна только при использовании приложения Scratch For Discord (скачать его {here})",
        here: "тут"
    },
    code_modal: {
        title: "JavaScript код вашего бота"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
