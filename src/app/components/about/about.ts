import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {

  // Información personal
  descripcionCorta = 'Desarrollador apasionado por crear soluciones web innovadoras';

  descripcionLarga = `Soy un desarrollador con experiencia en la creación de aplicaciones web modernas y 
  escalables. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer 
  profesionalmente. Mi enfoque está en escribir código limpio, mantenible y eficiente.`;

  edad = 25;
  ubicacion = 'Lima, Perú';
  email = 'guillermoaliagamatencio@gmail.com';

  // Experiencia resumida
  experiencia = [
    {
      years: '2+',
      descripcion: 'Años de experiencia'
    },
    {
      years: '10+',
      descripcion: 'Proyectos completados'
    },
    {
      years: '5+',
      descripcion: 'Tecnologías dominadas'
    }
  ];

  // Intereses/hobbies
  intereses = [
    '💻 Desarrollo Web',
    '🎨 Diseño UI/UX',
    '📚 Aprendizaje continuo',
    '🎮 Gaming',
    '🎵 Música',
    '✈️ Viajar',
    '📷 Fotografía',
    '☕ Café de especialidad'
  ];

  // Helpers para separar emoji del texto (Igual que en Skills)
  getEmoji(str: string): string {
    return str.split(' ')[0];
  }

  getText(str: string): string {
    return str.substring(str.indexOf(' ') + 1);
  }
  imageError = false
}