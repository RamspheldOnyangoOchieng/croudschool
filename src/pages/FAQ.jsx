import { useState } from "react";
import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const categories = [
    {
      title: "Admissions & Fees",
      items: [
        { q: "What is the admissions process?", a: "The process begins with an online enquiry, followed by a campus visit, a placement assessment for the student, and finally an interview with the Principal." },
        { q: "Do you offer scholarships?", a: "Yes, we offer merit-based scholarships for exceptionally talented students in Academics, Sports, and the Arts. Please contact the admissions office for current deadlines." },
        { q: "Are fees paid termly or annually?", a: "Fees are generally paid termly, though we offer a 5% discount for families who choose to pay the full annual tuition upfront." }
      ]
    },
    {
      title: "Academics & Life",
      items: [
        { q: "What curriculum do you follow?", a: "We follow an integrated international curriculum that combines the best of British standards (IGCSE & A-Levels) with global pedagogical innovations." },
        { q: "What is the student-teacher ratio?", a: "We maintain a strict 15:1 ratio to ensure that every student receives personalized attention and guidance." },
        { q: "What extracurricular activities are available?", a: "We offer over 40 clubs, including Robotics, Debate, Orchestral Music, Competitive Swimming, Soccer, and Drama." }
      ]
    },
    {
      title: "Campus & Logistics",
      items: [
        { q: "Where is the school located?", a: "We are located at Ngenda Rd, Tatu City, Nairobi. Tatu City provides a safe, controlled-access environment for our students." },
        { q: "Do you provide transport?", a: "Yes, we have a fleet of modern, GPS-tracked buses serving most neighborhoods in Nairobi and its environs." },
        { q: "How do you ensure campus safety?", a: "We have 24/7 professional security, biometric access controls, and a fully equipped medical center on-site." }
      ]
    }
  ];

  return (
    <Layout title="FAQ" description="Frequently Asked Questions about Wagon Group of Schools.">
      <PageHeader title="FAQ" subtitle="Everything you need to know about joining our community." />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          {categories.map((cat, catIdx) => (
            <div key={cat.title} style={{ marginBottom: '60px' }}>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '900', color: 'var(--red)', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {cat.title}
              </h2>
              <div className="faq-list">
                {cat.items.map((faq, i) => {
                  const itemIdx = `${catIdx}-${i}`;
                  return (
                    <div key={i} style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '16px', overflow: 'hidden', background: active === itemIdx ? '#fcfcfc' : 'white', transition: 'var(--transition)' }}>
                      <button
                        onClick={() => setActive(active === itemIdx ? null : itemIdx)}
                        style={{ width: '100%', padding: '24px', textAlign: 'left', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: '700', fontSize: '17px', color: active === itemIdx ? 'var(--red)' : 'var(--black)' }}
                      >
                        {faq.q}
                        <span style={{ fontSize: '24px', color: 'var(--red)', transition: 'transform 0.3s', transform: active === itemIdx ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                      </button>
                      <AnimatePresence>
                        {active === itemIdx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ padding: '0 24px 24px', color: 'var(--gray)', lineHeight: '1.8', fontSize: '16px' }}>
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
