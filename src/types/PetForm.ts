import { AgeType, AnimalType, GenderType } from './Pet';

export interface PetFormData {
  post: {
    ownerName: string;
    ownerContactPhone: string;
    name: string;
    age: AgeType;
    animalType: AnimalType;
    gender: GenderType;
    location: string;
    description: string;
  };
  images: (File | null)[];
}
