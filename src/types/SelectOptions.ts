export interface SelectOption {
  readonly value: string,
  readonly label: string,
}

export const ageOptions: readonly SelectOption[] = [
  { value: '0-1', label: '0-1 years' },
  { value: '1-2', label: '1-2 years' },
  { value: '2-5', label: '2-5 years' },
  { value: '5+', label: '5+ years' },
];

export const ukraineRegions = [
  'Kyiv Oblast',
  'Kharkiv Oblast',
  'Lviv Oblast',
  'Dnipropetrovsk Oblast',
  'Odessa Oblast',
  'Donetsk Oblast',
  'Zaporizhia Oblast',
  'Ivano-Frankivsk Oblast',
  'Zhytomyr Oblast',
  'Khmelnytskyi Oblast',
  'Chernivtsi Oblast',
  'Mykolaiv Oblast',
  'Vinnytsia Oblast',
  'Ternopil Oblast',
  'Cherkasy Oblast',
  'Sumy Oblast',
  'Rivne Oblast',
  'Chernihiv Oblast',
  'Zakarpattia Oblast',
  'Volyn Oblast',
  'Kirovohrad Oblast',
  'Poltava Oblast',
  'Kherson Oblast',
  'Luhansk Oblast',
];

export const ukraineRegionsOptions: SelectOption[] = ukraineRegions.map((region) => ({
  value: region,
  label: region,
}));

export const defaultOption = {
  value: 'All',
  label: 'All'
}