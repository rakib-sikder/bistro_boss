import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MapPin, Phone, Clock } from "lucide-react";

import PageBanner from "../shared/Component/PageBanner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import img from "../../assets/home/chef-service.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success("Message sent — we'll get back to you soon!");
    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Bistro boss | Contact Us</title>
      </Helmet>
      <PageBanner img={img} header={"Contact Us"} textDetails={"We'd love to hear from you"} />

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2">
        <Reveal className="space-y-6">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">Get in touch</p>
            <h2 className="text-2xl font-semibold uppercase tracking-wide">Visit or reach out</h2>
          </div>
          <div className="flex items-start gap-3 text-sm text-neutral-600">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            123 ABS Street, Uni 21, Bangladesh
          </div>
          <div className="flex items-start gap-3 text-sm text-neutral-600">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
            +88 123456789
          </div>
          <div className="flex items-start gap-3 text-sm text-neutral-600">
            <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
            <div>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" {...register("name", { required: true })} />
              {errors.name && <span className="text-xs text-red-600">This field is required</span>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register("email", { required: true })} />
              {errors.email && <span className="text-xs text-red-600">This field is required</span>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} placeholder="How can we help?" {...register("message", { required: true })} />
              {errors.message && <span className="text-xs text-red-600">This field is required</span>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-full">
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
