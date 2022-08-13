import Image from 'next/image';
import { images } from '@/utils/arts';


const image = images[1]

function MyPic() {

  
  return (

    <div
      key={image.src}
      className={`max-w-md mx-auto`}>
      <Image
        src={image}
        alt="picture of the author"
        placeholder="blur"
        objectFit="contain"
        className="z-10"
        priority
        blurDataURL={image.blurDataURL}
      />

    </div>

  );
}


export default MyPic
