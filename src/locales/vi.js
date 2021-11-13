import Blockly from "blockly";

import blocklyMessages from "./vi-vi.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Tài liệu không tên",
    help: "Trợ giúp",
    load: {
        error: "Tệp tải lên bị hỏng và không thể tải được bằng Scratch cho Discord ... "
    },
    file: {
        title: "tập tin",
        javascript: "Xuất ra Javascript",
        open: "Mở một tập tin...",
        save: "Lưu"
    },
    edit: {
        title: "Chỉnh sửa",
        undo: "Hoàn tác",
        redo: "Làm lại",
        clear: "Xóa {blockCount} Khối lệnh",
        cleanup: "Xóa tất cả khối lệnh",
        cleardb: "Xóa cơ sở dữ liệu "
    },
    lang: {
        title: "Ngôn Ngữ"
    },
    examples: {
        title: "Ví dụ",
        confirm: {
            title: "Xóa những khối lệnh hiện tại?",
            text: "Bạn có muốn xóa các khối lệnh khỏi dự án hiện tại trước khi nhập ví dụ không ?",
            cancel: "Hủy",
            yes: "Có",
            no: "Không"
        },
        loaded: "Ví dụ {example} được nhập thành công! ",
        ping_pong: "lệnh ping-pong",
        command_parsing: "trình xử lý lệnh",
        leveling: "Hệ thống XP và các cấp độ "
    },
    download: {
        title: "Tải xuống bot của bạn",
        content: {
            title: "Làm thế nào để khởi động bot của bạn sau khi tải xuống?",
            unzipFile: "Giải nén tập tin đã tải xuống.",
            node: "Cài Đặt NPM và Node.js (Tìm trên google ý)",
            start: "Chạy 'npm install' và 'npm start' trong khu vực terminal",
            done: "Bot đã được khởi chạy!"
        },
        cancel: "Hủy",
        confirm: "Tải xuống"
    },
    tour: {
        skip: "Bỏ qua hướng dẫn",
        previous: "Trước",
        next: "Tiếp theo",
        finish: "Hoàn thành",
        steps: {
            load_examples: "Nhập các ví dụ để khám phá Scratch cho Discord!",
            run_test: "Thử nghiệm chức năng của con bot ở đây!",
            export_code: "Xuất code của bạn ở đây!"
        }
    },
    warnings: {
        login_block: "Khối lệnh \"Connect to Discord\" ở mục \"Base\" là bắt buộc phải có."
    },
    run_modal: {
        title: "Nhấn bắt đầu để thử nghiệm con bot!",
        start: "khởi chạy con bot",
        stop: "Dừng con bot lại",
        invalid_token: "Không thể kết nối với Discord ... Có thể mã token của bot không hợp lệ! ",
        error: "Không thể kết nối với Discord ... Hãy thử lại sau! ",
        disabled: "⚠️ Tính năng này chỉ khả dụng khi sử dụng ứng dụng Scratch For Discord (tải xuống {here})",
        here: "tại đây"
    },
    code_modal: {
        title: "JavaScript code của con bot của bạn"
    },
    autosave: {
        title: "Khôi phục một dự án",
        text: "Bạn đã không lưu dự án của mình trước khi thoát khỏi Scratch cho Discord? Không sao, bạn có thể chọn dự án bạn muốn khôi phục từ menu bên dưới! ",
        restore: "Khôi phục",
        cancel: "Hủy"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
