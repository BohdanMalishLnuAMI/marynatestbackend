import { Request, Response } from 'express';
import { getAllAds, getAdById, createAd, updateAd, deleteAd } from '../services/adService';

export const getAllAdsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const ads = await getAllAds();
    res.json(ads);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdByIdController = async (req: Request, res: Response): Promise<void> => {
  const adId = req.params.id;

  try {
    const ad = await getAdById(adId);
    if (ad) {
      res.json(ad);
    } else {
      res.status(404).json({ message: 'Ad not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const createAdController = async (req: Request, res: Response): Promise<void> => {
  const { name, description, price, location, photos } = req.body;

  try {
    const newAd = await createAd(name, description, price, { latitude: location.latitude, longitude: location.longitude }, photos);
    res.status(201).json(newAd);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateAdController = async (req: Request, res: Response): Promise<void> => {
  const adId = req.params.id;
  const updateData = req.body;

  try {
    const updatedAd = await updateAd(adId, updateData);
    if (updatedAd) {
      res.json(updatedAd);
    } else {
      res.status(404).json({ message: 'Ad not found' });
    }
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAdController = async (req: Request, res: Response): Promise<void> => {
  const adId = req.params.id;

  try {
    await deleteAd(adId);
    res.json({ message: 'Ad deleted successfully' });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
