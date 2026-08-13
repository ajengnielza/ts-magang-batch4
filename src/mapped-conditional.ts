// SOAL 1 — Mapped type dasar

interface JurnalHarian {
  id: number;
  pesertaId: number;
  tanggal: string;
  kegiatan: string;
  hambatan: string;
  rencanaBesok: string;
  linkCommit: string;
  statusReview: string;
}

type SemuaOptional<T> = {
  [K in keyof T]?: T[K];
};

type JurnalOpsional = SemuaOptional<JurnalHarian>;

const jurnal: JurnalOpsional = {
  kegiatan: "Belajar Mapped Type",
  tanggal: "13-08-2026"
};

console.log("Soal 1:", jurnal);


// SOAL 2 — Mapped type dengan transformasi

interface Peserta {
  nama: string;
  fase: number;
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type PesertaNullable = Nullable<Peserta>;

const peserta: PesertaNullable = {
  nama: null,
  fase: 1
};

console.log("Soal 2:", peserta);


// SOAL 3 — Mapped type dengan rename

type DenganSetter<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]:
    (value: T[K]) => void;
};

type PesertaSetter = DenganSetter<Peserta>;

const pesertaSetter: PesertaSetter = {
  setNama: (value) => {
    console.log("Nama diubah menjadi:", value);
  },

  setFase: (value) => {
    console.log("Fase diubah menjadi:", value);
  }
};

pesertaSetter.setNama("Budi");
pesertaSetter.setFase(2);


// SOAL 4 — Conditional type

type TipeNilai<T> =
  T extends number ? "angka" :
  T extends string ? "teks" :
  T extends boolean ? "boolean" :
  "lainnya";

type NilaiNumber = TipeNilai<number>;
type NilaiString = TipeNilai<string>;
type NilaiBoolean = TipeNilai<boolean>;
type NilaiArray = TipeNilai<string[]>;

const hasilTipe: {
  number: NilaiNumber;
  string: NilaiString;
  boolean: NilaiBoolean;
  array: NilaiArray;
} = {
  number: "angka",
  string: "teks",
  boolean: "boolean",
  array: "lainnya"
};

console.log("Soal 4:", hasilTipe);


// SOAL 5 — Conditional dengan infer

type UnwrapPromise<T> =
  T extends Promise<infer U>
    ? U
    : T;

type HasilString = UnwrapPromise<Promise<string>>;
type HasilNumber = UnwrapPromise<Promise<number>>;
type HasilBukanPromise = UnwrapPromise<number>;

const hasilUnwrap: {
  promiseString: HasilString;
  promiseNumber: HasilNumber;
  bukanPromise: HasilBukanPromise;
} = {
  promiseString: "Belajar TypeScript",
  promiseNumber: 100,
  bukanPromise: 200
};

console.log("Soal 5:", hasilUnwrap);