import { AboutPic } from "@/components/AboutPic";
import { MyPic } from "@/components/MyPic";


export default function About() {
  return (
    <div className="max-w-[75ch] mx-auto py-12 px-5 flex flex-col gap-8 justify-center items-center">
      <p>Everything on the website is tentative</p>
      <AboutPic />

{/* 
      <br />
      <p>And "The test of a first-rate intelligence is the ability to hold two opposing ideas in mind at the same time and still retain the ability to function" by F. Scott Fitzgerald is my favorite saying.</p> */}
    </div>
  );
}
