const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}
    className='
    bg-blue-700 
    text-white 
    hover:text-amber-300 
    hover:bg-white 
      font-medium px-4'>
      {children}
    </button>
  );
};

export default Button;