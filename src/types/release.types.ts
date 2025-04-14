export interface Episode {
  id: string;
  name: string;
  ordinal: number;
  duration: number;
  preview: {
    src: string;
    thumbnail: string;
  };
  hls_720: string;
} 