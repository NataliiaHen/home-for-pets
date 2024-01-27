import { client } from '../helpers/fetchClient';
import { ContactForm } from '../types/ContactForm';
import { Pet } from '../types/Pet';
import { PickUpFormFields } from '../types/PickUpForm';

// export const BASE_API_URL
//   = 'https://pets-home-e9b90f16b6b9.herokuapp.com';
// export const productsURL
//   = 'products.json';

export const petsURL
  = 'animal_posts';

export function getPets() {
  return client.get<Pet[]>(petsURL);
}

export const addPet = (data: FormData) => {
  return client.post<Pet>(petsURL, data);
};

export const contactUsRequest = (data: ContactForm) => {
  return client.post('contact_us', data);
};

export const pickUpRequest = (data: PickUpFormFields) => {
  return client.post('animal_posts/1/adopt', data);
};

// export function getPhones() {
//   return getProducts()
//     .then(newProducts => newProducts
//       .filter(product => product.category === 'phones'));
// }

// export function getTablets() {
//   return getProducts()
//     .then(newProducts => newProducts
//       .filter(product => product.category === 'tablet'));
// }

// export function getAccessories() {
//   return getProducts()
//     .then(newProducts => newProducts
//       .filter(product => product.category === 'accessory'));
// }

// export function getHotPriceProducts() {
//   return getProducts()
//     .then(newProducts => newProducts
//       .sort((product1, product2) => getSale(product2) - getSale(product1))
//       .slice(0, 20));
// }

// export function getBrandNewProducts() {
//   return getProducts()
//     .then(newProducts => newProducts
//       .sort((product1, product2) => product2.fullPrice - product1.fullPrice)
//       .slice(0, 20));
// }

// export function getProductDetails(productId: string) {
//   return getFromServer<PhoneDetails>(`${phoneDetailsURL}/${productId}.json`);
// }

// export function getSuggestedProducts() {
//   return getProducts()
//     .then(productsArray => productsArray.sort(() => Math.random() - 0.5)
//       .slice(0, 20));
// }
