import type { Presentation } from "@/types/presentation";

export const presentations: Presentation[] = [
  {
    title: "Gestión de Inventario",
    description: "Control detallado de medicamentos y materiales descartables",
    features: [
      "Registro completo de medicamentos con fechas de vencimiento",
      "Control de materiales descartables y su disponibilidad",
      "Alertas automáticas de stock bajo o próximo a vencer",
    ],
  },
  {
    title: "Verificaciones y controles",
    description: "Seguimiento de todas las verificaciones realizadas",
    features: [
      "Programación de verificaciones periódicas",
      "Historial completo de controles realizados",
      "Registro de responsables y acciones tomadas",
    ],
  },
  {
    title: "Seguriddad y Trazabilidad",
    description: "Control de acceso y seguimiento de cambios",
    features: [
      "Control de precintos para garantizar la integridad",
      "Registro de todos los cambios realizados",
      "Diferentes niveles de acceso según rol del usuario",
    ],
  },
  {
    title: "Sistema de Alertas",
    description: "Notificaciones automáticas para prevenir problemas",
    features: [
      "Alertas de medicamentos próximos a vencer",
      "Recordatorios de verificaciones pendientes",
      "Notificaciones de cambios en los carros",
    ],
  },
  {
    title: "Reportes y Estadísticas",
    description: "Análisis detallado para la toma de decisiones",
    features: [
      "Reportes personalizados por servicio o período",
      "Estadísticas de uso y verificaciones",
      "Exportación de datos en múltiples formtatos",
    ],
  },
  {
    title: "Acceso en Tiempo Real",
    description: "Información actualizada desde cualquier dispositivo",
    features: [
      "Acceso desde computadoras, tablets y smartphones",
      "Interfaz adaptada a diferentes dispositivos",
      "Sincronización automática de datos",
    ],
  },
];
