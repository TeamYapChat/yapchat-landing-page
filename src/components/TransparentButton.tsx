const TransparentButton = ( {name}: {name: string}) => {
    return (
        <button className="group bg-none rounded-lg m-2 cursor-pointer hover:bg-gray-400/20 active:bg-gray-400/40 transition">
            {name}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </button>
    );
};

export default TransparentButton;