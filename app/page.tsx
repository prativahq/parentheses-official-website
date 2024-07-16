import HomeHero from "@/components/homepage/HomeHero";
import Review from "@/components/homepage/Review";
import Sale from "@/components/sale";
import Steps from "@/components/homepage/Steps";
import TechStack from "@/components/homepage/TechStack";
import EngagementModel from "@/components/homepage/EngagementModel";
import FAQ from "@/components/subservice/FAQ";
import NewsLetter from "@/components/homepage/NewsLetter";
import CaseStudiesCarousel from "@/components/subservice/CaseStudiesCarousel";
import BlogSection from "@/components/homepage/BlogSection";
import FeaturedServices from "@/components/homepage/FeaturedServices";

const faq = [
  {
      question: "What is your name?",
      answer: "Bhupendra Yogi"
  },
  {
      question: "What is your name?",
      answer: "Bhupendra Yogi"
  },
  {
      question: "What is your name?",
      answer: "Bhupendra Yogi"
  },
  {
      question: "What is your name?",
      answer: "Bhupendra Yogi"
  },
  {
      question: "What is your name?",
      answer: "Bhupendra Yogi"
  },
]
export default function Home() {
  return (
    <main className=" bg-white font-sfpd-regular min-h-screen">
      <Sale bg="blue"/>
      <HomeHero/>
      <Review/>
      <Steps/>
      <FeaturedServices/>
      <TechStack/>
      <EngagementModel/>
      <CaseStudiesCarousel/>
      <BlogSection/>
      <NewsLetter/>
      <FAQ allProp={faq}/>
    </main>
  );
}
