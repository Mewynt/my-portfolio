import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interfaz para el formulario de contacto
interface FormularioContacto {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  // Señal para controlar el estado de envío
  enviando = signal(false);
  mensajeEnviado = signal(false);

  // Modelo del formulario (datos del usuario)
  formulario: FormularioContacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  // Información de contacto
  informacionContacto = [
    {
      icono: '📧',
      titulo: 'Email',
      valor: 'tu@email.com',
      link: 'mailto:tu@email.com'
    },
    {
      icono: '📱',
      titulo: 'Teléfono',
      valor: '+51 999 999 999',
      link: 'tel:+51999999999'
    },
    {
      icono: '📍',
      titulo: 'Ubicación',
      valor: 'Lima, Perú',
      link: 'https://maps.google.com/?q=Lima,Peru'
    },
    {
      icono: '💼',
      titulo: 'LinkedIn',
      valor: 'linkedin.com/in/tuusuario',
      link: 'https://linkedin.com/in/tuusuario'
    }
  ];

  // Redes sociales del footer
  redesSociales = [
    {
      icono: '🐦',
      url: 'https://twitter.com/tuusuario'
    },
    {
      icono: '💼',
      url: 'https://linkedin.com/in/tuusuario'
    },
    {
      icono: '🖥️',
      url: 'https://github.com/tuusuario'
    },
    {
      icono: '📸',
      url: 'https://instagram.com/tuusuario'
    }
  ];

  // Método para validar email
  validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Método para verificar si el formulario es válido
  formularioValido(): boolean {
    return (
      this.formulario.nombre.trim().length > 0 &&
      this.formulario.email.trim().length > 0 &&
      this.validarEmail(this.formulario.email) &&
      this.formulario.asunto.trim().length > 0 &&
      this.formulario.mensaje.trim().length > 10
    );
  }

  // Método para enviar el formulario
  async enviarFormulario() {
    if (!this.formularioValido()) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Activar estado de envío
    this.enviando.set(true);

    try {
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mostrar datos en consola (solo para desarrollo)
      console.log('Formulario enviado:', this.formulario);

      // Marcar como enviado
      this.mensajeEnviado.set(true);

      // Limpiar formulario
      this.limpiarFormulario();

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        this.mensajeEnviado.set(false);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      // Desactivar estado de envío
      this.enviando.set(false);
    }
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.formulario = {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    };
  }

  // Método para abrir link externo
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
