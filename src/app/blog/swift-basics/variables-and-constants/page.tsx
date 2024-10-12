"use client";

import pic1 from "@/../public/blog/swift-basics/variables-and-constants/1.png";
import pic2 from "@/../public/blog/swift-basics/variables-and-constants/2.png";
import pic3 from "@/../public/blog/swift-basics/variables-and-constants/3.png";
import { motion } from "framer-motion";
import BlogHero from "@/components/blog/BlogHero";
import TextBlock from "@/components/shared/TextBlock";
import NextCell from "@/components/shared/NextCell";
import ImageBlock from "@/components/shared/ImageBlock";
import CodeBlock from "@/components/blog/CodeBlock";
import { CodingLanguage } from "@/models/enums";

export default function VariablesAndConstants() {
  return (
    <>
      <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-blog pb-12 md:pb-24">
        {/* Hero */}
        <BlogHero
          title="Variables and Constants"
          description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
          topic="Swift Basics"
          date="Fall 2023"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
        className="flex flex-col gap-12 lg:gap-20 items-center"
      >
        <TextBlock
          body={[
            "In almost any program that we create, we will need to store data at some point. In Swift, we can store data in two ways: variables and constants. We can think of both variables and constants as a box holding some value inside. However, there is one key difference between these two. A variable can change its value whenever we want. On the contrary, a constant can hold a value once and can never be changed again.",
            "It may seem pointless to have both variables and constants; however, there are many advantages. If Xcode knows that a value will never change, it will optimize our program to make it run faster. Another advantage is that if we were to make a mistake and change a value of a constant when we don’t need to, Xcode will tell us and our code will not compile.",
          ]}
        />

        <div className="flex flex-col gap-2">
          <TextBlock
            heading="Variables"
            body={["To create a variable, we use the var keyword."]}
            selected={["var"]}
            selectedStyle="code"
          />
          <CodeBlock
            body={`var instructor = "Vin"`}
            language={CodingLanguage.Swift}
          />
          <TextBlock
            body={[
              "To change the value of the variable, we can simply do the following.",
            ]}
          />
          <CodeBlock
            body={`var instructor = "Vin"
instructor = "Richie"`}
            language={CodingLanguage.Swift}
          />
          <TextBlock body={["Let’s try this in the Xcode playground."]} />
        </div>
        <ImageBlock
          imageSrc={pic1}
          imageAlt="To change the value of the variable, we can simply do the following."
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "Notice how we do not need to use the var keyword the second time. We should only use the var keyword if we are declaring a new variable. We can test this out in the Xcode playground.",
          ]}
          selected={["var"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic2}
          imageAlt="We should only use the var keyword if we are declaring a new variable."
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          heading="Constants"
          body={[
            "Now, what if we wanted to use a constant instead of a variable? All we would need to do is to use the let keyword instead.",
          ]}
          selected={["let"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic3}
          imageAlt="We should only use the var keyword if we are declaring a new variable."
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "As we can see, changing the instructor variable to a constant caused Xcode to get angry. The error message clearly informs us that we are attempting to change the value of a constant.",
          ]}
          selected={["instructor"]}
          selectedStyle="code"
        />
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Variables and Constants"
        prevLink="/blog/swift-basics/variables-and-constants"
        nextText="Data Types"
        nextLink="/blog/swift-basics/data-types"
      />
    </>
  );
}
