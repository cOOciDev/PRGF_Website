/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import CEO from "../assets/images/TeamMembers/CEO.jpg";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import Finance from "../assets/images/TeamMembers/Finance.jpg";
import ProjectManager from "../assets/images/TeamMembers/Project-manager.jpg";
import Frontend1 from "../assets/images/TeamMembers/Frontend1.jpg";
import Frontend2 from "../assets/images/TeamMembers/Frontend2.jpg";
import Mehdi from "../assets/images/TeamMembers/Mehdi.jpg";
// import Backend1 from "../assets/images/TeamMembers/Backend1.jpg";
// import Backend2 from "../assets/images/TeamMembers/Backend2.jpg";
// import Mobile1 from "../assets/images/TeamMembers/Mobile1.jpg";
// import Mobile2 from "../assets/images/TeamMembers/Mobile2.jpg";
// import UIUX1 from "../assets/images/TeamMembers/UIUX1.jpg";
// import UIUX2 from "../assets/images/TeamMembers/UIUX2.jpg";

export const Services = [
  {
    title: "طراحی وبسایت",
    imageUrl: Web,
    animation: "left",
  },
  {
    title: "طراحی نرم افزار ",
    imageUrl: Mobile,
    animation: "up",
  },
  {
    title: "طراحی رابط کاربری",
    imageUrl: UIUX,
    animation: "right",
  },
];

export const Portfolios = [
  {
    id: "asd1293uasdads1",
    title: "Recruiting App",
    imageUrl: Recruiting,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15164950-Recruiting-app",
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Stream+",
    imageUrl: Stream,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15276430-Stream",
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Freelance",
    imageUrl: Freelance,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
  },
  {
    id: "asd1293ufgdfgs4",
    title: "Aura",
    imageUrl: Aura,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
  },
  {
    id: "asd1293ulskmnb5",
    title: "Surtido Rico",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15173118-Surtido-Rico",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Courses Management",
    imageUrl: ManagementApp,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit:
      "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
  },
];

export const Advantages = [
  [
    {
      title: "ارتباطی",
      description:
        "ما ایده ها و پیشرفت پروژه خود را برای روشن کردن آن به اشتراک می گذاریم.",
      imageUrl: Communicative,
    },
    {
      title: "مدیریت",
      description:
        "ما پروژه خود را به درستی مدیریت می کنیم تا پروژه خود را به خوبی انجام دهیم.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "همکاری",
      description:
        "تیم ما بسیار با هم همکاری می کنند تا پروژه ما به خوبی انجام شود.",
      imageUrl: Collaborative,
    },
    {
      title: "مورد علاقه",
      description:
        "ما پروژه های زیادی را انجام داده ایم و همه مشتریان ما آن را دوست دارند.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "ساشا رز",
    company: "مالک، شرکت نقشه برداری",
    testimoni:
      "!ممنون از استودیو پویاگران رایان گستر فرزان، شما بهترین هستید! به کار عالی ادامه دهید",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it’s been great working with Racxstudio.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Racxstudio is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: "مهدی اسپانلو",
    position: "CEO",
    imageUrl: CEO,
  },
  {
    name: "علی فتحی",
    position: "🔧 Developer",
    imageUrl: HRD,
  },
  {
    name: "مهدی ابراهیمی",
    position: "🔧 Developer",
    imageUrl: Mehdi,
  },
  {
    name: "علیرضا باقری",
    position: "Project Manager",
    imageUrl: ProjectManager,
  },
  {
    name: "محمد حسین اسپانلو",
    position: "Front-end Developer",
    imageUrl: Frontend1,
  },
  {
    name: "علیرضا شوبی",
    position: "Front-end Developer",
    imageUrl: Frontend2,
  },
  // {
  //   name: "Hawkins Jim",
  //   position: "Back-end Developer",
  //   imageUrl: Backend1,
  // },
  // {
  //   name: "Don Bizaro",
  //   position: "Back-end Developer",
  //   imageUrl: Backend2,
  // },
  // {
  //   name: "Bill Markinson",
  //   position: "Mobile Developer",
  //   imageUrl: Mobile1,
  // },
  // {
  //   name: "Igor Kavarov",
  //   position: "Mobile Developer",
  //   imageUrl: Mobile2,
  // },
  // {
  //   name: "Freddie Curl",
  //   position: "UI/UX Designer",
  //   imageUrl: UIUX2,
  // },
  // {
  //   name: "Monica Lovegood",
  //   position: "UI/UX Designer",
  //   imageUrl: UIUX1,
  // },
];
