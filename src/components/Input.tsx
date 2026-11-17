
import "./Input.css";

type InputProps = {
  state?: "Default" | "Focus" | "Filled" | "Error" | "Disabled";
  label: string;
  value: string;
  helper?: string;
  onChange: (value: string) => void;
};

export function Input({
  state = "Default",
  label,
  value,
  helper,
  onChange,
}: InputProps) {
  const isDisabled = state === "Disabled";

  return (
    <div className={`input-field input-field--${state.toLowerCase()}`}>
      <label className="input-field__label">
        {label}
      </label>

      <input
        className="input-field__control"
        type="text"
        value={value}
        disabled={isDisabled}
        aria-invalid={state === "Error"}
        onChange={(event) => onChange(event.target.value)}
      />

      {helper && (
        <span className="input-field__helper">
          {helper}
        </span>
      )}
    </div>
  );
}
