import project1 from "../Images/img_p1.png";
import project2 from "../Images/img_p2.png";
import project3 from "../Images/img_p3.png";
import project4 from "../Images/pizza.png";
import project5 from "../Images/netflix.png";


export const contentData = {
  en: {
    header: {
      mode: ["DARK MODE", "LIGHT MODE"],
      lngbutton: ["TÜRKÇE", "tr"],
      to: "'YE GEÇ",
      skills: "Skills",
      projects: "Projects",
      hire: "Hire me",
    },
    hero: {
      mTitle: "Creative thinker Minimalism lover",

      info: "Hi, I’m Ugur. I’m a Full-Stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me!",
      hire: "Hire me",
    },
    skills: {
      mTitle: "Skills",
      skillItems: [
        {
          id: 0,
          title: "Java Script",
          descr:
            "JavaScript is a programming language that, along with HTML and CSS, is one of the core technologies of the World Wide Web. More than 97% of websites use client-side JavaScript for web page gestures, and the code used often includes third-party libraries.",
        },
        {
          id: 1,
          title: "React.JS",
          descr:
            "React is an open source javascript library for creating user interfaces. React, which is being developed by a developer group led by Facebook, was created in accordance with the Model-View-Controller principle.",
        },
        {
          id: 2,
          title: "Node.JS",
          descr:
            "Node.js is an open source runtime environment for networked applications, typically server-side. Node.js applications are typically developed using JavaScript, a client-side scripting language.",
        },
      ],
    },
    profile: {
      mTitle: "Profile",
      pTitle: "Profile",

      birth: "Birth Date",
      city: "City",
      edu: "Education",
      eduDetail: "İstanbul Tecnichal University - Geomatics Engineer",
      work: "Job Prefs",
      iTitle: "About Me",
      info: "Hi, I’m Ugur. I’m a Full-Stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me!",
    },

    projects: {
      mTitle: "Projects",
      pItems: [
        {
          id: 0,
          img: project1,
          title: "Workintech",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["redux", "axios"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        {
          id: 1,
          img: project2,
          title: "Random Jokes",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["redux", "axios", "react"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        {
          id: 2,
          img: project3,
          title: "Journey",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["redux", "axios", "react", "wordpress"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        {
          id: 3,
          img: project4,
          title: "Pizza House",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["HTML", "CSS", "JS"],
          gitLink: "https://github.com/unsalug/fsweb-s8-challenge-pizza",
          prLink: "https://github.com/unsalug/fsweb-s8-challenge-pizza",
        },
        {
          id: 3,
          img: project5,
          title: "Witflix",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["HTML", "CSS", "JS"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        
      ],
    },

    footer: {
      mTitle: "Let’s work together on your next product.",
      mailAlt: "Send E-Mail to Me!",
    },
  },

  tr: {
    header: {
      mode: ["GECE MODU", "GÜNDÜZ MODU"],
      lngbutton: ["ENGLISH", "en"],
      to: " TO SWITCH",
      skills: "Yetenekler",
      projects: "Projeler",
      hire: "E-Posta",
    },
    hero: {
      mTitle: "Yaratıcı Düşünce Minimalist Düzen",
      info: "Merhaba, ben Uğur. Full-Stack yazılımcı olmak için çalışıyorum. Eğer öğrenmeye hevesli, yeni meydan okumalara açık, yaratıcı birisini arıyorsanız, benimle iletişime geçebilirsiniz!",
      hire: "E-Posta",
    },
    skills: {
      mTitle: "Yetenekler",
      skillItems: [
        {
          id: 0,
          title: "Java Script",
          descr:
            "JavaScript, HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan bir programlama dilidir. Web sitelerinin %97'sinden fazlası, web sayfası hareketleri için istemci tarafı JavaScript kullanır ve kullanılan kod genellikle üçüncü taraf kitaplıkları içerir.",
        },
        {
          id: 1,
          title: "React.JS",
          descr:
            "React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu bir javascript kütüphanesidir. Facebook önderliğinde bir geliştirici grubu tarafından geliştirilmekte olan React, Model-View-Controller prensibine uygun olarak oluşturulmuştur.",
        },
        {
          id: 2,
          title: "Node.JS",
          descr:
            "Node.js, açık kaynaklı, genelde sunucu tarafında çalışan ve ağ bağlantılı uygulamalar için geliştirilmiş bir çalıştırma ortamıdır. Node.js uygulamaları genelde istemci tarafı betik dili olan JavaScript kullanılarak geliştirilir.",
        },
      ],
    },
    profile: {
      mTitle: "Profil",
      pTitle: "Profil",

      birth: "Doğum Tarihi",
      city: "İkamet Şehri",
      edu: "Eğitim Durumu",
      eduDetail: "İstanbul Teknik Ünv. - Geomatik Müh. (İng.)",
      work: "Tercih Ettiği Rol",
      iTitle: "Hakkımda",
      info: "Merhaba, ben Uğur. Full-Stack yazılımcı olmak için çalışıyorum. Eğer öğrenmeye hevesli, yeni meydan okumalara açık, yaratıcı birisini arıyorsanız, benimle iletişime geçebilirsiniz!",
    },

    projects: {
      mTitle: "Projeler",
      pItems: [
        {
          id: 0,
          img: project1,
          title: "Workintech",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["redux", "axios"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        {
          id: 1,
          img: project2,
          title: "Random Jokes",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["redux", "axios", "react"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        {
          id: 2,
          img: project3,
          title: "Journey",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["redux", "axios", "react", "wordpress"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        {
          id: 3,
          img: project4,
          title: "Pizza House",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["HTML", "CSS", "JS"],
          gitLink: "https://github.com/unsalug/fsweb-s8-challenge-pizza",
          prLink: "https://github.com/unsalug/fsweb-s8-challenge-pizza",
        },
        {
          id: 3,
          img: project5,
          title: "Witflix",
          descr:
            "I will explain here what I want to talk about the project. This project was a very successful choice to express my functions in my run. Below are some of the special methods I use.",
          methods: ["HTML", "CSS", "JS"],
          gitLink: "https://github.com/unsalug/witflix",
          prLink: "https://github.com/unsalug/witflix",
        },
        
      ],
    },

    footer: {
      mTitle: "Bir sonraki projemizi birlikte yapmaya ne dersin?",
      mailAlt: "Bana E-Posta Gönder!",
    },
  },
};
