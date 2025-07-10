import { ResultModel } from "../models/result-schema.js";

export const saveResult = async (req, res) => {
  try {
    const result = await ResultModel.create(req.body);
    res.status(200).json({ message: "Result saved successfully", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getResults = async (req, res) => {
  try {
    const results = await ResultModel.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
