export function DataStrip({ items = [] }) {
  return (
    <div className="mz-strip">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="mz-strip-dot" aria-hidden="true">·</span>}
          <span>{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
