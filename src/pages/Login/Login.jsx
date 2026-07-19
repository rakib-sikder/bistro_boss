import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { toast } from "sonner";

import { AuthContext } from "../../userAuthentication/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setSubmitting(true);
    signIn(email, password)
      .then(() => {
        toast.success("Welcome back!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message || "Couldn't sign you in — check your details and try again.");
      })
      .finally(() => setSubmitting(false));
  };

  const captchaRef = useRef(null);
  const captchaVerify = () => {
    const value = captchaRef.current.value;
    setDisable(!validateCaptcha(value));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <Reveal className="flex w-full max-w-4xl flex-col items-center gap-16 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Welcome back</p>
          <h1 className="text-4xl font-semibold">Login now!</h1>
          <p className="max-w-sm py-4 text-neutral-500">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <Card className="w-full max-w-sm shrink-0 rounded-2xl shadow-xl">
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-medium text-neutral-500">Email</Label>
                <Input id="email" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-xs font-medium text-neutral-500">Password</Label>
                <Input id="password" type="password" name="password" placeholder="Password" required />
              </div>
              <div className="space-y-1.5">
                <LoadCanvasTemplate />
                <Input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  onBlur={captchaVerify}
                  placeholder="Type the captcha above"
                />
              </div>
              <Button
                type="submit"
                disabled={disable || submitting}
                className="mt-4 w-full rounded-full"
              >
                {submitting ? "Signing in…" : "Login"}
              </Button>
              <div>
                <a className="text-sm text-neutral-500 hover:text-primary hover:underline">Forgot password?</a>
              </div>
            </form>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
};

export default Login;
