interface props {
  icon: any;
  title: string;
  description: string;
}

export default function WorkFeatureCell({ icon, title, description }: props) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-secondary-500 dark:bg-primary-800 rounded-[24px] animate-hover-up">
      <div className="flex flex-row gap-4 items-center">
        {icon}
        <h4 className="text-neutral-900 dark:text-neutral-100">{title}</h4>
      </div>
      <p className="b1 text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
}
