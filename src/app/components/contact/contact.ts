import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
  mensajeError = signal(false);
  currentYear = new Date().getFullYear();

  // Configuración de EmailJS
  // IMPORTANTE: Reemplaza estos valores con tus credenciales reales de EmailJS
  private readonly EMAILJS_CONFIG = {
    serviceId: 'service_642mbuf',      // Ve a "Email Services" y copia el Service ID
    templateId: 'template_ozuw7oq',         // Nombre de tu template (o template_xxxxxxxx)
    publicKey: 'mghWsIsF-GoBhjY72'        // Ve a "Account" > "General" > copia tu Public Key
  };

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
      valor: 'guillermoaliagamatencio@gmail.com',
      link: 'mailto:guillermoaliagamatencio@gmail.com'
    },
    {
      icono: '📱',
      titulo: 'Phone',
      valor: '+51 915 012 301',
      link: 'tel:+51915012301'
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
      valor: 'linkedin.com/in/guillermo-aliaga-matencio',
      link: 'https://www.linkedin.com/in/guillermo-aliaga-matencio/'
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
      this.formulario.mensaje.trim().length >= 10
    );
  }

  // Método para enviar el formulario con EmailJS
  async enviarFormulario() {
    if (!this.formularioValido()) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Activar estado de envío
    this.enviando.set(true);
    this.mensajeError.set(false);

    try {
      // Preparar los parámetros del template
      const templateParams = {
        from_name: this.formulario.nombre,
        from_email: this.formulario.email,
        reply_to: this.formulario.email,
        subject: this.formulario.asunto,
        message: this.formulario.mensaje,
        to_name: 'Guillermo',
      };

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        this.EMAILJS_CONFIG.serviceId,
        this.EMAILJS_CONFIG.templateId,
        templateParams,
        this.EMAILJS_CONFIG.publicKey
      );

      console.log('Email enviado exitosamente:', response);

      // Marcar como enviado
      this.mensajeEnviado.set(true);

      // Limpiar formulario
      this.limpiarFormulario();

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        this.mensajeEnviado.set(false);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar email:', error);
      this.mensajeError.set(true);

      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        this.mensajeError.set(false);
      }, 5000);
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