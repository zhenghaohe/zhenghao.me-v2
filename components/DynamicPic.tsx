import dynamic from 'next/dynamic'
export const DynamicPic = dynamic(() => import('./MyPic'), {
    ssr: false
})


