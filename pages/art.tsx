import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { images, videos } from '@/utils/arts';

const Images = () => {
  return (
    <>
      {images.map((image, i) => {
        return (
        <div
          key={image.src}
          style={{ order: (i % 12) + 1 }}
          className={`flex ${
            image.width / image.height > 1.5
              ? 'md:w-8/12 lg:w-6/12 2xl:w-5/12'
              : 'md:w-6/12 lg:w-4/12 2xl:w-3/12'
          } w-full p-2 mx-4 my-8 md:mx-12 md:my-16 dark:bg-white bg-gray-100 relative z-10 shadow-2xl`}>
          <Image
            src={image}
            alt="art"
            placeholder="blur"
            objectFit="contain"
            className="z-10"
            priority
            blurDataURL={image.blurDataURL}
          />

          {/* <div className="absolute z-0 scale-110 opacity-50 saturate-[4] blur-3xl">
            <Image
              src={image}
              alt="art"
              placeholder="blur"
              objectFit="contain"
              priority
              blurDataURL={image.blurDataURL}
            />
          </div> */}
        </div>
      )})}
    </>
  );
};

const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 group-hover:rotate-[360deg] duration-200"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const Pause = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="invisible w-20 h-20 group-hover:visible"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const Video = (props: { video: string; poster: string | undefined; index: number }) => {
  const { video, index } = props;

  const [playing, setPlaying] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoShadowRef = useRef<HTMLVideoElement | null>(null);

  const onPlayPause = () => {
    if (!(videoRef.current && videoShadowRef.current)) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      videoShadowRef.current.play();

      setPlaying(true);
    } else {
      videoRef.current.pause();
      videoShadowRef.current.pause();

      setPlaying(false);
    }
  };

  useEffect(() => {
    if (inView) return;
    if (!(videoRef.current && videoShadowRef.current)) return;

    videoRef.current.pause();
    videoShadowRef.current.pause();

    setPlaying(false);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center p-2 mx-4 my-8 bg-gray-100 shadow-2xl md:mx-12 md:my-16 dark:bg-white md:w-8/12 lg:w-6/12 2xl:w-5/12"
      style={{ order: (index % 12) + 1 }}>
      <div className="w-full h-full bg-gray-200 dark:bg-black">
        <button
          onClick={onPlayPause}
          className="absolute z-30 flex items-center justify-center w-full h-full text-white group">
          {playing ? <Pause /> : <Play />}
        </button>
        <video ref={videoRef} loop muted playsInline className="z-10 w-full">
          <source src={video} type="video/mp4" />
        </video>
        <video
          ref={videoShadowRef}
          loop
          muted
          playsInline
          className="absolute z-0 w-full scale-150 opacity-30 saturate-200 bg-zoom-150 blur-[30px]">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

const Videos = () => {
  return (
    <>
      {videos.map(([video, poster], index) => (
        <Video key={video} video={video} poster={poster} index={index} />
      ))}
    </>
  );
};

const Art: React.FC = () => {
  return (
    <div className="flex flex-wrap items-start w-full gap-12 py-16 mx-auto overflow-hidden justify-evenly">
      <Images />
      {/* <Videos /> */}
    </div>
  );
};

export default Art;
