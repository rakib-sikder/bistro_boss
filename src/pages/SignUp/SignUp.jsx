import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../userAuthentication/AuthProvider";

const SignUp = () => {
    const {signUp}= useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const onSubmit = (data) => {
    const { username, email, password } = data;
    signUp(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed up successfully:", user);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });}
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <p className="text-xs tracking-[0.3em] uppercase text-[#d3502a] mb-1 text-center">Join us</p>
        <h2 className="text-2xl font-semibold mb-6 text-center">Create your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1.5">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d3502a]/30 focus:border-[#d3502a]"
              placeholder="Enter your username"

            />
            {errors.username && <span className="text-xs text-red-600">This field is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1.5">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d3502a]/30 focus:border-[#d3502a]"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-xs text-red-600">This field is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1.5">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d3502a]/30 focus:border-[#d3502a]"
              placeholder="Enter your password"
              {...register("password", { minLength: 6 , maxLength: 20, required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/ })}
            />
            {errors.password && <span className="text-xs text-red-600">This field is required</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#d3502a] text-white py-2.5 rounded-full font-medium hover:bg-[#b8451f] transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-5 text-sm text-center text-neutral-500">
          Already have an account?{" "}
          <a href="/login" className="text-[#d3502a] hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
