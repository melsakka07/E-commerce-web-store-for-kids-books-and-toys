interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading,
  icon,
  className,
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-full transform transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-pink-400 text-white hover:bg-pink-500 hover:scale-105 hover:shadow-lg",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105",
    outline: "border-2 border-pink-400 text-pink-400 hover:bg-pink-50 hover:scale-105"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} 
        ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
      ) : (
        <>
          {icon && <span className="w-5 h-5">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}; 