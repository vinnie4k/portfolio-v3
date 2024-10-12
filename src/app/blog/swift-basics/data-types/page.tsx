"use client";

import pic1 from "@/../public/blog/swift-basics/data-types/1.png";
import pic2 from "@/../public/blog/swift-basics/data-types/2.png";
import pic3 from "@/../public/blog/swift-basics/data-types/3.png";
import pic4 from "@/../public/blog/swift-basics/data-types/4.png";
import pic5 from "@/../public/blog/swift-basics/data-types/5.png";
import pic6 from "@/../public/blog/swift-basics/data-types/6.png";
import BlogHero from "@/components/blog/BlogHero";
import { motion } from "framer-motion";
import TextBlock from "@/components/shared/TextBlock";
import ImageBlock from "@/components/shared/ImageBlock";
import CodeBlock from "@/components/blog/CodeBlock";
import { CodingLanguage } from "@/models/enums";
import NextCell from "@/components/shared/NextCell";

export default function DataTypes() {
  return (
    <>
      <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-blog pb-12 md:pb-24">
        {/* Hero */}
        <BlogHero
          title="Data Types"
          description="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types we will use. However, there are many more types of data that Swift handles."
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
        <div className="flex flex-col gap-2 items-center">
          <TextBlock
            body={[
              "In the variables and constants section above, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types we will use. However, there are many more types of data that Swift handles. In the example earlier, let’s try to do the following:",
            ]}
            selected={["String"]}
            selectedStyle="bold"
          />
          <CodeBlock
            body={`var instructor
instructor = "Vin"`}
            language={CodingLanguage.Swift}
          />
        </div>
        <ImageBlock
          imageSrc={pic1}
          imageAlt="Missing type annotation"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "There are two ways we can fix this error:",
            "1. Initialize the variable with a value when we create it.",
            "2. Tell Swift what data type the variable will hold on later.",
            "We’ve already seen (1) earlier, but for (2) we can use type annotations.",
          ]}
          selected={["type", "annotations."]}
          selectedStyle="bold"
        />

        <CodeBlock
          heading="Type Annotations"
          body={`var instructor: String
instructor = "Vin"`}
          language={CodingLanguage.Swift}
        />
        <ImageBlock
          imageSrc={pic2}
          imageAlt="Using type annotations"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "The key takeaway here is that Swift is a statically typed language, meaning that the type of every property, constant and variable that we declare needs to be specified at compile time. This is a good thing because it prevents us from putting anything inside of the “box”. This is known as type safety. Let’s demonstrate this by introducing a new data type Int (integer).",
          ]}
          selected={[
            "statically",
            "typed",
            "language",
            "type",
            "safety.",
            "Int",
          ]}
          selectedStyle="bold"
        />

        <CodeBlock
          heading="Integer and Type Safety"
          body={`var instructor: String
instructor = "Vin"

var year: Int
year = 2025`}
          language={CodingLanguage.Swift}
        />
        <ImageBlock
          imageSrc={pic3}
          imageAlt="Integer and type safety"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "Everything works fine, but what if we were to swap the values of instructor and year?",
          ]}
          selected={["instructor", "year"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic4}
          imageAlt="Integer and type safety error"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "Our code no longer compiles because we tried assigning a value whose type does not match the type of the variable at the time it was created.",
          ]}
        />

        <TextBlock
          heading="Float and Double"
          body={[
            "We can store decimal numbers by using a Float and Double. The difference between these two is that a Double has twice the accuracy of a Float, and hence takes up more storage.",
          ]}
          selected={["Float", "Double"]}
          selectedStyle="bold"
        />
        <ImageBlock
          imageSrc={pic5}
          imageAlt="Float and double"
          imageStyle="md:max-w-[800px]"
        />

        <TextBlock
          heading="Boolean"
          body={[
            "A Bool (boolean) in Swift is a data type that can hold one of two values: true or false .",
          ]}
          selected={["true", "false"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic6}
          imageAlt="Boolean"
          imageStyle="md:max-w-[800px]"
        />

        <div className="flex flex-col items-center gap-2">
          <TextBlock
            heading="Type Inferencing"
            body={["Earlier when we assigned an initial value to a variable,"]}
          />
          <CodeBlock
            body={`var instructor = "Vin"`}
            language={CodingLanguage.Swift}
          />
          <TextBlock
            body={[
              "Swift automatically infers what data type the variable will hold. This is known as type inferencing. We could also specify a data type and provide an initial value at the same time:",
            ]}
            selected={["infers", "type", "inferencing."]}
            selectedStyle="bold"
          />
          <CodeBlock
            body={`var instructor: String = "Vin"`}
            language={CodingLanguage.Swift}
          />
          <TextBlock
            body={[
              "Most of the time, we will not be using type annotations and prefer having Swift infer our types. However, there are times when type annotation should be used. This will come with practice and from seeing how we write our code.",
            ]}
          />
        </div>
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Variables and Constants"
        prevLink="/blog/swift-basics/variables-and-constants"
        nextText="Operators"
        nextLink="/blog/swift-basics/operators"
      />
    </>
  );
}
