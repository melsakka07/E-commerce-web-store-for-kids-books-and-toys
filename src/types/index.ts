export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error'; 