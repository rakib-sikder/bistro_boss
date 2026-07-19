import Sectiontitle from "../shared/Section title/Sectiontitle";
import featuredimg from "../../assets/home/featured.jpg";
import Button from "../shared/Component/Button";
import { Reveal } from "@/components/motion/Reveal";

const FeaturedItem = () => {
  return (
    <section className="mt-32 bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: `url(${featuredimg})` }}>
      <div className="bg-black/60">
        <Sectiontitle subHeading={"Check it out"} heading={"Featured Items"} textColor={"text-white"}></Sectiontitle>
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row md:px-24">
          <div className="shrink-0 overflow-hidden rounded-2xl shadow-2xl">
            <img src={featuredimg} alt="" className="w-full md:w-80" />
          </div>
          <div className="mt-6 space-y-3 text-white md:mt-0">
            <p className="text-xs tracking-widest text-neutral-300">Aug 20, 2020</p>
            <p className="text-2xl font-semibold uppercase">Where can i get some?</p>
            <p className="text-sm leading-relaxed text-neutral-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis pariatur optio tenetur eum laboriosam,
              maiores similique vero quisquam consectetur eaque dolorem odit est quis in voluptates rerum aliquid
              exercitationem fugit dolorum nostrum eius magnam deserunt! Dolor esse tempora molestias laboriosam
              nihil optio illum excepturi vero mollitia quasi, est sunt ullam.
            </p>
            <Button btnText={"Read More"}></Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedItem;