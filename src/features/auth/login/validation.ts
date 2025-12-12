import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  emailId: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password required"),
});

export default loginValidation;
