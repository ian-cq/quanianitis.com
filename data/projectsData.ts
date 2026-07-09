interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Downpour - Flood Detection Mobile Application',
    description: `Downpour is a Flood Detection Mobile Application that is part of my Taylor's University's Final Year Project. Downpour uses image recognition to detect potential floods in your area, provides flood analytics and sends flood emergency alerts to users in the vicinity. It is built with Firebase, NoSQL, Tensorflow Lite, CNN.`,
    href: 'https://www.github.com/ian-cq/downpour',
  },
  {
    title: 'Homelab Environment',
    description: `Launched a K3s environment that incorporates GitOps principles, integrates standard networking practices and monitors the 3 pillars of observability. The homelab hosts my media server, personal financial management server and a myriad of MLOps projects.`,
    href: 'https://github.com/ian-cq/homelab',
  },
]

export default projectsData
