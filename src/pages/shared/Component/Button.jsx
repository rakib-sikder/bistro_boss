const Button = ({ btnText, ...props }) => {
  return (
    <button
      className="mt-6 rounded-full border-2 border-primary px-6 py-2.5 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      {...props}
    >
      {btnText}
    </button>
  );
};

export default Button;
