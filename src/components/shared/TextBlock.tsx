interface Props {
  heading?: string;
  body: string[];
}

export default function TextBlock({ heading, body }: Props) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 md:max-w-[600px]">
      <h3 className="text-neutral-900 dark:text-neutral-100">{heading}</h3>
      {body.map((text, idx) => (
        <p key={idx} className="b1 text-neutral-600 dark:text-neutral-400">
          {text}
        </p>
      ))}
    </div>
  );
}
