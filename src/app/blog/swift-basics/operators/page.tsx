"use client";

import pic1 from "@/../public/blog/swift-basics/operators/1.png";
import pic2 from "@/../public/blog/swift-basics/operators/2.png";
import pic3 from "@/../public/blog/swift-basics/operators/3.png";
import pic4 from "@/../public/blog/swift-basics/operators/4.png";
import pic5 from "@/../public/blog/swift-basics/operators/5.png";
import pic6 from "@/../public/blog/swift-basics/operators/6.png";
import pic7 from "@/../public/blog/swift-basics/operators/7.png";
import pic8 from "@/../public/blog/swift-basics/operators/8.png";
import pic9 from "@/../public/blog/swift-basics/operators/9.jpeg";
import pic10 from "@/../public/blog/swift-basics/operators/10.png";
import pic11 from "@/../public/blog/swift-basics/operators/11.png";
import BlogHero from "@/components/blog/BlogHero";
import { motion } from "framer-motion";
import TextBlock from "@/components/shared/TextBlock";
import ImageBlock from "@/components/shared/ImageBlock";
import CodeBlock from "@/components/blog/CodeBlock";
import { CodingLanguage } from "@/models/enums";
import NextCell from "@/components/shared/NextCell";

export default function Operators() {
  return (
    <>
      <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-blog pb-12 md:pb-24">
        {/* Hero */}
        <BlogHero
          title="Operators"
          description="We have seen the four basic math operations in elementary school: addition, subtraction, multiplication, and division. In Swift, we can use operators to perform these operations."
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
              "We have seen the four basic math operations in elementary school: addition, subtraction, multiplication, and division. In Swift, we can use operators to perform these operations.",
            ]}
          />
          <CodeBlock
            body={`var a = 0
a = a + 10
a = a - 5
a = a * a
a = a / 10`}
            language={CodingLanguage.Swift}
          />
        </div>
        <ImageBlock
          imageSrc={pic1}
          imageAlt="Basic operators"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock body={["The following lines are equivalent:"]} />
        <ImageBlock
          imageSrc={pic2}
          imageAlt="Basic operators"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "These operators are self-explanatory; however, if we were to look closer at the the line a=a/10 we can notice that the output is 2 instead of 2.5 . The reason for this is because the type of a is an Int . If we were to perform these operations on a , then we must also use an Int .",
          ]}
          selected={["a=a/10", "2", "2.5", "a", "Int"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic3}
          imageAlt="Basic operators error"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "Then, how do we get the value 2.5 ? Because the type of a is an Int , then we must introduce new variables of type Double or Float since we cannot change its type once initialized. We would also need to make sure that the values in which we apply these operators on must also be Double or Float .",
          ]}
          selected={["2.5", "a", "Int", "Double", "Float"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic4}
          imageAlt="Type casting"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "Let's look at the line Double(a) . This is known as type casting. Because a is an Int and we needed a Double , Double(a) converts the value 2 to 2.0 . Note that this does not change the type of a . It only produces values to be used for that operation.",
            "One more common operator we may see is the modulus operator ( % ). This is similar to the / operator except we return the remainder.",
          ]}
          selected={[
            "Double(a)",
            "a",
            "Int",
            "Double",
            "Float",
            "2",
            "2.0",
            "%",
            "/",
          ]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic5}
          imageAlt="Modulus operator"
          imageStyle="md:max-w-[800px]"
        />

        <TextBlock
          heading="Common Operators"
          body={[
            "The following is a list of common operators that we are likely to use.",
          ]}
        />
        <ImageBlock
          imageSrc={pic6}
          imageAlt="Common operators"
          imageStyle="md:max-w-[800px]"
        />

        <div className="flex flex-col gap-2 items-center">
          <TextBlock
            heading="String Interpolation"
            body={[
              "String interpolation is a way of combining variables and constants inside a string. Take a look at this example:",
            ]}
            selected={["String", "interpolation"]}
            selectedStyle="bold"
          />
          <CodeBlock
            body={`var name = "Vin"
"My name is \(name)."`}
            language={CodingLanguage.Swift}
          />
        </div>
        <ImageBlock
          imageSrc={pic7}
          imageAlt="String interpolation"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "Of course, we could have used the + operator to concatenate these strings together.",
          ]}
          selected={["+"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic8}
          imageAlt="Add operator instead of string interpolation"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "The problem with this approach is efficiency especially if we want to concatenate multiple variables. Another issue with using + is that Swift does not allow types such as Int or Float to be glued with a String .",
          ]}
          selected={["+", "Int", "Float", "String"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic9}
          imageAlt="Add operator instead of string interpolation error"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={["We could cast age to a String but that would be expensive."]}
          selected={["age", "String"]}
          selectedStyle="code"
        />
        <ImageBlock
          imageSrc={pic10}
          imageAlt="Casting instead of string interpolation"
          imageStyle="md:max-w-[800px]"
        />
        <TextBlock
          body={[
            "Using string interpolation is a lot more efficient and looks cleaner too!",
          ]}
        />
        <ImageBlock
          imageSrc={pic11}
          imageAlt="Using  string interpolation"
          imageStyle="md:max-w-[800px]"
        />
      </motion.div>

      {/* Next */}
      {/* TODO: Change Next Link */}
      <NextCell
        prevText="Data Types"
        prevLink="/blog/swift-basics/data-types"
        nextText="Operators"
        nextLink="/blog/swift-basics/operators"
      />
    </>
  );
}
