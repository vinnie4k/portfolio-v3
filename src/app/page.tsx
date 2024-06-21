import WorkCell from "@/components/WorkCell";
import { Project } from "@/constants";

export default function Work() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col gap-6 text-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-neutral-900">Hi. I'm Vin.</h1>
          <h1 className="text-neutral-900">Developer & Engineer.</h1>
        </div>
        <p className="s2 text-neutral-600">
          A driven creator and technologist, constantly seeking to elevate user
          experiences through innovative solutions and cutting-edge development.
        </p>
      </div>

      {/* Work */}
      <div className="flex flex-col gap-8">
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
