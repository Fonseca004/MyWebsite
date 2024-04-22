export type Experience = {
    title: string;
    institution: string;
    techs: string[];
    description: string;
    locatime: string;
    category: string;
    link: string;
  };
  
  const experiences: Experience[] = [
    {
      title: "Bachelor's degree in Eletrical and Computer Engineering",
      institution: "Instituto Superior Técnico",
      techs: ["C", "LtSpice", "Matlab"],
      description: "",
      locatime: "Lisbon, 2022-2025",
      category: "school",
      link: "https://fenix.tecnico.ulisboa.pt/cursos/leec21/curriculo",
    },
    {
      title: "Highschool",
      institution: "Instituto dos Pupilos do Exército",
      techs: ["Ladder CLP"],
      description: "",
      locatime: "Lisbon, 2019-2022",
      category: "school",
      link: "https://pupilos.pt/",
    },
    {
      title: "Internship - Electrical and RF lab",
      institution: "Instituto de Soldadura e Qualidade",
      techs: [""],
      description: "600 Hours internship at ISQ, tutored by Eng. Luis Miguel Ferreira.",
      locatime: "Taguspark, Lisbon, 2022",
      category: "professional",
      link: "https://isqgroup.com/",
    },
    {
      title: "Restaurant Waiter",
      institution: "Restaurante Pátio Alentejano",
      techs: ["Costumer service"],
      description: "Seazonal job, working as a full time waiter during summer holidays for two years. Enriching experience outside studying area!",
      locatime: "Vila Nova de Milfontes, Portugal, 2023/2024",
      category: "professional",
      link: "https://www.tripadvisor.pt/Restaurant_Review-g784072-d3959047-Reviews-Patio_Alentejano-Vila_Nova_de_Milfontes_Beja_District_Alentejo.html",
    },
    {
      title: "B2 First",
      institution: "Cambridge University Press & Assessment",
      techs: ["English"],
      description: "B2 First Certificate",
      locatime: "Lisbon, 2021",
      category: "Certificates",
      link: "https://www.cambridgeenglish.org/pt/exams-and-tests/first/",
    },
    {
      title: "Websummit Volunteer",
      institution: "Websummit",
      techs: ["Tech", "Volunteer"],
      description: "Websummit volunteer at Parque das Nações in Lisbon",
      locatime: "Lisbon, 2023",
      category: "Volunteer",
      link: "https://websummit.com/?utm_source=google&utm_medium=cpc&utm_campaign=20777355056&utm_content=164218860948&utm_term=web%20summit%20conference&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT76XaxZLkalS6Hz8EjxacoPFdpeKOn2mBGSLWqbr0-97TXh1elD5wURoCe2kQAvD_BwE",
    },
    {
      title: "JEEC Volunteer",
      institution: "JEEC / Instituto Superior Técnico",
      techs: ["Tech", "Volunteer"],
      description: "JEEC - Joornadas de Engenharia ELetrotécnica e de Computadores",
      locatime: "Lisbon, 2023",
      category: "Volunteer",
      link: "https://jeec.ist/",
    },
    {
      title: "Premio General Xavier Correia Barreto",
      institution: "Instituto dos Pupilos do Exército",
      techs: ["Tech", "Volunteer"],
      description: "SOu sugoy!",
      locatime: "Lisbon, 2023",
      category: "Award",
      link: "",
    }
  ];
  
  export default experiences;
  