import WorkDescription from "@/components/WorkDescription";
import Image from "next/image";
import TextBlock from "@/components/TextBlock";
import WorkFeatureCell from "@/components/WorkFeatureCell";

import scribblyMain from "../../../public/scribbly/scribbly-main.png";
import scribbly1 from "../../../public/scribbly/scribbly-1.png";
import scribbly2 from "../../../public/scribbly/scribbly-2.png";
import bellIcon from "../../../public/icons/bell.svg";
import peopleIcon from "../../../public/icons/people.svg";
import medalIcon from "../../../public/icons/medal.svg";
import galleryIcon from "../../../public/icons/gallery.svg";
import ImageBlock from "@/components/ImageBlock";
import LinksCell from "@/components/LinksCell";

export default function Scribbly() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col gap-12 items-center">
        {/* Heading */}
        <div className="flex flex-col items-center marker:gap-1">
          <h1 className="text-neutral-900">Scribbly</h1>
          <p className="s2 text-neutral-600">
            Your Daily Dose of Artistic Inspiration.
          </p>
        </div>

        {/* Description */}
        <WorkDescription
          roles={["Developer"]}
          timeline={["Winter 2023"]}
          frontend={["UIKit"]}
          backend={["Firebase"]}
        />

        {/* Image */}
        <Image
          src={scribblyMain}
          alt="Image of the Scribbly project"
          placeholder="blur"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-12">
        <TextBlock
          heading="The Artist’s Dilemma"
          body={[
            "Many aspiring artists struggle to establish a consistent practice and often feel isolated in their creative pursuits. Traditional methods of skill-building can lack structure and feedback, leading to frustration and a loss of motivation. Additionally, the fear of judgment or comparison can stifle creativity and prevent artists from experimenting and developing their unique styles. This lack of community and structured guidance often leaves individuals feeling discouraged and unsure of how to progress in their artistic journey.",
          ]}
        />
        <TextBlock
          heading="A Canvas for Connection and Growth"
          body={[
            "Scribbly addresses these challenges by transforming art practice into a social and engaging experience. The app provides daily prompts that spark inspiration and offer a clear starting point for daily practice. By fostering a supportive community where users can share their work, receive positive feedback, and connect with fellow artists, Scribbly combats isolation and cultivates a sense of belonging. The ability to track progress and reflect on past creations encourages self-assessment and celebrates growth, empowering users to overcome creative blocks and develop confidence in their artistic abilities.",
          ]}
        />

        {/* Features */}
        <div className="flex flex-col gap-6">
          <WorkFeatureCell
            icon={bellIcon}
            iconAlt="Bell Icon"
            title="Notifications"
            description="Staying engaged is key to artistic growth. Notifications alert users when friends interact with their artwork or when a new daily prompt is available, encouraging consistent participation and fostering a sense of connection."
          />
          <WorkFeatureCell
            icon={peopleIcon}
            iconAlt="People Icon"
            title="Creative Circle"
            description={
              'Building a supportive network is at the heart of Scribbly\'s mission. The "Friends" feature allows users to connect with other artists, share their work, exchange feedback, and hold each other accountable for daily practice.'
            }
          />
          <WorkFeatureCell
            icon={medalIcon}
            iconAlt="Medal Icon"
            title="Art Challenges"
            description="Scribbly's ever-changing pool of prompts sparks creativity and prevents stagnation. From drawing everyday objects to exploring abstract concepts, these prompts challenge users to step outside their comfort zones and discover new artistic possibilities."
          />
          <WorkFeatureCell
            icon={galleryIcon}
            iconAlt="Gallery Icon"
            title="Personal Gallery"
            description={
              "Witnessing progress is incredibly motivating. Scribbly's \"Journal\" feature serves as a personalized art gallery, showcasing a user's artistic evolution over time. This visual record of growth inspires continued practice and reinforces the value of daily dedication."
            }
          />
        </div>

        <ImageBlock
          imageSrc={scribbly1}
          imageAlt="Draw a new prompt every day (left) and explore what others drew (right)."
          caption="☝🏻 Draw a new prompt every day (left) and explore what others drew (right)."
        />
        <ImageBlock
          imageSrc={scribbly2}
          imageAlt="Comment on other artwork (left) and view your own personalized art gallery (right)."
          caption="☝🏻 Comment on other artwork (left) and view your own personalized art gallery (right)."
        />
        <TextBlock
          heading="Forging Ahead"
          body={[
            "Embarking on my first-ever app development project, I teamed up with two friends—a designer and an Android developer—to bring Scribbly to life. Taking charge of the iOS development, I embraced the challenge with enthusiasm, despite my limited experience in backend development at the time.",
            "To prioritize cost-effectiveness, I opted to utilize Firebase's suite of tools. Their Realtime Database served as the primary data store, while the Firebase Storage bucket handled user-generated content. Leveraging the Firebase iOS SDK, I established seamless communication between the app and the backend infrastructure.",
            "This project marked my first venture into iOS app development using UIKit. The learning curve was steep, but I eagerly absorbed the intricacies of creating UITableViews, UICollectionViews, and navigating the imperative nature of UIKit. Along the way, I implemented features like phone verification and custom sign-in, further expanding my skill set. This was also my first experience translating a Figma design into functional Swift code, a valuable lesson in bridging the gap between design and development.",
            "Due to my relative inexperience, the project spanned the entirety of winter break. However, the challenges I faced proved to be invaluable learning opportunities, solidifying my foundation in mobile app development and sparking a passion for building user-centric products.",
          ]}
        />
        <TextBlock
          heading="Refining the Vision"
          body={[
            "While Scribbly's iOS prototype successfully demonstrated its core concept and potential, I've decided to hold off on releasing it to the App Store due to concerns regarding data privacy and content moderation. However, this project has ignited my passion for further development.",
            "If I were to embark on building Scribbly again, I would adopt a different approach to the backend. Instead of relying on Firebase, I would prioritize creating a custom backend server. This would grant me greater flexibility, control, and customization options to ensure robust data privacy measures and content filtering capabilities.",
            "Additionally, leveraging my newfound proficiency in SwiftUI, I would rewrite the iOS app using this declarative framework. SwiftUI's streamlined syntax and real-time preview functionality would significantly accelerate development, enabling me to iterate on features more rapidly and deliver a polished user experience.",
            "Despite the challenges and lessons learned from this initial endeavor, I remain excited about Scribbly's potential to foster creativity and community. With a refined approach to backend development and a commitment to user privacy and safety, I am confident that a future iteration of Scribbly could flourish as a valuable tool for artists of all levels.",
          ]}
        />

        {/* Links */}
        <LinksCell github="https://github.com/vinnie4k/Scribbly" />
      </div>

      {/* Next */}
    </>
  );
}