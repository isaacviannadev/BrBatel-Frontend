const Currency = (
  value: number,
  currency: string,
  local: string,
): string =>
  new Intl.NumberFormat(local, { style: 'currency', currency }).format(value);

export default Currency;
