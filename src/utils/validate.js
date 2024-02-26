export const checkValidData = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!name.trim()) return "Name cannot be empty.";
  if (name.length < 2) return "Name must contain at least 2 chararcters";
  // Email validation
  if (!isEmailValid) return "Please enter a valid email address";

  // password validation
  if (!password.trim()) return "Password cannot be empty.";
  if (!isPasswordValid)
    return "Password must contain at least [8 characters,1 digit,1 lowercase,1 uppercase,1 special character]";

  return null;
};
