function HighlightPreviewCard({ feature }) {
  return (
    <div className={`${feature.bodyStyle} mt-8`}>
      <div>
        <h2 className={`${feature.titleStyle}`}>{feature.title}</h2>
        <p className={`${feature.paragraphStyle}`}>{feature.paragraph}</p>
      </div>
      <img
        src={feature.image}
        alt=""
        className="w-60 mt-5 h-50 ml-auto rounded-br-[20px]"
        // width={9}
      />
    </div>
  );
}

export default HighlightPreviewCard;
