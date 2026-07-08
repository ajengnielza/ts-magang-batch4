// SOAL 1

type TextContent = {
    type: "text";
    content: string;
};

type ImageContent = {
    type: "image";
    url: string;
    alt: string;
};

type VideoContent = {
    type: "video";
    url: string;
    durasi: number;
};

type Content = TextContent | ImageContent | VideoContent;

function renderContent(content: Content): string {
  if (content.type === "text") {
    return `Text: ${content.content}`;
  } else if (content.type === "image") {
    return `Image: ${content.url}, Alt: ${content.alt}`;
  } else {
    return `Video: ${content.url}, Durasi: ${content.durasi} detik`;
  }
}

const artikel: Content = {
  type: "text",
  content: "Belajar TypeScript"
};

const vlog: Content = {
  type: "video",
  url: "https://vlog-adayinmylife.com",
  durasi: 120,
};

console.log("\n--- Keterangan Konten ---");
console.log(renderContent(vlog));
console.log(renderContent(artikel));

//SOAL 2

interface HasNama{
    nama: string;
}
interface HasEmail{
    email: string;
}

interface HasTelepon{
    Telepon: string;
}

type KontakLengkap = HasNama & HasEmail & HasTelepon;
type KontakMinimal = HasNama & HasEmail;

function kirimNotifikasi(
  kontak: KontakMinimal,
  pesan: string
): void {
  console.log(`Mengirim email ke ${kontak.email}`);
  console.log(`Pesan: ${pesan}`);
}

function kirimWhatsApp(
  kontak: KontakLengkap,
  pesan: string
): void {
  console.log("\n--- Keterangan Notifikasi WhatsApp Dan Email ---");
  console.log(`Mengirim WA ke ${kontak.Telepon}`);
  console.log(`Pesan: ${pesan}`);
}

const ajeng: KontakLengkap = {
  nama: "Ajeng",
  email: "ajeng@gmail.com",
  Telepon: "08123456789"
};

const saida: KontakMinimal = {
  nama: "Saida",
  email: "saida@gmail.com"
};

kirimWhatsApp(ajeng, "Halo");
kirimNotifikasi(saida, "Selamat datang di kelas TypeScript!");

//SOAL 3

type WithLoading<T> = T & {
    isLoading: boolean;
    error: string | null;
};

type UserState = WithLoading<{
    user: {
        nama: string;
        email: string;
    } | null;
}>;

type ProductState = WithLoading<{
    products: {
        id: number;
        nama: string;
    }[];
}>;

const userState: UserState = {
  user: {
    nama: "Ajeng",
    email: "ajeng@gmail.com"
  },
  isLoading: false,
  error: null
};

const productState: ProductState = {
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