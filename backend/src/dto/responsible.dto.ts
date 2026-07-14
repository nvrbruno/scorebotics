// shape expected when creating a Responsible
export interface CreateResponsibleDTO {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  birthDate: Date;
  password: string;
}

// shape expected when updating a Responsible (all fields optional)
export interface UpdateResponsibleDTO {
  name?: string;
  cpf?: string;
  email?: string;
  phone?: string;
  birthDate?: Date;
}

// shape expected when updating a Responsible password
export interface UpdateResponsiblePasswordDTO {
  currentPassword: string;
  newPassword: string;
}

// shape returned by the API
export interface ResponsibleResponseDTO {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string | null;
  birthDate: Date | null;
}