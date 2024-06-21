import Image from "next/image";
import headshotImg from "../../../public/about/headshot.png";
import ExperienceCell from "@/components/ExperienceCell";
import { Experience } from "@/constants";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-12">
        {/* Image */}
        <div className="relative h-[266px] rounded-[16px] overflow-hidden">
          <Image
            src={headshotImg}
            alt="Headshot of Vin Bui"
            objectFit="cover"
            placeholder="blur"
            fill
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3">
          <h3 className="text-neutral-800">
            I'm a Full-stack Developer from Dallas, Texas.
          </h3>
          <p className="b1 text-neutral-600">
            I'm a senior at Cornell University, studying Information Science,
            Systems, and Technology with a focus on interactive technologies and
            UX design. I'm passionate about leveraging technology to create
            intuitive and impactful solutions. At Cornell, I've collaborated on
            a variety of projects that have reinforced my belief in the power of
            software to address real-world challenges.
          </p>
          <p className="b1 text-neutral-600">
            When I'm not coding, you can find me outside enjoying nature –
            hiking, camping, fishing, or stargazing! I'm also a big fan of
            basketball, tennis, and fitness.
          </p>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-4">
          <ExperienceCell experience={Experience.Glassdoor} />
          <ExperienceCell experience={Experience.Terra} />
          <ExperienceCell experience={Experience.Llounge} />
          <ExperienceCell experience={Experience.AppDev} />
        </div>
      </div>
    </>
  );
}
