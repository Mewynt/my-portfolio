import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para definir la estructura de un proyecto
interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  categoria: 'web' | 'mobile' | 'fullstack';
  githubUrl?: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  // Categoría seleccionada (signal reactivo)
  categoriaSeleccionada = signal<string>('todas');

  // Lista de categorías disponibles
  categorias = [
    { id: 'todas', nombre: 'Todas' },
    { id: 'web', nombre: 'Web' },
    { id: 'mobile', nombre: 'Mobile' },
    { id: 'fullstack', nombre: 'Full Stack' }
  ];

  // Lista de proyectos (datos mockeados)
  proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: 'E-Commerce Platform',
      descripcion: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
      imagen: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tecnologias: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      categoria: 'fullstack',
      githubUrl: 'https://github.com/usuario/proyecto1',
      demoUrl: 'https://demo.proyecto1.com'
    },
    {
      id: 2,
      titulo: 'Task Manager App',
      descripcion: 'Aplicación de gestión de tareas con drag & drop, notificaciones y colaboración en tiempo real.',
      imagen: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      tecnologias: ['React', 'Firebase', 'Tailwind'],
      categoria: 'web',
      githubUrl: 'https://github.com/usuario/proyecto2',
      demoUrl: 'https://demo.proyecto2.com'
    },
    {
      id: 3,
      titulo: 'Fitness Tracker',
      descripcion: 'App móvil para seguimiento de ejercicios, nutrición y objetivos de fitness con gráficos interactivos.',
      imagen: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
      tecnologias: ['React Native', 'Express', 'PostgreSQL'],
      categoria: 'mobile',
      githubUrl: 'https://github.com/usuario/proyecto3'
    },
    {
      id: 4,
      titulo: 'Portfolio CMS',
      descripcion: 'Sistema de gestión de contenidos para portafolios con editor visual y temas personalizables.',
      imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tecnologias: ['Vue.js', 'Laravel', 'MySQL'],
      categoria: 'fullstack',
      githubUrl: 'https://github.com/usuario/proyecto4',
      demoUrl: 'https://demo.proyecto4.com'
    },
    {
      id: 5,
      titulo: 'Weather Dashboard',
      descripcion: 'Dashboard del clima con pronósticos, mapas interactivos y alertas meteorológicas.',
      imagen: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      tecnologias: ['Angular', 'TypeScript', 'OpenWeather API'],
      categoria: 'web',
      githubUrl: 'https://github.com/usuario/proyecto5',
      demoUrl: 'https://demo.proyecto5.com'
    },
    {
      id: 6,
      titulo: 'Social Media App',
      descripcion: 'Red social con posts, comentarios, likes, mensajería privada y notificaciones en tiempo real.',
      imagen: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tecnologias: ['React', 'Node.js', 'Socket.io', 'Redis'],
      categoria: 'fullstack',
      githubUrl: 'https://github.com/usuario/proyecto6',
      demoUrl: 'https://demo.proyecto6.com'
    }
  ];

  // Signal computado: proyectos filtrados según categoría seleccionada
  proyectosFiltrados = computed(() => {
    const categoria = this.categoriaSeleccionada();

    if (categoria === 'todas') {
      return this.proyectos;
    }

    return this.proyectos.filter(p => p.categoria === categoria);
  });

  // Método para cambiar la categoría seleccionada
  seleccionarCategoria(categoriaId: string) {
    this.categoriaSeleccionada.set(categoriaId);
  }

  // Método para abrir URL en nueva pestaña
  abrirUrl(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}