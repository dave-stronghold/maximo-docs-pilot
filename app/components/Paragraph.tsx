

export default function Paragraph({ children, ...rest }:any) {
  return (
    <p paragraph {...rest}>
      {children}
    </p>
  );
}
