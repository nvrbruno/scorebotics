export function parseDate(dateStr: string): Date {
  const parts = dateStr.split('/').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    throw new Error(`Invalid date format: expected DD/MM/YYYY, got "${dateStr}"`);
  }
  const [day, month, year] = parts;
  const date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: "${dateStr}"`);
  }
  return date;
}