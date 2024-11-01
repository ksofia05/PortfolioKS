import projectDesign from '../../public/img/projectDesign1.png'
import projectDevelop from '../../public/img/ImgDevelop1.png'

export const lenguages = {
    title: {
      home: "Diseñadora y Desarrolladora Web",
      about: "Sobre Mi",
      services: "Servicios",
      habilities: "Mis Habilidades",   
      projects: "Proyectos",
    },
    navbar: [
        {
          "name": "Home",
          "link": "#home"
        },
        {
          "name": "About Me",
          "link": "#about"
        },
        {
          "name": "Services",
          "link": "#services"
        },
        {
          "name": "Projects",
          "link": "#projects"
        }
      ],

    aboutMe: [
      {
        "title": "Sobre mi",
        "description": "Hola!, soy Karen Lizcano, una apasionada Desarrolladora front-end y Diseñadora con un fuerte enfoque en la creación de interfaces de usuario interactivas y responsivas. Me encanta transformar ideas creativas en aplicaciones web funcionales!"
      }

    ],

    services: [
      {
          "title": "Desarrollo Front-end",
          "description": "Creación de interfaces de usuario interactivas y responsivas utilizando tecnologías modernas."
      },
      {
          "title": "Diseño UI/UX",
          "description": "Diseño de experiencias de usuario intuitivas y atractivas, enfocadas en la usabilidad y la estética."
      },
      {
          "title": "Metodologías Ágiles",
          "description": "Implementación de metodologías ágiles para mejorar la eficiencia y la colaboración en proyectos."
      },
      {
          "title": "Trabajo en Equipo",
          "description": "Colaboración efectiva en equipos multidisciplinarios para lograr objetivos comunes."
      }
  ],

    skills: [
    {
      "name": "HTML",
      "level": "Avanzado"
    },
    {
      "name": "CSS",
      "level": "Avanzado"
    },
    {
      "name": "JavaScript",
      "level": "Intermedio"
    },
    {
      "name": "React",
      "level": "Intermedio"
    },
    {
      "name": "Vue.js",
      "level": "Principiante"
    },

    {
        "name": "figma",
        "level": "Intermedio"
    },

    {
        "name":"Sass",
        "level": "Principiante"
    },

    {
        "name": "GitHub",
        "level": "Intermedio"
    },

    {
      "name": "Firebase",
      "level": "Intermedio"
    },

    {
      "name": "Spline",
      "level":"Principiante"
    },
    ],
    projects: [
      {
        "title": "Diseño 1",
        "description": "Proyecto Formativo Sena",
        "image": projectDesign,
        "link": "https://www.figma.com/proto/4h3hUjamMbiVHMQx2yLUfU/Pagina-Est%C3%A1tica?node-id=43-198&starting-point-node-id=43%3A198&t=g25moyJW6A8eljdv-1",
        "button": "Ver Diseño"
      },
      {
        "title": "INVENTECH",
        "description": "Desarrollo de una aplicación web interactiva utilizando Vue.js, con componentes reutilizables y una interfaz de usuario responsiva.",
        "image": projectDevelop,  // Cambia a la imagen local
        "link": "https://www.figma.com/design/4h3hUjamMbiVHMQx2yLUfU/Pagina-Estática?node-id=0-1&node-type=canvas&t=PddvviqndiD8Bsi8-0",  // Enlace correcto
        "button": "Ver Proyecto"
      }
    ]    
}