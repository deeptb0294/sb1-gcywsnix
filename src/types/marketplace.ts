export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  previewUrl: string;
  downloadUrl: string;
  category: 'template' | 'preset' | 'project';
}

export interface PurchaseRecord {
  itemId: string;
  transactionId: string;
  purchaseDate: Date;
  userId: string;
}