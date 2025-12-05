import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Habilidad {
  nombre: string;
  nivel: number;
  icono: string;
  color: string;
}

interface CategoriaHabilidades {
  titulo: string;
  icono: string;
  habilidades: Habilidad[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {

  categoriasHabilidades: CategoriaHabilidades[] = [
    {
      titulo: 'Frontend',
      icono: '🎨',
      habilidades: [
        { nombre: 'HTML5 & CSS3', nivel: 95, icono: '📄', color: 'bg-orange-500' },
        { nombre: 'JavaScript', nivel: 90, icono: '⚡', color: 'bg-yellow-500' },
        { nombre: 'TypeScript', nivel: 85, icono: '📘', color: 'bg-blue-500' },
        { nombre: 'Angular', nivel: 88, icono: '🅰️', color: 'bg-red-500' },
        { nombre: 'React', nivel: 80, icono: '⚛️', color: 'bg-cyan-500' },
        { nombre: 'Tailwind CSS', nivel: 92, icono: '💨', color: 'bg-teal-500' }
      ]
    },
    {
      titulo: 'Backend',
      icono: '⚙️',
      habilidades: [
        { nombre: 'Node.js', nivel: 85, icono: '🟢', color: 'bg-green-500' },
        { nombre: 'Express', nivel: 83, icono: '🚂', color: 'bg-gray-600' },
        { nombre: 'Python', nivel: 75, icono: '🐍', color: 'bg-blue-600' },
        { nombre: 'PostgreSQL', nivel: 80, icono: '🐘', color: 'bg-indigo-500' },
        { nombre: 'MongoDB', nivel: 78, icono: '🍃', color: 'bg-green-600' },
        { nombre: 'REST APIs', nivel: 88, icono: '🔌', color: 'bg-purple-500' }
      ]
    },
    {
      titulo: 'Herramientas & Otros',
      icono: '🛠️',
      habilidades: [
        { nombre: 'Git & GitHub', nivel: 90, icono: '📦', color: 'bg-gray-800' },
        { nombre: 'Docker', nivel: 70, icono: '🐳', color: 'bg-blue-400' },
        { nombre: 'AWS', nivel: 65, icono: '☁️', color: 'bg-orange-400' },
        { nombre: 'Figma', nivel: 75, icono: '🎭', color: 'bg-pink-500' },
        { nombre: 'Agile/Scrum', nivel: 82, icono: '🔄', color: 'bg-purple-600' }
      ]
    }
  ];

  softSkills: string[] = [
    '💡 Resolución de problemas',
    '🤝 Trabajo en equipo',
    '📢 Comunicación efectiva',
    '⏱️ Gestión del tiempo',
    '🎯 Atención al detalle',
    '📚 Aprendizaje continuo',
    '🚀 Proactividad',
    '🧩 Pensamiento crítico',
    '🧠 Inteligencia Emocional',
    '🎨 Creatividad'
  ];

  obtenerTextoNivel(nivel: number): string {
    if (nivel >= 90) return 'Experto';
    if (nivel >= 75) return 'Avanzado';
    if (nivel >= 60) return 'Intermedio';
    return 'Básico';
  }

  obtenerAnchoBarraStyle(nivel: number) {
    return {
      '--target-width': `${nivel}%`,
      'width': `${nivel}%`
    };
  }

  // Helpers para separar emoji del texto en la vista
  getEmoji(str: string): string {
    return str.split(' ')[0];
  }

  getText(str: string): string {
    return str.substring(str.indexOf(' ') + 1);
  }
}