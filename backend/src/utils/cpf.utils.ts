export function isValidCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');

  if (cleaned.length !== 11 || /^(\d)\1{10}$/.test(cleaned)) {
    return false;
  }

  const calcDigit = (base: string, factor: number) => {
    let sum = 0;
    for (const digit of base) {
      sum += parseInt(digit) * factor--;
    }
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const digit1 = calcDigit(cleaned.slice(0, 9), 10);
  const digit2 = calcDigit(cleaned.slice(0, 9) + digit1, 11);

  return cleaned === cleaned.slice(0, 9) + digit1.toString() + digit2.toString();
}