import Image from "next/image";

interface props {
  icon: any;
  title: string;
  description: string;
}

export default function WorkFeatureCell({ icon, title, description }: props) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-secondary-500 rounded-[24px] animate-up animate-opacity-r">
      <div className="flex flex-row gap-4 items-center">
        {icon}
        <h4 className="text-neutral-900">{title}</h4>
      </div>
      <p className="b1 text-neutral-600">{description}</p>
    </div>
  );
}
