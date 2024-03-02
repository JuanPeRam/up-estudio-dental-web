import FacebookIcon from "@/icons/FacebookIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import LinkedInIcon from "@/icons/LinkedInIcon"
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
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/up-estudio-dental-y-estética-636620280/",
        svg: LinkedInIcon
    }
]

export default socials