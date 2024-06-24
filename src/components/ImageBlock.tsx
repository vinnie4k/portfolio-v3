interface props {
  imageSrc: any;
  imageAlt: string;
  imageStyle?: string;
  caption?: string;
}

export default function ImageBlock({
  imageSrc,
  imageAlt,
  imageStyle,
  caption,
}: props) {
  return (
    <div className="flex flex-col gap-3">
      <img src={imageSrc.src} alt={imageAlt} className={imageStyle} />
      {caption && (
        <p className="b2 text-neutral-600 dark:text-neutral-400 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
