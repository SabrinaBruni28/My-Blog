function Paragraph(props) {
  return (
    <p className="text-base text-slate-200 leading-7 text-center" {...props}>
      {props.children}
    </p>
  );
}
export default Paragraph;