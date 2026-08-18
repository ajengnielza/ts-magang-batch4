export function isEmailValid(email: string): boolean {
  return email.includes("@");
}

export function isNilaiValid(nilai: number): boolean {
  return nilai >= 0 && nilai <= 100;
}