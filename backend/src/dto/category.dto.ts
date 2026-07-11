// shape expected when creating a category
export interface CreateCategoryDTO {
  eventId: string;
  name: string;
  description?: string;
}

// shape expected when updating a category (all fields optional)
export interface UpdateCategoryDTO {
  eventId?: string;
  name?: string;
  description?: string;
}

// shape returned by the API
export interface CategoryResponseDTO {
  id:string;
  eventId: string;
  name: string;
  description?:  string | null;
}
