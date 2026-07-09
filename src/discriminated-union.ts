type PaymentStatus =
  | { status: "menunggu"; expiredAt: string }
  | { status: "berhasil"; transactionId: string; paidAt: string }
  | { status: "gagal"; reason: string; canRetry: boolean }
  | { status: "refund"; amount: number; processedAt: string };

function getStatusLabel(payment: PaymentStatus): string {
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

const p1: PaymentStatus = {
  status: "menunggu",
  expiredAt: "15 Juli 2026"
};

const p2: PaymentStatus = {
  status: "berhasil",
  transactionId: "TRX001",
  paidAt: "9 Juli 2026"
};

const p3: PaymentStatus = {
  status: "gagal",
  reason: "Saldo tidak cukup",
  canRetry: true
};

const p4: PaymentStatus = {
  status: "refund",
  amount: 100000,
  processedAt: "9 Juli 2026"
};

console.log("\n--- Status Payment ---");
console.log(getStatusLabel(p1));
console.log(getStatusLabel(p2));
console.log(getStatusLabel(p3));
console.log(getStatusLabel(p4));

type Notification =
  | { type: "info"; message: string }
  | { type: "warning"; message: string; action: string }
  | { type: "error"; message: string; code: number; canDismiss: boolean }
  | { type: "success"; message: string; duration: number };

function showNotification(notif: Notification): void {
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


const notifInfo: Notification = {
  type: "info",
  message: "Data berhasil dimuat"
};

const notifWarning: Notification = {
  type: "warning",
  message: "Baterai hampir habis",
  action: "Isi daya"
};

const notifError: Notification = {
  type: "error",
  message: "Server Error",
  code: 500,
  canDismiss: true
};

const notifSuccess: Notification = {
  type: "success",
  message: "Data berhasil disimpan",
  duration: 5
};

showNotification(notifInfo);
showNotification(notifWarning);
showNotification(notifError);
showNotification(notifSuccess);

type CLICommand =
  | { command: "add"; item: string }
  | { command: "remove"; id: number }
  | { command: "list"; filter?: string }
  | { command: "clear" };

function assertNever(x: never): never {
  throw new Error("Case tidak tertangani");
}

function executeCommand(cmd: CLICommand): string {
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