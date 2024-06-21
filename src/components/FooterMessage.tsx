export default function FooterMessage() {
  return (
    <div className="flex flex-col mx-auto gap-4 text-center w-[320px]">
      <h2 className="text-neutral-900">Let's turn your ideas into reality.</h2>
      <p className="s2 text-neutral-600">
        Unleash our creativity and make something extraordinary happen.{" "}
        <span className="animate-underline underline-offset-[4px] hover:underline-offset-[6px] cursor-pointer">
          Send me a message
        </span>{" "}
        and let's explore the possibilities.
      </p>
    </div>
  );
}
