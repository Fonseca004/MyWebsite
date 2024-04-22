export type Project = {
    title: string;
    techs: string[];
    link: string;
    isComingSoon?: boolean;
    pinned?: boolean;
  };
  
  const projects: Project[] = [
    {
      title: "This Website",
      techs: ["Astro", "TailwindCSS", "Cloudflare"],
      link: "https://github.com/Fonseca004/MyWebsite",
      pinned: true,
    },
    {
      title: "Homeserver",
      techs: ["Proxmox", "TrueNAS"],
      link: "/",
      isComingSoon: true,
      pinned: true,
    },
    {
      title: "Car Dashboard",
      techs: ["RaspberryPi"],
      link: "/",
      isComingSoon: true,
      pinned: true,
    },
    {
      title: "Amplifier/ADC",
      techs: ["LTSpice"],
      link: "/",
      isComingSoon: true,
    }
  ];
  
  export default projects;
  