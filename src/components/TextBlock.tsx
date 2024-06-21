interface props {
  heading?: string;
  body: string[];
}

export default function TextBlock({ heading, body }: props) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-neutral-900">{heading}</h3>
      {body.map((text, idx) => (
        <p key={idx} className="b1 text-neutral-600">
          {text}
        </p>
      ))}
    </div>
  );
}
