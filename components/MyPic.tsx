import Image from 'next/image';
import { images } from '@/utils/arts';
import DistortImage from "./DistortImage"

const image = images[1]

function MyPic() {


  return (

    <DistortImage />

  );
}


export default MyPic
