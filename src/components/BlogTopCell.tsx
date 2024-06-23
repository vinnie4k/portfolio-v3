import Image from "next/image";

interface props {
  link: string;
  imageSrc: any;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export default function BlogTopCell({
  link,
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  date,
  readTime,
}: props) {
  return (
    <a href={link} className="flex flex-col gap-4 animate-opacity">
      {/* Image */}
      <div className="relative h-[320px] rounded-[12px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          placeholder="empty"
          className="object-cover"
          fill
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2">
        <p className="b2 font-medium text-primary-700 dark:text-secondary-300">
          {category}
        </p>
        <h3 className="text-neutral-800 dark:text-neutral-200">{title}</h3>
        <p className="b1 text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
        <div className="flex flex-row gap-4">
          <p className="b2 font-medium text-neutral-800 dark:text-neutral-200">
            {date}
          </p>
          <p className="b2 text-neutral-600 dark:text-neutral-400">
            {readTime}
          </p>
        </div>
      </div>
    </a>
  );
}
