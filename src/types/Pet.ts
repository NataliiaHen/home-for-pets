export type AnimalType = 'CAT' | 'DOG';
export type GenderType = 'male' | 'female';
export type AgeType = '0-1' | '1-2' | '2-5' | '5+';

export interface Pet {
  ownerName: string;
  ownerContactPhone: string;
  name: string;
  age: AgeType;
  animalType: AnimalType;
  gender: GenderType;
  location: string;
  description: string;
  postImages: [
    {
      data: string | null | File;
    },
  ];
}

export interface Filters {
  age: AgeType;
  animalType: AnimalType;
  gender: GenderType;
  location: string;
}
