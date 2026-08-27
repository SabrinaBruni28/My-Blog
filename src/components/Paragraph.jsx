function Paragraph(props) {
  return (
    <p className="text-lg text-slate-200 leading-7 text-center" {...props}>
      {props.children}
    </p>
  );
}
export default Paragraph;
