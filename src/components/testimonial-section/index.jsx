import { RiDoubleQuotesL } from "react-icons/ri";
import { IoMdPlayCircle } from "react-icons/io";
import "./testimonial-section.css";

const TestimonialSection = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <div className="header d-flex align-items-center justify-content-start">
          <div className="icon-wrapper d-flex align-items-center justify-content-center">
            <RiDoubleQuotesL className="icon" />
          </div>
          <div className="title">Testimonials</div>
        </div>
        <div className="testimonial-text">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </div>
        <div className="d-flex flex-row-reverse align-items-center justify-content-between">
          <div className="profile d-flex align-items-center">
            <img className="profile-img" src="/profile.jpg" alt="profile" />
            <div className="profile-info d-flex flex-column align-items-center">
              <div className="name">Shubha Nagarajan</div>
              <div className="occupation">Classical Dancer</div>
            </div>
          </div>
          <div className="media-controls d-flex align-items-center justify-content-between">
            <div className="media-icon-wrapper d-flex align-items-center justify-content-center">
              <IoMdPlayCircle className="media-icon" />
            </div>
            <div className="d-flex align-items-center media-slider-wrapper">
              <input type="range" className="media-slider" />
              <span className="media-slider-text">0.00</span>
            </div>
            <div className="media-profile-wrapper">
              <img
                className="media-profile-img"
                src="/profile.jpg"
                alt="media profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
