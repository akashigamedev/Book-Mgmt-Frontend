import { Field, Formik, Form } from "formik";
import loginValidation from "../validation";
import handleLogin from "../services/HandleLogin";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    emailId: "",
    password: "",
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[60%]">
        <img src="./books_illustration.jpg" className="size-full rounded-2xl" />
      </div>
      <div className="w-[40%] flex justify-center items-center bg-(--surface-bg-primary)">
        <div>
          <div className="flex flex-col items-center text-center">
            <h1>Admin Panel Login</h1>
            <h6 className="text-(--text-secondary)">
              Secure access to book inventory and system controls
            </h6>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={(v) => handleLogin(v.emailId, v.password, navigate)}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-4 mt-10 h-full">
                <div className="flex flex-col gap-2">
                  {errors.emailId && touched.emailId ? (
                    <span className="text-(--sb-valencia-bg-active) font-medium!">
                      {errors.emailId}
                    </span>
                  ) : null}
                  <label htmlFor="emailId" className="font-medium!">
                    Email ID
                  </label>
                  <Field
                    name="emailId"
                    type="text"
                    placeholder="you@company.com"
                    className="py-3 px-4 bg-(--surface-bg-secondary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {errors.password && touched.password ? (
                    <span className="text-(--sb-valencia-bg-active) font-medium!">
                      {errors.password}
                    </span>
                  ) : null}
                  <label htmlFor="password" className="font-medium!">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="you@company.com"
                    className="py-3 px-4 bg-(--surface-bg-secondary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-lg bg-(--sb-ocean-bg-active) font-bold! mt-2"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p className="text-center mt-5 text-(--text-secondary) font-medium!">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
