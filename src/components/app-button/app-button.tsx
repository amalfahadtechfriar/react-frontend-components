import { Button } from "antd";
import { MouseEventHandler } from "react";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import styles from "./app-button.module.scss";

interface AppButtonProps {
  size?: "small" | "middle" | "large" | "default" | undefined;
  className?: string;
  handleClick?: MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  iconPosition?: string;
  isLoading?: boolean;
  type?: "default" | "text" | "link" | "primary" | "dashed" | undefined;
}

const AppButton = ({
  type,
  size,
  className,
  handleClick,
  icon,
  text,
  disabled,
  iconPosition,
  isLoading,
}: AppButtonProps) => {
  return (
    <div className={[styles.appButton, className].join(" ")}>
      <Button
        disabled={disabled}
        type={type}
        className={[
          styles.customBtn,
          icon ? "btn-icon" : "",
          iconPosition === "right" ? styles.iconRight : "",
        ].join(" ")}
        size={size as SizeType}
        onClick={handleClick}
        icon={icon}
        loading={isLoading}
      >
        {text}
      </Button>
    </div>
  );
};

export default AppButton;
