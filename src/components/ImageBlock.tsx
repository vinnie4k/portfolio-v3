import Image from "next/image";

interface props {
  imageSrc: any;
  imageAlt: string;
  caption?: string;
}

export default function ImageBlock({ imageSrc, imageAlt, caption }: props) {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={imageSrc}
        alt={imageAlt}
        placeholder="empty"
        className="object-contain"
      />
      {caption && (
        <p className="b2 text-neutral-600 dark:text-neutral-400 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
