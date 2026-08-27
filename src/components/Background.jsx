function Background(props) {
  return (
    <div className="w-full min-h-screen bg-red-200" {...props}>
      {props.children}
    </div>
  );
}
export default Background;
