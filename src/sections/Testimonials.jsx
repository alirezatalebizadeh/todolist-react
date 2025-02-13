import TestimonialItem from "../components/TestimonialItem";
import { testimonials } from "../constants";



const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2)

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-20">
      <div className="container block lg:flex lg:flex-col  lg:py-20">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="caption mb-5 max-md:mb-2.5">دیوار عشق</p>
          <h3 className="h3 max-md:h5 text-[#EAEDFF]">گفتارهایی از طرفداران ما</h3>
        </div>
      </div>
      <div className="px-10 testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
        <div className="testimonials_group-after flex-50">
          {testimonials.slice(0, halfLength).map((testimonial, index) => (
            <TestimonialItem
              key={testimonial.id}
              item={testimonial}
              containerClassName="last:after:hidden last:after:max-md:block" />
          ))}
        </div>
        <div className="flex-50">
          {testimonials.slice(halfLength).map((testimonial) => (
            <TestimonialItem
              key={testimonial.id}
              item={testimonial}
              containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
