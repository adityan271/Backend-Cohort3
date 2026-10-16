export async function register(req, res) {
  const { email, phone, password } = req.body;

  const errors = [];

  if (!email) {
    errors.push({
      field: "email",
      message: "Email is required",
    });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email && !emailRegex.test(email)) {
    errors.push({
      field: "email",
      message: "Invalid Email Address",
    });
  }

  if (!phone) {
    errors.push({
      field: "phone",
      message: "Phone number is required",
    });
  }

  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

  if (phone && !phoneRegex.test(phone)) {
    errors.push({
      field: "phone",
      message: "Invalid Phone Number",
    });
  }

  if (!password && !password.trim()) {
    errors.push({
      field: "password",
      message: "Password is requires",
    });
  }

  if (!password.trim().length < 6) {
    errors.push({
      field: "password",
      message: "Password must contain minimum 6 characters",
    });
  }


  
}
