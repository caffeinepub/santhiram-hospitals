import { useGetTestimonials } from "@/hooks/useQueries";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const sampleTestimonials = [
  {
    patientName: "Venkata Rao",
    message:
      "Exceptional care from the entire team. Dr. Rajesh Kumar performed my cardiac procedure with utmost precision. The hospital is very well-equipped and the staff is incredibly caring. I'm grateful to Santhiram Hospital for giving me a second chance at life.",
    rating: BigInt(5),
  },
  {
    patientName: "Lakshmi Devi",
    message:
      "I delivered my baby at Santhiram Hospital and the experience was wonderful. Dr. Anitha and the nursing staff were so supportive throughout. The facilities are top-notch and very clean. Highly recommend to all expecting mothers in Nandyal!",
    rating: BigInt(5),
  },
  {
    patientName: "Subrahmanyam P.",
    message:
      "After my accident, I was rushed to Santhiram's emergency department. The quick response and expert orthopedic care saved my leg. Dr. Suresh Reddy and his team are truly exceptional. Thank you for everything!",
    rating: BigInt(5),
  },
  {
    patientName: "Padma K.",
    message:
      "My mother was treated here for a serious neurological condition. The neurology team was very attentive and explained everything clearly. The hospital has all the advanced diagnostic equipment. We are very satisfied.",
    rating: BigInt(4),
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { data: backendTestimonials } = useGetTestimonials();
  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials
      : sampleTestimonials;
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = testimonials
    .slice(current, current + 3)
    .concat(
      current + 3 > testimonials.length
        ? testimonials.slice(0, (current + 3) % testimonials.length)
        : [],
    );

  return (
    <section className="py-20 bg-hospital-bg" data-ocid="testimonials.section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Patient Stories
          </span>
          <h2 className="font-serif text-4xl font-bold text-hospital-heading mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-hospital-muted max-w-2xl mx-auto">
            Thousands of patients trust Santhiram Hospital for their healthcare
            needs. Here are a few of their stories.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.slice(0, 3).map((t, i) => (
              <AnimatePresence key={`t-${current}-${t.patientName}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-card"
                  data-ocid={`testimonials.item.${i + 1}`}
                >
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-hospital-muted text-sm leading-relaxed mb-5 italic">
                    "{t.message}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-hospital-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {t.patientName[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-hospital-heading text-sm">
                        {t.patientName}
                      </div>
                      <StarRating rating={Number(t.rating)} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-hospital-border hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center transition-all"
              data-ocid="testimonials.pagination_prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  type="button"
                  key={t.patientName}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-hospital-border"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border border-hospital-border hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center transition-all"
              data-ocid="testimonials.pagination_next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
