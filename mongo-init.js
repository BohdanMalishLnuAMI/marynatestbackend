db = db.getSiblingDB('mydatabase'); // Вказуємо назву бази даних

db.ads.insertMany([
  {
    name: 'Luxury Car',
    description: 'Brand new luxury car for sale',
    price: 100000,
    location: { latitude: 40.7128, longitude: -74.0060 }, // Це широта та довгота для Нью-Йорка
    photos: ['https://example.com/car1.jpg', 'https://example.com/car2.jpg'],
  },
  {
    name: 'Modern Apartment',
    description: 'Spacious apartment with a beautiful view',
    price: 1500,
    location: { latitude: 34.0522, longitude: -118.2437 }, // Це широта та довгота для Лос-Анджелеса
    photos: ['https://example.com/apartment1.jpg', 'https://example.com/apartment2.jpg'],
  },
  {
    name: 'Mountain Bike',
    description: 'High-performance mountain bike',
    price: 800,
    location: { latitude: 39.5501, longitude: -105.7821 }, // Це широта та довгота для Денвера
    photos: ['https://example.com/bike1.jpg', 'https://example.com/bike2.jpg'],
  },
  {
    name: 'Cozy Coffee Shop',
    description: 'Quaint coffee shop in the heart of the city',
    price: 20,
    location: { latitude: 51.5074, longitude: -0.1278 }, // Це широта та довгота для Лондона
    photos: ['https://example.com/coffee1.jpg', 'https://example.com/coffee2.jpg'],
  },
  // Додайте інші дані, які вам потрібні
]);
