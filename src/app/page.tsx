import WorkCell from "@/components/WorkCell";
import { Project } from "@/constants";

export default function Work() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col mx-auto gap-6 lg:gap-8 text-center md:w-[513px] lg:w-[683px]">
        <div className="flex flex-col gap-1">
          <h1 className="text-neutral-900 dark:text-neutral-100">
            Hi. I'm Vin.
          </h1>
          <h1 className="text-neutral-900 dark:text-neutral-100">
            Developer & Engineer.
          </h1>
        </div>
        <p className="s2 text-neutral-600 dark:text-neutral-400">
          A driven creator and technologist, constantly seeking to elevate user
          experiences through innovative solutions and cutting-edge development.
        </p>
      </div>

      {/* Work */}
      <div className="flex flex-col gap-8 md:gap-12">
        <WorkCell project={Project.Announcements} />
        <WorkCell project={Project.Uplift} />
        <WorkCell project={Project.Status} />
        <WorkCell project={Project.Grabbit} />
        <WorkCell project={Project.Volume} />
        <WorkCell project={Project.Scribbly} />
      </div>
    </>
  );
}
