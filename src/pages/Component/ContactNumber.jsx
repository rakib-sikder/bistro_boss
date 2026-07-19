import { Reveal } from "@/components/motion/Reveal";

const ContactNumber = () => {
  return (
    <Reveal className="mx-auto my-20 bg-neutral-900 px-4 py-16 text-center text-white">
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">We&apos;re here to help</p>
      <p className="text-2xl font-semibold">
        Call Us: <span className="text-primary">+88 0192345678910</span>
      </p>
    </Reveal>
  );
};

export default ContactNumber;
