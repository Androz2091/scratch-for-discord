export const websiteMessages = {
    untitled: "Документ без названия",
    help: "Помощь",
    load: {
        error: "Загруженный файл повреждён, Scratch For Discord не может его открыть..."
    },
    file: {
        title: "Файл",
        javascript: "Экспорт в JavaScript",
        open: "Открыть файл...",
        save: "Сохранить"
    },
    edit: {
        title: "Правка",
        undo: "Отменить",
        redo: "Повторить",
        clear: "Удалить блоки ({blockCount})",
        cleanup: "Упорядочить блоки",
        cleardb: "Очистить базу данных"
    },
    lang: {
        title: "Язык"
    },
    examples: {
        title: "Примеры",
        confirm: {
            title: "Удалить текущие блоки?",
            text: "Удалить блоки текущего проекта перед загрузкой примера?",
            cancel: "Отмена",
            yes: "Да",
            no: "Нет"
        },
        loaded: "Пример {example} загружен!",
        ping_pong: "команда ping-pong",
        command_parsing: "обработчик команд",
        leveling: "система опыта и уровней"
    },
    download: {
        title: "Скачать бота",
        content: {
            title: "Как запустить бота после скачивания?",
            unzipFile: "Распакуйте скачанный файл.",
            node: "Установите Node.js 18 или новее (инструкции легко найти в интернете)",
            intents: "Включите интенты \"Server Members\" и \"Message Content\" вашего бота на Discord Developer Portal",
            start: "Выполните 'npm install' и 'npm start' в терминале",
            done: "Бот запущен!"
        },
        cancel: "Отмена",
        confirm: "Скачать"
    },
    tour: {
        skip: "Пропустить",
        previous: "Назад",
        next: "Далее",
        finish: "Готово",
        steps: {
            load_examples: "Загрузите примеры, чтобы познакомиться со Scratch For Discord!",
            run_test: "Проверьте бота здесь!",
            export_code: "Экспортируйте код здесь!"
        }
    },
    warnings: {
        login_block: "Блок \"Подключиться к Discord\" из категории \"Основа\" обязателен."
    },
    run_modal: {
        title: "Нажмите \"Запустить\", чтобы проверить бота!",
        start: "Запустить бота",
        stop: "Остановить бота",
        invalid_token: "Не удалось подключиться к Discord... Возможно, токен бота неверный!",
        error: "Не удалось подключиться к Discord... Попробуйте позже!",
        disabled: "⚠️ Эта функция доступна только в приложении Scratch For Discord (скачать {here})",
        here: "здесь"
    },
    code_modal: {
        title: "JavaScript-код вашего бота"
    },
    autosave: {
        title: "Восстановить проект",
        text: "Закрыли Scratch For Discord, не сохранив проект? Ничего страшного: выберите проект для восстановления в списке ниже!",
        restore: "Восстановить",
        cancel: "Отмена"
    }
};
