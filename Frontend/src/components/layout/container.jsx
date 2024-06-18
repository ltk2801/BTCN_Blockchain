const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-[1300px] ${className && className}`}>
      {children}
    </div>
  );
};

export default Container;
