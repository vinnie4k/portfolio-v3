"use client";

import BlogTopCell from "@/components/blog/BlogTopCell";
import BlogFeaturedCell from "@/components/blog/BlogFeaturedCell";
import BlogExploreCell from "@/components/blog/BlogExploreCell";
import variablesAndConstantsThumbnail from "@/../public/blog/swift-basics/variables-and-constants/thumbnail.jpeg";
import dataTypesThumbnail from "@/../public/blog/swift-basics/data-types/thumbnail.jpeg";
import operatorsThumbnail from "@/../public/blog/swift-basics/operators/thumbnail.jpeg";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      {/* Top */}
      <BlogTopCell
        link="/blog/swift-basics/variables-and-constants"
        imageSrc={variablesAndConstantsThumbnail}
        imageAlt="Variables and Constants"
        category="SWIFT BASICS"
        title="Variables and Constants"
        description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
        date="Fall 2023"
        readTime="3 min read"
      />

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1.5 }}
        className="flex flex-col gap-4 lg:gap-6"
      >
        <h2 className="text-neutral-900">Featured</h2>
        <div className="flex flex-col gap-12 md:flex-row md:gap-8 lg:gap-16">
          {/* <BlogFeaturedCell
            link="/blog/swift-basics/variables-and-constants"
            imageSrc={variablesAndConstantsThumbnail}
            imageAlt="Variables and constants"
            category="SWIFT BASICS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Fall 2023"
            readTime="3 min read"
          /> */}
          <BlogFeaturedCell
            link="/blog/swift-basics/data-types"
            imageSrc={dataTypesThumbnail}
            imageAlt="Data Types"
            category="SWIFT BASICS"
            title="Data Types"
            description="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types we will use. However, there are many more types of data that Swift handles."
            date="Fall 2023"
            readTime="5 min read"
          />
          <BlogFeaturedCell
            link="/blog/swift-basics/operators"
            imageSrc={operatorsThumbnail}
            imageAlt="Operators"
            category="SWIFT BASICS"
            title="Operators"
            description="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types we will use. However, there are many more types of data that Swift handles."
            date="Fall 2023"
            readTime="7 min read"
          />
        </div>
      </motion.div>

      {/* Explore */}
      <div className="flex flex-col gap-4 lg:gap-6">
        <h2 className="text-neutral-900">Explore</h2>
        <div className="flex flex-col gap-12 md:gap-8 lg:gap-10">
          <BlogExploreCell
            link="/blog/swift-basics/operators"
            imageSrc={operatorsThumbnail}
            imageAlt="Operators"
            category="SWIFT BASICS"
            title="Operators"
            description="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types we will use. However, there are many more types of data that Swift handles."
            date="Fall 2023"
            readTime="7 min read"
          />
          <BlogExploreCell
            link="/blog/swift-basics/data-types"
            imageSrc={dataTypesThumbnail}
            imageAlt="Data Types"
            category="SWIFT BASICS"
            title="Data Types"
            description="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types we will use. However, there are many more types of data that Swift handles."
            date="Fall 2023"
            readTime="5 min read"
          />
          <BlogExploreCell
            link="/blog/swift-basics/variables-and-constants"
            imageSrc={variablesAndConstantsThumbnail}
            imageAlt="Variables and constants"
            category="SWIFT BASICS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Fall 2023"
            readTime="3 min read"
          />
        </div>
      </div>
    </>
  );
}
