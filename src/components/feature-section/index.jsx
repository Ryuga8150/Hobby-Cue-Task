import { IoIosPeople, IoIosPin } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa6";
import Card from "../reusable/card";
import "./feature-section.css";

const cards = [
  {
    icon: IoIosPeople,

    iconColor: "#8064A2",
    title: "People",
    description:
      "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
    buttonText: "Connect",
  },
  {
    icon: IoIosPin,

    iconColor: "#77933C",
    title: "Place",
    description:
      "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
    buttonText: "Meet up",
  },
  {
    icon: IoBagHandle,

    iconColor: "#C0504D",
    title: "Product",
    description:
      "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
    buttonText: "Get it",
  },
  {
    icon: FaCalendarCheck,
    iconColor: "#0096C8",
    title: "Program",
    description:
      "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
    buttonText: "Attend",
  },
];

const FeatureSection = () => {
  return (
    <div className="card-section-container">
      {cards.map((card, ind) => (
        <Card key={ind} card={card} />
      ))}
    </div>
  );
};

export default FeatureSection;
