import { useState } from "react";
import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    { q: "What curriculum do you follow?", a: "We follow an integrated international curriculum that combines the best of British standards (IGCSE & A-Levels) with local and global insights." },
    { q: "Where is the school located?", a: "We are located at Ngenda Rd, Tatu City, Nairobi, Kenya." },
    { q: "What is the student-teacher ratio?", a: "We maintain an average ratio of 15:1 to ensure personalized attention for every student." },
    { q: "Do you offer sports and arts?", a: "Yes, we have state-of-the-art facilities for sports (soccer, swimming, tennis) and a vibrant arts program spanning music, drama, and visual arts." },
    { q: "Are there boarding facilities?", a: "Currently, we are a day school with specialized transport services across Nairobi." }
  ];

  return (
    <Layout title="FAQ" description="Frequently Asked Questions about Wagon Group of Schools.">
      <PageHeader title="FAQ" subtitle="Everything you need to know." />
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setActive(active === i ? null : i)}
                  style={{ width: '100%', padding: '20px', textAlign: 'left', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: '700', fontSize: '16px' }}
                >
                  {faq.q}
                  <span style={{ fontSize: '20px', color: 'var(--red)' }}>{active === i ? '−' : '+'}</span>
                </button>
                {active === i && (
                  <div style={{ padding: '0 20px 20px', color: 'var(--gray)', lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
