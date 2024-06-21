import BlogTopCell from "@/components/BlogTopCell";
import placeholderImg from "../../../public/placeholder.png";
import BlogFeaturedCell from "@/components/BlogFeaturedCell";
import BlogExploreCell from "@/components/BlogExploreCell";

export default function Blog() {
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
      <div className="flex flex-col gap-4">
        <h2 className="text-neutral-900">Featured</h2>
        <div className="flex flex-col gap-12">
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
      </div>

      {/* Explore */}
      <div className="flex flex-col gap-4">
        <h2 className="text-neutral-900">Explore</h2>
        <div className="flex flex-col gap-12">
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
