import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faq'

export function Faq() {
  return (
    <section className="faq-section section-pad" id="perguntas">
      <div className="site-container faq-grid">
        <div className="section-heading">
          <span className="eyebrow"><span />Perguntas frequentes</span>
          <h2>Tem dúvidas? Nós respondemos.</h2>
          <p>Respostas rápidas às perguntas mais comuns dos pais e encarregados de educação.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
