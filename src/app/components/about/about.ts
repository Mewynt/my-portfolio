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
  descripcionCorta = 'Developer passionate about creating and constantly learning new technologies';

  descripcionLarga: string[] = [`I'm Guillermo Aliaga, a Full Stack Developer from Lima, Peru, focused on creating efficient, maintainable web solutions aligned with business needs.`,

    `I have experience as a Level 2 Technical Support Specialist at Intercorp, Banco Ripley, and Saga Falabella, which allows me to understand how systems operate in production and develop more stable and reliable software`,

    `I work on end-to-end application development, integrating modern frontends, scalable backends, and best practices to deliver robust products from day one.`
  ];

  edad = 19;
  ubicacion = 'Lima, Perú';
  email = 'guillermoaliagamatencio@gmail.com';

  // Experiencia resumida
  experiencia = [
    {
      years: '2+',
      descripcion: 'Years of experience'
    },
    {
      years: '10+',
      descripcion: 'Completed projects'
    },
    {
      years: '5+',
      descripcion: 'Mastered technologies'
    }
  ];

  // Intereses/hobbies
  intereses = [
    '💻 Web Development',
    '🎨 UI/UX Design',
    '📚 Lifelong Learning',
    '🎮 Gaming',
    '🎵 Music',
    '✈️ Traveling',
    '📷 Photography',
    '☕ Specialty Coffee'
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