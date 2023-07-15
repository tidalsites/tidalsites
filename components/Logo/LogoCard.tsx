import { FC } from "react";
import styles from "../../styles/LogoCard.module.scss";
import Image from "next/image";

const logoSize = "150";

interface LogoCardProps {
  title: string;
  alt: string;
  src: any;
  color?: string;
}

export const LogoCard: FC<LogoCardProps> = ({ title, alt, src, color }) => {
  const { card, card_title, img } = styles;
  return (
    <div className={card}>
      <p
        style={color ? { backgroundColor: color } : null}
        className={card_title}
      >
        {title}
      </p>
      <div className={img}>
        <Image height={logoSize} width={logoSize} src={src} alt={alt} />
      </div>
    </div>
  );
};
