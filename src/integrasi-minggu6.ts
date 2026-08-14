interface Peserta {
  id: number;
  nama: string;
  sekolah: string;
  fase: number;
  email: string;
}

interface JurnalHarian {
  id: number;
  pesertaId: number;
  tanggal: string;
  kegiatan: string;
  statusReview: "belum" | "sudah";
}

type PesertaBaru = Omit<Peserta, "id">;
type PesertaUpdate = Partial<Omit<Peserta, "id">>;
type PesertaPublik = Pick<Peserta, "id" | "nama" | "sekolah">;

type JurnalBaru = Omit<JurnalHarian, "id" | "statusReview">;
type JurnalUpdate = Partial<
  Omit<JurnalHarian, "id" | "pesertaId">
>;

type EntityName = "peserta" | "jurnal";

type EventAksi =
  | "created"
  | "updated"
  | "deleted";

type EventName = `${EntityName}:${EventAksi}`;

type EventPayload = {
  "peserta:created": Peserta;

  "peserta:updated": {
    id: number;
    changes: PesertaUpdate;
  };

  "peserta:deleted": {
    id: number;
  };

  "jurnal:created": JurnalHarian;

  "jurnal:updated": {
    id: number;
    changes: JurnalUpdate;
  };

  "jurnal:deleted": {
    id: number;
  };
};

class EventBus {
  private handlers: Partial<
    Record<EventName, Function[]>
  > = {};

  on<E extends EventName>(
    event: E,
    handler: (payload: EventPayload[E]) => void
  ): void {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }

    this.handlers[event]!.push(handler);
  }

  emit<E extends EventName>(
    event: E,
    payload: EventPayload[E]
  ): void {
    const eventHandlers = this.handlers[event];

    if (!eventHandlers) {
      return;
    }

    eventHandlers.forEach((handler) => {
      handler(payload);
    });
  }
}

const bus = new EventBus();

bus.on("peserta:created", (peserta) => {
  console.log(
    `Peserta baru: ${peserta.nama} dari ${peserta.sekolah}`
  );
});

bus.on("peserta:updated", (data) => {
  console.log(
    `Peserta dengan ID ${data.id} diupdate:`,
    data.changes
  );
});

bus.on("peserta:deleted", (data) => {
  console.log(
    `Peserta dengan ID ${data.id} dihapus`
  );
});

bus.on("jurnal:created", (jurnal) => {
  console.log(
    `Jurnal baru untuk peserta ${jurnal.pesertaId}: ${jurnal.kegiatan}`
  );
});

bus.on("jurnal:updated", (data) => {
  console.log(
    `Jurnal ${data.id} diupdate:`,
    data.changes
  );
});

bus.on("jurnal:deleted", (data) => {
  console.log(
    `Jurnal dengan ID ${data.id} dihapus`
  );
});

bus.emit("peserta:created", {
  id: 1,
  nama: "Ajeng",
  sekolah: "SMK 6 Malang",
  fase: 1,
  email: "ajeng@mail.com"
});

bus.emit("peserta:updated", {
  id: 1,
  changes: {
    fase: 2
  }
});

bus.emit("peserta:deleted", {
  id: 1
});

bus.emit("jurnal:created", {
  id: 10,
  pesertaId: 1,
  tanggal: "2026-08-14",
  kegiatan: "Mempelajari Template Literal Types",
  statusReview: "belum"
});

bus.emit("jurnal:updated", {
  id: 10,
  changes: {
    statusReview: "sudah"
  }
});

bus.emit("jurnal:deleted", {
  id: 10
});

type IsListResponse<T> =
  T extends Array<infer U>
    ? {
        items: U[];
        total: number;
      }
    : {
        item: T;
      };

type PesertaListResponse =
  IsListResponse<Peserta[]>;

type PesertaSingleResponse =
  IsListResponse<Peserta>;

const daftarPeserta: PesertaListResponse = {
  items: [
    {
      id: 1,
      nama: "Ajeng",
      sekolah: "SMK 6 Malang",
      fase: 1,
      email: "ajeng@mail.com"
    },
    {
      id: 2,
      nama: "saida",
      sekolah: "SMK 6 Malang",
      fase: 2,
      email: "saida@mail.com"
    }
  ],
  total: 2
};

const satuPeserta: PesertaSingleResponse = {
  item: {
    id: 1,
    nama: "Ajeng",
    sekolah: "SMK 6 Malang",
    fase: 1,
    email: "ajeng@mail.com"
  }
};

type Getters<T> = {
  [K in keyof T as
    `get${Capitalize<string & K>}`]: () => T[K];
};

type PesertaGetters = Getters<Peserta>;

const pesertaGetters: PesertaGetters = {
  getId: () => 1,
  getNama: () => "Ajeng",
  getSekolah: () => "SMK 6 Malang",
  getFase: () => 1,
  getEmail: () => "ajeng@mail.com"
};

type NamaBesar = Uppercase<"ajeng">;
type NamaKecil = Lowercase<"AJENG">;
type NamaKapital = Capitalize<"ajeng">;
type NamaTidakKapital = Uncapitalize<"Ajeng">;

console.log(
  "Daftar peserta:",
  daftarPeserta
);

console.log(
  "Satu peserta:",
  satuPeserta
);

console.log(
  "Getter nama:",
  pesertaGetters.getNama()
);