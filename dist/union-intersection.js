"use strict";
// SOAL 1
Object.defineProperty(exports, "__esModule", { value: true });
function renderContent(content) {
    if (content.type === "text") {
        return `Text: ${content.content}`;
    }
    else if (content.type === "image") {
        return `Image: ${content.url}, Alt: ${content.alt}`;
    }
    else {
        return `Video: ${content.url}, Durasi: ${content.durasi} detik`;
    }
}
const artikel = {
    type: "text",
    content: "Belajar TypeScript"
};
const vlog = {
    type: "video",
    url: "https://vlog-adayinmylife.com",
    durasi: 120,
};
console.log("\n--- Keterangan Konten ---");
console.log(renderContent(vlog));
console.log(renderContent(artikel));
function kirimNotifikasi(kontak, pesan) {
    console.log(`Mengirim email ke ${kontak.email}`);
    console.log(`Pesan: ${pesan}`);
}
function kirimWhatsApp(kontak, pesan) {
    console.log("\n--- Keterangan Notifikasi WhatsApp Dan Email ---");
    console.log(`Mengirim WA ke ${kontak.Telepon}`);
    console.log(`Pesan: ${pesan}`);
}
const ajeng = {
    nama: "Ajeng",
    email: "ajeng@gmail.com",
    Telepon: "08123456789"
};
const saida = {
    nama: "Saida",
    email: "saida@gmail.com"
};
kirimWhatsApp(ajeng, "Halo");
kirimNotifikasi(saida, "Selamat datang di kelas TypeScript!");
const userState = {
    user: {
        nama: "Ajeng",
        email: "ajeng@gmail.com"
    },
    isLoading: false,
    error: null
};
const productState = {
    products: [
        {
            id: 1,
            nama: "Laptop"
        },
        {
            id: 2,
            nama: "Mouse"
        }
    ],
    isLoading: false,
    error: null
};
console.log("\n--- Keterangan User dan Produk ---");
console.log(userState);
console.log(productState);
//# sourceMappingURL=union-intersection.js.map