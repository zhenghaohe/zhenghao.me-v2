import Image from 'next/image';
import { images } from '@/utils/arts';
import { useEffect, useReducer, useRef, useState } from 'react';
import { DynamicPic } from '@/components/DynamicPic'

const image = images[1]

const useForceRender = () => useReducer(() => ({}))
export function MyPic() {
  // console.log(globalThis)
  const [_, update] = useForceRender()
  const [isLoaded, setIsLoaded] = useState(false)
  const mounted = useRef(false)
  // useEffect(() => {

  //   if (!mounted.current) {
  //     // setTimeout(() => {
  //     //   mounted.current = true
  //     //   update()
  //     // }, 1000)
  //     mounted.current = true
  //     update()
  //   }
  // }, [])

  console.log({ image })
  return (

    <div
      key={image.src}
      className={`max-w-md mx-auto `}

      style={{ height: '618px', position: 'relative' }}
    >
      { <Image

        src={image}
        alt="picture of the author"
        placeholder="blur"
        objectFit="contain"
        className="z-10"
        priority
        blurDataURL={image.blurDataURL}
        id='foo'
        onLoadingComplete={() => {
          setIsLoaded(true)
        }}
        // style={{ background: 'red', border: '1px solid red' }}
      />}
      {isLoaded && <DynamicPic /> }
      {/* 
      {mounted.current ? <Image
        src={image}
        alt="picture of the author"
        placeholder="blur"
        objectFit="contain"
        className="z-10"
        priority
        blurDataURL={image.blurDataURL}
        id='foo'
        onLoadingComplete={() => {
          console.log('sdfds')
          setIsLoaded(true)
        }}
        style={{ position: 'fixed' }}
      /> : <Image
        src={image}
        alt="picture of the author"
        placeholder="blur"
        objectFit="contain"
        className="z-10"
        priority
        blurDataURL={image.blurDataURL}
        id='foo'
        onLoadingComplete={() => {
          console.log('sdfds')
          setIsLoaded(true)
        }}
        style={{ display: isLoaded ? 'none' : 'block' }}
      />
      } */}
    </div>



  );
}