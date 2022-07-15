import axios from 'axios';
import { IProduct } from '../../app/interfaces';
import { URL_BASE } from '../../app/share';

export async function apiGetTop10Products(): Promise<IProduct[]> {
  const { data } = await axios.get(`${URL_BASE}/products?limit=10`);
  return data;
}

export async function apiGetProduct(id: string): Promise<IProduct> {
  const { data } = await axios.get(`${URL_BASE}/products/${id}`);
  return data;
}
