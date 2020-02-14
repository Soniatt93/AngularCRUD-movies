import { MatCardImage } from '@angular/material/card';

export interface Movie {
    id: number;
    title: string;
    genres: string;
    year: number;
    synopsis: string;
    image: MatCardImage;
  }