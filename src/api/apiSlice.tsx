import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pet } from '../types/Pet';
import { PickUpFormFields } from '../types/PickUpForm';
import { ContactForm } from '../types/ContactForm';

export const BASE_API_URL = 'https://pets-home-production.up.railway.app';

const PET_PATH = 'animal_posts';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  tagTypes: ['Pets'],
  endpoints: (builder) => ({
    getPets: builder.query<Pet[], void | string>({
      query: () => PET_PATH,
      providesTags: (result: Pet[] | undefined) => {
        if (result) {
          return [
            ...result.map(({ id }) => ({ type: 'Pets' as const, id })),
            { type: 'Pets', id: 'LIST' },
          ];
        }

        return [{ type: 'Pets', id: 'LIST' }];
      },
    }),
    getFilterPets: builder.query<Pet[], string>({
      query: (searchParams) => `/${PET_PATH}/search?${searchParams}`,
    }),
    getPet: builder.query<Pet, number>({
      query: (petId) => `/${PET_PATH}/${petId}`,
    }),
    addNewPet: builder.mutation<unknown, FormData>({
      query: (initialPost) => ({
        url: PET_PATH,
        method: 'POST',
        body: initialPost,
        formData: true,
      }),
      invalidatesTags: ['Pets'],
    }),
    pickUpRequest: builder.mutation<unknown, PickUpFormFields>({
      query: (data) => ({
        url: `${PET_PATH}/${data.id}/adopt`,
        method: 'POST',
        body: data,
      }),
    }),
    contactUsRequest: builder.mutation<unknown, ContactForm>({
      query: (data) => ({
        url: 'contact_us',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetPetsQuery, useGetPetQuery,
  useGetFilterPetsQuery, useAddNewPetMutation,
  usePickUpRequestMutation, useContactUsRequestMutation,
} = apiSlice;
