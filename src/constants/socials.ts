import InstagramIcon from "@/icons/InstagramIcon.jsx"
import TikTokIcon from '@/icons/TikTokIcon'

type SocialType = {
    name: string,
    link: string,
    svg: any
}

const socials: SocialType[] = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/upestudiodental/",
        svg: InstagramIcon
    },
    {
        name: "TikTok",
        link: "https://www.tiktok.com/@upestudiodental",
        svg: TikTokIcon
    }
]

export default socials