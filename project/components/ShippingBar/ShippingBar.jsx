export function ShippingBar({ current = 0, threshold = 49 }) {
  const fmt = (n) =>
    n.toLocaleString('de-AT', { style: 'currency', currency: 'EUR' });
  const remaining = Math.max(0, threshold - current);
  const pct = Math.min(100, Math.round((current / threshold) * 100));
  const done = remaining <= 0;

  return (
    <div className="mz-bar" role="status">
      <span className={done ? 'mz-bar-label mz-bar-label--done' : 'mz-bar-label'}>
        {done ? (
          <>Gratisversand gesichert <strong>✓</strong></>
        ) : (
          <>Noch <strong>{fmt(remaining)}</strong> bis Gratisversand</>
        )}
      </span>
      <div className="mz-bar-track">
        <div
          className={done ? 'mz-bar-fill mz-bar-fill--done' : 'mz-bar-fill'}
          style={{ width: pct + '%' }}
        ></div>
      </div>
    </div>
  );
}
