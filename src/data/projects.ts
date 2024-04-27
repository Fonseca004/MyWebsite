export type Project = {
    title: string;
    techs: string[];
    link: string;
    description: string;
    isComingSoon?: boolean;
    pinned?: boolean;
  };
  
  const projects: Project[] = [
    {
      title: "This Website",
      techs: ["Astro", "TailwindCSS", "Cloudflare"],
      link: "https://github.com/Fonseca004/MyWebsite",
      description: "Website built with Astro and TailwindCSS and deployed with cloudflare.",
      pinned: true,
    },
    {
      title: "Homeserver",
      techs: ["Proxmox", "TrueNAS"],
      link: "/",
      description: "NAS for local access and Operating Systems tinkering hardware.",
      isComingSoon: true,
      pinned: true,
    },
    {
      title: "Car Dashboard",
      techs: ["RaspberryPi"],
      link: "/",
      description: "Car Dashboard to display car vitals and phone integration for hands free drive",
      isComingSoon: true,
      pinned: true,
    },
    {
      title: "Amplifier/ADC",
      techs: ["LTSpice"],
      link: "/",
      description: "Designing and building an audio amplifier and DAC.",
      isComingSoon: true,
    }
  ];
  
  export default projects;
  