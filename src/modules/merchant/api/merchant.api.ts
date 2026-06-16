import api from "@/core/api/core.js";
import type { Merchant } from "../types/merchant.types";

export const getMerchants = async (): Promise<Merchant[]> => {
  const { data } = await api.get<Merchant[]>("/merchant");

  return data;
};
