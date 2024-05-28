import Card from "../reusable/card";
import { IoAddCircle } from "react-icons/io5";

import "./add-testimonial-section.css";

const card = {
  icon: IoAddCircle,

  iconColor: "#0096C8",
  title: "Add your own",
  description:
    "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page.",
  buttonText: "Add new",
};

const AddTestimonialSection = () => {
  return (
    <div className="testimonial-section-container">
      <Card card={card} />
    </div>
  );
};

export default AddTestimonialSection;
