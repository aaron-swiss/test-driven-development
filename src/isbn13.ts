export function isValid(isbn: string): boolean {
  if (isbn.length !== 13 || !/^\d+$/.test(isbn) || /^0+$/.test(isbn)) {
    return false;
  }
  
  let sum = 0;
  
  for (let i = 0; i < 12; i++) {
    const number = Number(isbn[i]);
  
    if (i % 2 === 0) {
      sum += number;
    } else {
      sum += number * 3;
    }
  }
  
  const calculatednumber = (10 - (sum % 10)) % 10;
  
  const lastnumber = Number(isbn[12]);
  
  return calculatednumber === lastnumber;
}