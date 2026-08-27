function Button(props) {
  return (
    <button
      className="bg-slate-800 hover:bg-slate-500 p-2 rounded-md text-white"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
