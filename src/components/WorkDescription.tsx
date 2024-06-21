interface props {
  roles: string[];
  timeline: string[];
  frontend: string[];
  backend: string[];
}

export default function WorkDescription({
  roles,
  timeline,
  frontend,
  backend,
}: props) {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-row gap-8">
        {/* Role */}
        <div className="flex flex-col gap-2 w-[136px]">
          <p className="label text-neutral-600">ROLE</p>
          <div>
            {roles.map((text, idx) => (
              <p key={idx} className="b1 font-medium">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-2 w-[136px]">
          <p className="label text-neutral-600">TIMELINE</p>
          <div>
            {timeline.map((text, idx) => (
              <p key={idx} className="b1 font-medium">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        {/* Frontend */}
        <div className="flex flex-col gap-2 w-[136px]">
          <p className="label text-neutral-600">FRONTEND</p>
          <div>
            {frontend.map((text, idx) => (
              <p key={idx} className="b1 font-medium">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col gap-2 w-[136px]">
          <p className="label text-neutral-600">BACKEND</p>
          <div>
            {backend.map((text, idx) => (
              <p key={idx} className="b1 font-medium">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
