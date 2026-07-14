export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length !== 10 && cleaned.length !== 11) {
    return false;
  }

  const ddd = parseInt(cleaned.slice(0, 2));
  if (ddd < 11 || ddd > 99) {
    return false;
  }

  if (cleaned.length === 11 && cleaned[2] !== '9') {
    return false;
  }

  return true;
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
}