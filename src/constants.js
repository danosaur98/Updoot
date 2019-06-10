import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])

export const SPONSORED = [
  {
    id: 'american',
    name: 'Best Burgers',
    phoneNumber: '602-555-0116',
    address1: '62 Chapel Lane',
    address2: 'Deland, FL 32720',
    rating: 4.4,
    numReviews: 12,
    foodType: 'American',
    cost: '$'
  },
]
export const RESTAURANTS = [
  {
    id: 'mexican',
    name: 'La Mesa',
    phoneNumber: '202-555-0127',
    address1: '713 Fordham Dr.',
    address2: 'Middle Village, NY 11379',
    rating: 4.5,
    numReviews: 200,
    foodType: 'Mexican',
    cost: '$'
  },
  {
    id: 'chinese',
    name: 'King Wok',
    phoneNumber: '603-555-0150',
    address1: '8438 West Wellington St.',
    address2: 'Norcross, GA 30092',
    rating: 4.2,
    numReviews: 99,
    foodType: 'Chinese',
    cost: '$$'
  },
  {
    id: 'italian',
    name: 'The Cal Zone',
    phoneNumber: '601-555-0139',
    address1: '8621 Division Avenue',
    address2: 'Savage, MN 55378',
    rating: 3.9,
    numReviews: 42,
    foodType: 'Italian',
    cost: '$$$'
  },
]

export const ME_FILENAME = 'me.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'
