import dynamic from 'next/dynamic'
// import DistortImage from "./DistortImage"
export const DynamicPic = dynamic(() => import("./DistortImage"), {
    ssr: false
})


