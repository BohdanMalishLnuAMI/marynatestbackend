import mongoose, { Schema } from "mongoose";

export interface IAd {
  name: string;
  description: string;
  price: number;
  location: {
    latitude: number;
    longitude: number;
  };
  photos: string[];
}

export const adSchema: Schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  location: {
    latitude: Number,
    longitude: Number,
  },
  photos: [String], // Масив рядків для збереження посилань на фото
});
