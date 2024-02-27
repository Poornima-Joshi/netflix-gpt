export const checkSignUpData = (name,email,password) => {
  const errors = [];

  if (!name.trim()) errors.push({ field: 'name', message: "Name cannot be empty." });
  if (name.length < 2) errors.push({ field: 'name', message: "Name must contain at least 2 characters" });
  
  // Email validation
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  if (!isEmailValid) errors.push({ field: 'email', message: "Please enter a valid email address" });

  // Password validation
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!password.trim()) errors.push({ field: 'password', message: "Password cannot be empty." });
  if (!isPasswordValid) errors.push({ field: 'password', message: "Password must contain at least [8 characters,1 digit,1 lowercase,1 uppercase,1 special character]" });

  return errors.length > 0 ? errors : null;
};

export const checkSignInData = (email,password) => {
  const errors = [];
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  if (!isEmailValid) errors.push({ field: 'email', message: "Please enter a valid email address" });

  // Password validation
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!password.trim()) errors.push({ field: 'password', message: "Password cannot be empty." });
  if (!isPasswordValid) errors.push({ field: 'password', message: "Password must contain at least [8 characters,1 digit,1 lowercase,1 uppercase,1 special character]" });

  return errors.length > 0 ? errors : null;
};