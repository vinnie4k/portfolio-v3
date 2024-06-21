import Image from "next/image";

interface props {
  icon: any;
  iconAlt: string;
  title: string;
  description: string;
}

export default function WorkFeatureCell({
  icon,
  iconAlt,
  title,
  description,
}: props) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-secondary-500 rounded-[24px]">
      <div className="flex flex-row gap-4 items-center">
        <Image src={icon} alt={iconAlt} width={36} />
        <h4 className="text-neutral-900">{title}</h4>
      </div>
      <p className="b1 text-neutral-600">{description}</p>
    </div>
  );
}
