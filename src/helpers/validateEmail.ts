export function validateEmail(email: string): boolean {
  const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!pattern.test(email)) {
    return false;
  }
  return true;
}
