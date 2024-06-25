export default function FooterMessage() {
  return (
    <div className="flex flex-col mx-auto gap-4 text-center w-[320px] md:w-[540px] lg:w-[600px]">
      <h2 className="text-neutral-900 dark:text-neutral-100">
        Let's turn your ideas
        <br />
        into reality!
      </h2>
      <p className="s2 text-neutral-600 dark:text-neutral-400">
        Unleash our creativity and make something extraordinary happen.{" "}
        <span className="animate-underline underline-offset-[4px] hover:underline-offset-[6px] cursor-pointer">
          <a href="mailto:b.vinhan01@gmail.com">Send me a message</a>
        </span>{" "}
        and let's explore the possibilities.
      </p>
    </div>
  );
}
