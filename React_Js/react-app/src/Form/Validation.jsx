import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .matches(/^[A-Z][a-z]*$/, "First letter should be capital")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .matches(/^[A-Z][a-z]*$/, "First letter should be capital")
    .required("Last Name is required"),
  username: Yup.string()
    .required("Username is required")
    .matches(/^\S*$/, "Username should not contain spaces"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("required"),
  // dateOfBirth: Yup.string().required("required"),
});

export default ValidationSchema;
