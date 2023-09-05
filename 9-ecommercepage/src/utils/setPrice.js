export const setPrice = (num) => {
  {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(num);
  }
};
