db = db.getSiblingDB('mydatabase');

db.places.insertMany([
  {
    name: 'Luxury Car',
    description: 'Brand new luxury car for sale',
    id: '1',
    formattedAddress: 'ehiue iuuie1',
    rating: 5,
    price: 100000,
    photos: ['https://example.com/car1.jpg', 'https://example.com/car2.jpg'],
    location: { lat: 40.7128, lng: -74.0060 },
  },
  {
    name: 'Modern Apartment',
    description: 'Spacious apartment with a beautiful view',
    id: '2',
    formattedAddress: 'ehiue iuuie2',
    rating: 4.5,
    price: 1500,
    photos: ['https://example.com/apartment1.jpg', 'https://example.com/apartment2.jpg'],
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    name: 'Mountain Bike',
    description: 'High-performance mountain bike',
    id: '3',
    formattedAddress: 'ehiue iuuie3',
    rating: 2,
    price: 800,
    photos: ['https://example.com/bike1.jpg', 'https://example.com/bike2.jpg'],
    location: { lat: 39.5501, lng: -105.7821 },
  },
  {
    name: 'Cozy Coffee Shop',
    description: 'Quaint coffee shop in the heart of the city',
    id: '4',
    formattedAddress: 'ehiue iuuie4',
    rating: 1.2,
    price: 20,
    photos: ['https://example.com/coffee1.jpg', 'https://example.com/coffee2.jpg'],
    location: { lat: 51.5074, lng: -0.1278 },
  },
]);
