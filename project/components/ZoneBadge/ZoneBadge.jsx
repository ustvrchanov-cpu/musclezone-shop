export function ZoneBadge({
  children = 'Zone',
  tone = 'accent',
  solid = false,
  rotate = 0,
}) {
  const cls = [
    'mz-stamp',
    'mz-stamp--' + tone,
    solid ? 'mz-stamp--solid' : '',
  ].filter(Boolean).join(' ');

  return (
    <span
      className={cls}
      style={rotate ? { transform: 'rotate(' + rotate + 'deg)' } : undefined}
    >
      {children}
    </span>
  );
}
