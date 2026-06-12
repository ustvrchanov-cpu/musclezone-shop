export function ProductCard({
  name,
  brand,
  price,
  unitPrice,
  data = [],
  badge,
  badgeTone = 'accent',
  image,
  availability,
  onAdd,
  style,
}) {
  return (
    <article className="mz-card" style={style}>
      <div className="mz-card-media">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="mz-placeholder"><span>PACKSHOT</span></div>
        )}
        {badge && (
          <span className={'mz-stamp mz-stamp--' + badgeTone + ' mz-stamp--solid mz-card-badge'}>
            {badge}
          </span>
        )}
      </div>
      <div className="mz-card-body">
        {brand && <span className="mz-card-brand">{brand}</span>}
        <h3 className="mz-card-name">{name}</h3>
        {data.length > 0 && (
          <div className="mz-strip">
            {data.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="mz-strip-dot" aria-hidden="true">·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
        )}
        {availability && (
          <span className="mz-avail">
            <span className="mz-avail-dot" aria-hidden="true"></span>
            {availability}
          </span>
        )}
        <div className="mz-card-footer">
          <div>
            <span className="mz-price">{price}</span>
            {unitPrice && <span className="mz-unit">{unitPrice}</span>}
          </div>
          <button
            type="button"
            className="mz-btn mz-btn--primary mz-btn--icon"
            aria-label={name + ' in den Warenkorb'}
            onClick={onAdd}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
