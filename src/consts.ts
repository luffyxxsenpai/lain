import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '₍˄·͈༝·͈˄₎◞ ̑̑',
  description:
    'just a guy with some tech shit.',
  href: 'https://homelain.click',
  author: 'luffy',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/luffyxxsenpai',
    label: 'GitHub',
  },
  {
    href: 'https://instagram.com/luffyxxsenpai',
    label: 'Instagram',
  },
  {
    href: 'mailto:luffysenpai661@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/shubham-kumar-devops',
    label: 'LinkedIn',
  },  
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  Instagram: 'lucide:instagram',
  RSS: 'lucide:rss',
}
