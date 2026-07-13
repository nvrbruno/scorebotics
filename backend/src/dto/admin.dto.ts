// shape expected when creating a Admin
export interface CreateAdminDTO {
  name: string;
  email: string;
  password: string;
}

// shape expected when updating a Admin (all fields optional)
export interface UpdateAdminDTO {
  name?: string;
  email?: string;
}

// shape expected when updating a Admin password
export interface UpdateAdminPasswordDTO {
  currentPassword: string;
  newPassword: string;
}

// shape returned by the API
export interface AdminResponseDTO {
  id:string   
  name: string;
  email: string;
}