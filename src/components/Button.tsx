
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
