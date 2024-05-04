// import Typography, { TypographyProps } from "@mui/material/Typography";

export default function Title({ sx, children, ...rest }: any) {
  return (
    <h2
      variant="h2"
      color="primary"
      sx={{ mt: 3, mb: 2, ...sx }}
      {...rest}
    >
      {children}
    </h2>
  );
}
