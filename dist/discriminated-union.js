"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStatusLabel(payment) {
    switch (payment.status) {
        case "menunggu":
            return `Pembayaran menunggu hingga ${payment.expiredAt}`;
        case "berhasil":
            return `Pembayaran berhasil. ID: ${payment.transactionId}`;
        case "gagal":
            return `Pembayaran gagal. Alasan: ${payment.reason}`;
        case "refund":
            return `Refund sebesar Rp${payment.amount} telah diproses pada ${payment.processedAt}`;
    }
}
const p1 = {
    status: "menunggu",
    expiredAt: "15 Juli 2026"
};
const p2 = {
    status: "berhasil",
    transactionId: "TRX001",
    paidAt: "9 Juli 2026"
};
const p3 = {
    status: "gagal",
    reason: "Saldo tidak cukup",
    canRetry: true
};
const p4 = {
    status: "refund",
    amount: 100000,
    processedAt: "9 Juli 2026"
};
console.log("\n--- Status Payment ---");
console.log(getStatusLabel(p1));
console.log(getStatusLabel(p2));
console.log(getStatusLabel(p3));
console.log(getStatusLabel(p4));
function showNotification(notif) {
    switch (notif.type) {
        case "info":
            console.log("\n--- Keterangan Notifikasi ---");
            console.log(`INFO: ${notif.message}`);
            break;
        case "warning":
            console.log(`WARNING: ${notif.message}`);
            console.log(`Aksi: ${notif.action}`);
            break;
        case "error":
            console.log(`ERROR ${notif.code}: ${notif.message}`);
            console.log(`Bisa ditutup: ${notif.canDismiss}`);
            break;
        case "success":
            console.log(`SUCCESS: ${notif.message}`);
            console.log(`Durasi: ${notif.duration} detik`);
            break;
    }
}
const notifInfo = {
    type: "info",
    message: "Data berhasil dimuat"
};
const notifWarning = {
    type: "warning",
    message: "Baterai hampir habis",
    action: "Isi daya"
};
const notifError = {
    type: "error",
    message: "Server Error",
    code: 500,
    canDismiss: true
};
const notifSuccess = {
    type: "success",
    message: "Data berhasil disimpan",
    duration: 5
};
showNotification(notifInfo);
showNotification(notifWarning);
showNotification(notifError);
showNotification(notifSuccess);
function assertNever(x) {
    throw new Error("Case tidak tertangani");
}
function executeCommand(cmd) {
    switch (cmd.command) {
        case "add":
            return `Menambahkan item: ${cmd.item}`;
        case "remove":
            return `Menghapus item dengan ID ${cmd.id}`;
        case "list":
            return cmd.filter
                ? `Menampilkan daftar dengan filter: ${cmd.filter}`
                : "Menampilkan semua item";
        case "clear":
            return "Semua item berhasil dihapus";
        default:
            return assertNever(cmd);
    }
}
console.log("\n--- Keterangan Command ---");
console.log(executeCommand({
    command: "add",
    item: "Laptop"
}));
console.log(executeCommand({
    command: "remove",
    id: 5
}));
console.log(executeCommand({
    command: "list"
}));
console.log(executeCommand({
    command: "list",
    filter: "Elektronik"
}));
console.log(executeCommand({
    command: "clear"
}));
//# sourceMappingURL=discriminated-union.js.map