import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit {
  // Datos de presentación
  nombre = 'Guillermo Aliaga';
  titulo = 'Fullstack Developer';
  descripcion = 'Apasionado por crear experiencias web increíbles con Angular y las últimas tecnologías.';

  // URLs
  cvUrl = '#';
  linkedinUrl = '#';
  githubUrl = '#';
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    // Forzar reproducción del video
    if (this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;

      // Asegurar que está silenciado (requerido para autoplay)
      video.muted = true;
      video.playsInline = true;

      // Intentar reproducir
      video.play().catch(error => {
        console.error('Error al reproducir video:', error);

        // Fallback: intentar de nuevo después de interacción del usuario
        document.addEventListener('click', () => {
          video.play().catch(e => console.error('No se pudo reproducir:', e));
        }, { once: true });
      });

      // Log para debug
      video.addEventListener('loadeddata', () => {
        console.log('Video cargado correctamente');
      });

      video.addEventListener('error', (e) => {
        console.error('Error en el video:', e);
      });
    }
  }

  // Método para descargar CV
  descargarCV() {
    console.log('Descargando CV...');
    // Aquí implementaremos la descarga real después
  }

  // Método para ir a contacto
  irAContacto() {
    const contactoSeccion = document.getElementById('contacto');
    contactoSeccion?.scrollIntoView({ behavior: 'smooth' });
  }
}