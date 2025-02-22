//hook
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// //compnnets
// import { useToast } from "@/components/ui/use-toast";
// import { cn } from "@/lib/utils";

//redux
import { useSignUpMutation } from "@redux/services/auth";

//asset
import logo from "@/assets/logo.png";
import { SignUpPayload } from "@interfaces/auth";

const initForm: SignUpPayload = {
  email: "",
  name: "",
  password: "",
  avatar: null,
};

const SignUp = () => {
  const navigate = useNavigate();
  // const { toast } = useToast();

  const [form, setForm] = useState<SignUpPayload>(initForm);

  const [Register, { isLoading }] = useSignUpMutation();

  const handleChangeForm = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    try {
      const result = await Register(form).unwrap();

      if (result) {
        // toast({
        //   className: cn(
        //     "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        //   ),
        //   title: "Register",
        //   description: "SignUp successfully, please Login",
        //   duration: 3000,
        // });
      }
    } catch (e) {
      // toast({
      //   className: cn(
      //     "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      //   ),
      //   title: "Register Fail",
      //   description: "Some thing went wrong, please try again",
      //   duration: 3000,
      //   variant: "destructive",
      // });
      console.log(e);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          Quản lý nhà xe
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Đăng ký
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  value={form.email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={(e) => {
                    handleChangeForm("email", e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  User Name
                </label>
                <input
                  value={form.name}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Username"
                  onChange={(e) => {
                    handleChangeForm("name", e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  value={form.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    handleChangeForm("password", e.target.value);
                  }}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Avatar
                </label>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e: any) => {
                    handleChangeForm("avatar", e.target.files[0]);
                  }}
                />
              </div>

              <button
                disabled={isLoading}
                onClick={handleRegister}
                className="w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
