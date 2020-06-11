import { AuthState } from './auth/types';
import { ProductState } from './product/types';

// RootState Interface
export interface RootState {
  product: ProductState;
  auth: AuthState;
}

// Model Interface
export interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: number;
  created_at: Date;
  updated_at: Date;
}

export interface Role {
  id: number;
  name: String;
  description: String;
  type: String;
}
