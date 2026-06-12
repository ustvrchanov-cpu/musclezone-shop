export function Input({
  id,
  label,
  type = 'text',
  placeholder,
  hint,
  error,
  value,
  onChange,
  required = false,
  autoComplete,
}) {
  const hintId = hint ? id + '-hint' : undefined;
  const errorId = error ? id + '-error' : undefined;

  return (
    <div className="mz-field">
      {label && (
        <label className="mz-label" htmlFor={id}>
          {label}{required ? ' *' : ''}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={error ? 'mz-input mz-input--error' : 'mz-input'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId || hintId}
      />
      {error ? (
        <span className="mz-error" id={errorId}>{error}</span>
      ) : hint ? (
        <span className="mz-hint" id={hintId}>{hint}</span>
      ) : null}
    </div>
  );
}
