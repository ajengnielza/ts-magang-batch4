//Static property

class SprintTask {
    private static totalTask: number = 0;

     constructor(public namaTask: string) {
    SprintTask.totalTask++;
  }

    static getTotalTask() : number{
        return SprintTask.totalTask;
    }
}

const task1 = new SprintTask("Login");
const task2 = new SprintTask("Register");
const task3 = new SprintTask("Dashboard");
const task4 = new SprintTask("Profile");
const task5 = new SprintTask("Logout");

console.log("Total Task :", SprintTask.getTotalTask());

// Static Readonly
class AppConfig {
  static readonly APP_NAME: string = "https://api.nawasena.com";
  static readonly VERSION: string = "1.0.0";
  static readonly MAX_PESERTA: number = 4;

  static getInfo(): string {
    return `
    APP NAME: ${AppConfig.APP_NAME}
    VERSION : ${AppConfig.VERSION}
    MAX PESERTA: ${AppConfig.MAX_PESERTA}; `
  }
}

console.log("Info :", AppConfig.getInfo());

// Static factory
class Nilai {
  private constructor(private nilai: number) {}

  static buat(nilai: number): Nilai | null {
    if (nilai < 0 || nilai > 100) {
      return null;
    }

    return new Nilai(nilai);
  }

  getNilai(): number {
    return this.nilai;
  }
}

const nilai1 = Nilai.buat(98);
const nilai2 = Nilai.buat(120);


if (nilai1) {
  console.log("Nilai 1:", nilai1.getNilai());
} else {
  console.log("Nilai 1 gagal dibuat");
}

if (nilai2) {
  console.log("Nilai 2:", nilai2.getNilai());
} else {
  console.log("Nilai 2 gagal dibuat");
};


// Static utility
class StringHelper {
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static slugify(str: string): string {
    return str.toLowerCase().replace(/\s+/g, "-");
  }

  static truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str;
    }

    return str.slice(0, maxLength) + "...";
  }
}


console.log(StringHelper.capitalize("ajeng"));
console.log(StringHelper.slugify("Belajar Static Typescript"));
console.log(
  StringHelper.truncate(
    "Belajar Materi Typescript Static",
    15
  )
);