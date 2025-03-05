const TransparentButton = ({ name }: { name: string }) => {
  return (
    <button className="group m-2 cursor-pointer rounded-lg bg-none text-2xl transition">
      {name}
      <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
    </button>
  );
};

export default TransparentButton;
