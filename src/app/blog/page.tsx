"use client";

import BlogTopCell from "@/components/BlogTopCell";
import placeholderImg from "../../../public/placeholder.png";
import BlogFeaturedCell from "@/components/BlogFeaturedCell";
import BlogExploreCell from "@/components/BlogExploreCell";
import { motion } from "framer-motion";

export default function Blog() {
  // TODO: Uncomment when done
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-4 items-center justify-center text-center h-[500px]"
      >
        <h1 className="text-neutral-900 dark:text-neutral-100">Coming Soon</h1>
        <p className="b1 text-neutral-900 dark:text-neutral-100">
          This page is currently in development and will be available to view
          soon. Check back for updates!
        </p>
      </motion.div>
    </>
  );

  return (
    <>
      {/* Top */}
      <BlogTopCell
        link="/blog/intro-to-ios/variables-and-constants"
        imageSrc={placeholderImg}
        imageAlt="Placeholder image"
        category="INTRO TO IOS"
        title="Variables and Constants"
        description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
        date="Jun 1, 2023"
        readTime="2 min read"
      />

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
        className="flex flex-col gap-4 lg:gap-6"
      >
        <h2 className="text-neutral-900">Featured</h2>
        <div className="flex flex-col gap-12 md:flex-row md:gap-8 lg:gap-16">
          <BlogFeaturedCell
            link="/blog/intro-to-ios/variables-and-constants"
            imageSrc={placeholderImg}
            imageAlt="Placeholder image"
            category="INTRO TO IOS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Jun 1, 2023"
            readTime="2 min read"
          />
          <BlogFeaturedCell
            link="/blog/intro-to-ios/variables-and-constants"
            imageSrc={placeholderImg}
            imageAlt="Placeholder image"
            category="INTRO TO IOS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Jun 1, 2023"
            readTime="2 min read"
          />
          <BlogFeaturedCell
            link="/blog/intro-to-ios/variables-and-constants"
            imageSrc={placeholderImg}
            imageAlt="Placeholder image"
            category="INTRO TO IOS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Jun 1, 2023"
            readTime="2 min read"
          />
        </div>
      </motion.div>

      {/* Explore */}
      <div className="flex flex-col gap-4 lg:gap-6">
        <h2 className="text-neutral-900">Explore</h2>
        <div className="flex flex-col gap-12 md:gap-8 lg:gap-10">
          <BlogExploreCell
            link="/blog/intro-to-ios/variables-and-constants"
            imageSrc={placeholderImg}
            imageAlt="Placeholder image"
            category="INTRO TO IOS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Jun 1, 2023"
            readTime="2 min read"
          />
          <BlogExploreCell
            link="/blog/intro-to-ios/variables-and-constants"
            imageSrc={placeholderImg}
            imageAlt="Placeholder image"
            category="INTRO TO IOS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Jun 1, 2023"
            readTime="2 min read"
          />
          <BlogExploreCell
            link="/blog/intro-to-ios/variables-and-constants"
            imageSrc={placeholderImg}
            imageAlt="Placeholder image"
            category="INTRO TO IOS"
            title="Variables and Constants"
            description="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            date="Jun 1, 2023"
            readTime="2 min read"
          />
        </div>
      </div>
    </>
  );
}
