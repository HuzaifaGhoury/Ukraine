import React from "react";
import Image from "next/image";
import post1 from "../../public/image 3.png";
import post2 from "../../public/image 4.png";
import post3 from "../../public/image 5.png";
import post4 from "../../public/image 6.png";
import collagePic from '../../public/collage1.png';
import collagePic2 from '../../public/collage2.png';
import collagePic3 from '../../public/collage3.png';
import collagePic4 from '../../public/collage4.png';

export default function Post() {
  const posts = [post4, post2, post4, post4];

  return (
    <div className="my-14">
      <div className="md:flex gap-6">
        {posts.map((post, index) => (
          <div key={index} className="w-90 h-80 mb-6 md:mb-0 mt-36 md:mt-12">
            <Image src={post} alt={`Post ${index + 1}`} width={400} height={520} className="cursor-pointer" />
          </div>
        ))}
      </div>
      <div className="md:flex gap-2 md:mt-60 mt-40">
        <div className="flex gap-4  w-2.1/3 md:max-h-80"  >
          <Image src={collagePic4} width={600} className="h-90"/>
          <div>
            <Image src={collagePic3} width={330} height={130} className=" h-40"/>
            <Image src={collagePic2} width={330} height={130} className="md:mt-1 h-40"/>
          </div>
        </div>
        <div className="w-1.1/3 bg-gray-600 max-h-80">
        <Image src={collagePic} width={700} className="h-80"/></div>
      </div>
    </div>
  );
}

// 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