interface Props {
  link: string;
  imageSrc: any;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export default function BlogExploreCell({
  link,
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  date,
  readTime,
}: Props) {
  return (
    <a
      href={link}
      className="flex flex-col gap-4 md:items-center md:gap-6 md:flex-row animate-opacity"
    >
      {/* Image */}
      <img
        src={imageSrc.src}
        alt={imageAlt}
        className="h-[200px] md:h-[160px] md:w-[240px] lg:h-[240px] lg:w-[360px] rounded-[12px] md:rounded-[16px] object-cover"
      />

      {/* Details */}
      <div className="flex flex-col gap-2 lg:gap-3">
        <p className="label text-primary-700 dark:text-secondary-300">
          {category}
        </p>
        <h3 className="text-neutral-800 dark:text-neutral-200">{title}</h3>
        <p className="b1 text-neutral-700 dark:text-neutral-300 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-row gap-4">
          <p className="label text-neutral-800 dark:text-neutral-200">{date}</p>
          <p className="label text-neutral-600 dark:text-neutral-400">
            {readTime}
          </p>
        </div>
      </div>
    </a>
  );
}
