const PrimaryButton = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`gap-4 px-8 py-2 h-[48px] flex items-center justify-center rounded-sm text-base font-semibold leading-[130%] text-white bg-primary hover:translate-x-1 hover:-translate-y-1 duration-200 ease-in-out transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
