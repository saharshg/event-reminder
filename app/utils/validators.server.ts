export const validatePhone = (phone: string): string | undefined => {
  var validRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  if (!phone.length || !validRegex.test(phone)) {
    return "Please enter a valid phone number";
  }
};

export const validatePassword = (password: string): string | undefined => {
  if (password.length < 5) {
    return "Please enter a password that is at least 5 characters long";
  }
};

export const validateName = (name: string): string | undefined => {
  if (!name.length) return `Please enter a value`;
};
