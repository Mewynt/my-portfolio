import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideLucideAngular } from 'lucide-angular';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // ✅ Lucide correcto sin carpeta /icons
    provideLucideAngular({
      icons: {
        Mail,
        Phone,
        MapPin,
        Github,
        Linkedin,
        Twitter
      }
    })
  ]
};
