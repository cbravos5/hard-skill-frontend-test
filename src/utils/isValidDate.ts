export const isvalidDate = (date: any) =>
  date instanceof Date && !isNaN(Number(date))
    ? true
    : "Deve ser uma data válida";
