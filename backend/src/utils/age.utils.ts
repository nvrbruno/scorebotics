export function calculateAge(birthDate: Date, referenceDate: Date = new Date()): number {
  let age = referenceDate.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    referenceDate.getMonth() > birthDate.getMonth() ||
    (referenceDate.getMonth() === birthDate.getMonth() &&
      referenceDate.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}

export function isAtLeastAge(birthDate: Date, minAge: number = 18): boolean {
  return calculateAge(birthDate) >= minAge;
}

export function isValidBirthDate(birthDate: Date, maxAge: number = 120): boolean {
  const now = new Date();

  if (birthDate > now) {
    return false;
  }

  const age = calculateAge(birthDate, now);
  return age <= maxAge;
}