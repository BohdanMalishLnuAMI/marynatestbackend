import mongoose from 'mongoose';
import { IAd, adSchema } from './interfaces';

const Ad = mongoose.model<IAd>('Ad', adSchema);

export const getAllAds = async (): Promise<IAd[]> => {
  return Ad.find().exec();
};

export const getAdById = async (adId: string): Promise<IAd | null> => {
  return Ad.findById(adId).exec();
};

export const createAd = async (name: string, description: string, price: number, location: { latitude: number, longitude: number }, photos: string[]): Promise<IAd> => {
  const ad = new Ad({ name, description, price, location, photos });
  return ad.save();
};

export const updateAd = async (adId: string, updateData: Partial<IAd>): Promise<IAd | null> => {
  return Ad.findByIdAndUpdate(adId, updateData, { new: true }).exec();
};

export const deleteAd = async (adId: string): Promise<void> => {
  await Ad.findByIdAndDelete(adId).exec();
};
