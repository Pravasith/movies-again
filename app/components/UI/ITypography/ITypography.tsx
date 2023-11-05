import { Typography } from "@mui/material";
import { TypographyVariants, ITypographyProps } from "./interface";
import styles from "./ITypography.module.scss";

const ITypography: React.FC<ITypographyProps> = ({
  type = TypographyVariants.P,
  children,
  className,
}: ITypographyProps) => {
  return (
    // Passing children instead of a string because
    // devs might wanna pass other UI components
    <div className={styles.typographyClasses}>
      <Typography variant={type} className={className}>
        {children}
      </Typography>
    </div>
  );
};

export default ITypography;
