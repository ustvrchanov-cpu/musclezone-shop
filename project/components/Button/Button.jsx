export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  ariaLabel,
  children,
}) {
  const cls = [
    'mz-btn',
    'mz-btn--' + variant,
    'mz-btn--' + size,
    fullWidth ? 'mz-btn--block' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
