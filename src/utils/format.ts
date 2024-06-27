export const formatDate = (date: string | Date) =>
  new Date(date).toLocaleString('es-ES', {
    day: '2-digit',
    year: 'numeric',
    month: '2-digit',
  });
