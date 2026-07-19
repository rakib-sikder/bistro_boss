import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { AuthContext } from "../../userAuthentication/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    return signUp(email, password)
      .then(() => {
        toast.success("Account created — welcome to Bistro Boss!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message || "Couldn't create your account — please try again.");
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <Reveal>
        <Card className="w-full max-w-md rounded-2xl shadow-xl">
          <CardContent>
            <p className="mb-1 text-center text-xs uppercase tracking-[0.3em] text-primary">Join us</p>
            <h2 className="mb-6 text-center text-2xl font-semibold">Create your account</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="username" className="text-neutral-600">Username</Label>
                <Input id="username" type="text" placeholder="Enter your username" {...register("username", { required: true })} />
                {errors.username && <span className="text-xs text-red-600">This field is required</span>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-neutral-600">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" {...register("email", { required: true })} />
                {errors.email && <span className="text-xs text-red-600">This field is required</span>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-neutral-600">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                  })}
                />
                {errors.password && <span className="text-xs text-red-600">This field is required</span>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full rounded-full">
                {isSubmitting ? "Creating account…" : "Sign Up"}
              </Button>
            </form>
            <p className="mt-5 text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-primary hover:underline">
                Login
              </a>
            </p>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
};

export default SignUp;
