import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BrainCircuit,
  Clock3,
  Monitor,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Palette,
  Phone,
  Play,
  School,
  Sparkles,
  Clapperboard,
  Trophy,
  Users,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { activities, gallery } from './data/activities'
import { feeNotes, feeRows } from './data/fees'
import { navigation, school } from './data/school'
import { InstagramIcon as Instagram } from './components/InstagramIcon'
import { Faq } from './sections/Faq'

const whatsappUrl = `https://wa.me/${school.phoneInternational}?text=${encodeURIComponent(school.whatsappMessage)}`
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.address)}`

const activityIcons: Record<string, LucideIcon> = {
  dance: Palette,
  music: Music2,
  drama: Clapperboard,
  chess: BrainCircuit,
  computer: Monitor,
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`section-heading ${centered ? 'section-heading--center' : ''}`}>
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState('Todas')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visibleFees = useMemo(
    () => selectedGrade === 'Todas' ? feeRows : feeRows.filter((row) => row.grade === selectedGrade),
    [selectedGrade],
  )

  useEffect(() => {
    document.body.style.overflow = lightboxIndex === null ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null)
      if (event.key === 'ArrowRight') setLightboxIndex((index) => index === null ? null : (index + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setLightboxIndex((index) => index === null ? null : (index - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement-bar">
        <div className="site-container announcement-inner flex items-center justify-between">
          <span><Sparkles size={15} /> Inscrições abertas para o ano lectivo de 2027</span>
          <a href="#inscricoes">Saiba mais <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container nav-container">
          <a className="brand flex items-center gap-2" href="#inicio" aria-label="Externato Fátima - início" onClick={closeMenu}>
            <img src="/images/simbolo-externato-fatima.jpg" alt="Símbolo do Externato Fátima" />
            <span className="brand-copy"><strong>Externato <em>Fátima</em></strong><small>ENSINO PRIMÁRIO &amp; SECUNDÁRIO</small></span>
          </a>

          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <MessageCircle size={16} /> Fale connosco
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-pattern hero-pattern--one" />
          <div className="hero-pattern hero-pattern--two" />
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <span className="hero-kicker"><span className="kicker-dot" /> O lugar onde o futuro começa</span>
              <h1>Aprender hoje.<br /><span>Transformar</span><br />o amanhã.</h1>
              <p className="hero-description">Uma escola que valoriza o conhecimento, a criatividade e a formação integral de cada aluno.</p>
              <div className="hero-tags">
                <span><BookOpen size={15} /> Ensino Primário</span>
                <span><GraduationCap size={16} /> Ensino Secundário</span>
              </div>
              <div className="hero-actions flex flex-wrap gap-3">
                <a className="button button-primary" href="#inscricoes">Inscrições 2027 <ArrowRight size={18} /></a>
                <a className="button button-light" href="#sobre">Conheça a escola <ArrowDown size={17} /></a>
              </div>
              <div className="hero-footnote"><span className="hero-footnote-icon"><Heart size={15} fill="currentColor" /></span> Educação, valores e oportunidades para crescer.</div>
            </div>

            <div className="hero-art" aria-label="Fotografias do ambiente escolar">
              <div className="hero-photo hero-photo-main">
                <img src="/images/galeria/sala-de-aula.jpg" alt="Sala de aula do Externato Fátima" />
                <span className="photo-label"><School size={15} /> Um ambiente para aprender</span>
              </div>
              <div className="hero-photo hero-photo-small">
                <img src="/images/galeria/laboratorio-informatica.jpg" alt="Actividade de informática" />
              </div>
              <div className="hero-sticker hero-sticker-yellow"><span>2027</span><small>ANO LECTIVO</small></div>
              <div className="hero-sticker hero-sticker-white"><Sparkles size={19} /><span>Aprender<br />faz crescer!</span></div>
              <div className="hero-orbit" />
              <div className="hero-star hero-star-one">✳</div>
              <div className="hero-star hero-star-two">✦</div>
            </div>
          </div>
          <div className="hero-bottom-wave" />
        </section>

        <section className="quick-facts" aria-label="Informações principais">
          <div className="site-container quick-facts-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="quick-fact"><span className="fact-icon fact-icon-red"><BookOpen size={21} /></span><div><strong>1.ª à 12.ª</strong><small>Classe de ensino</small></div></div>
            <div className="quick-fact"><span className="fact-icon fact-icon-blue"><Palette size={21} /></span><div><strong>5 actividades</strong><small>Extracurriculares em destaque</small></div></div>
            <div className="quick-fact"><span className="fact-icon fact-icon-yellow"><Trophy size={21} /></span><div><strong>Formação integral</strong><small>Conhecimento e valores</small></div></div>
            <div className="quick-fact"><span className="fact-icon fact-icon-green"><MapPin size={21} /></span><div><strong>Matola</strong><small>Bairro Nkobe</small></div></div>
          </div>
        </section>

        <section className="about-section section-pad" id="sobre">
          <div className="site-container about-grid">
            <div className="about-visual">
              <div className="about-image-main"><img src="/images/galeria/actividade-cultural.jpg" alt="Alunos numa actividade cultural" /></div>
              <div className="about-image-small"><img src="/images/galeria/premiacao.jpg" alt="Medalhas de participação escolar" /></div>
              <div className="about-stamp"><span>EXTERNATO</span><strong>FÁTIMA</strong><small>EDUCAÇÃO COM PROPÓSITO</small></div>
              <div className="about-deco">✳</div>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="Quem somos" title="Mais do que ensinar, queremos inspirar." />
              <p className="body-lead">O Externato Fátima é uma escola privada vocacionada ao Ensino Primário e Secundário, da 1.ª à 12.ª classe.</p>
              <p>Para além das disciplinas curriculares, valorizamos experiências que ajudam os alunos a descobrir talentos, desenvolver competências e crescer com confiança.</p>
              <div className="values-list">
                <div><span className="value-check"><Check size={15} /></span><span><strong>Ensino de qualidade</strong><small>Aprendizagem e desenvolvimento académico.</small></span></div>
                <div><span className="value-check"><Check size={15} /></span><span><strong>Formação integral</strong><small>Oportunidades para desenvolver diferentes talentos.</small></span></div>
                <div><span className="value-check"><Check size={15} /></span><span><strong>Disciplina e valores</strong><small>Responsabilidade, respeito e convivência.</small></span></div>
              </div>
              <a href="#actividades" className="text-link">Descubra as nossas actividades <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="education-section section-pad" id="ensino">
          <div className="site-container">
            <SectionHeading eyebrow="Percurso académico" title="Uma base sólida para cada etapa." description="Acompanhamos o percurso escolar dos alunos no Ensino Primário e Secundário, da 1.ª à 12.ª classe." centered />
            <div className="education-cards grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="education-card education-card-primary">
                <div className="education-card-visual"><img src="/images/galeria/sala-de-aula.jpg" alt="Sala de aula" /><span className="education-card-icon"><BookOpen size={23} /></span><span className="education-number">01</span></div>
                <div className="education-card-body"><span className="card-eyebrow">Aprender e descobrir</span><h3>Ensino Primário</h3><p>Uma etapa fundamental para consolidar conhecimentos, desenvolver hábitos de aprendizagem e despertar a curiosidade.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Pedir informações <ArrowUpRight size={16} /></a></div>
              </article>
              <article className="education-card education-card-secondary">
                <div className="education-card-visual"><img src="/images/galeria/laboratorio-informatica.jpg" alt="Espaço de informática" /><span className="education-card-icon"><GraduationCap size={24} /></span><span className="education-number">02</span></div>
                <div className="education-card-body"><span className="card-eyebrow">Preparar para o futuro</span><h3>Ensino Secundário</h3><p>Uma etapa de aprofundamento académico e desenvolvimento de competências para novos desafios e oportunidades.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Pedir informações <ArrowUpRight size={16} /></a></div>
              </article>
            </div>
            <div className="education-note"><span><Sparkles size={18} /></span><p><strong>Um percurso que acompanha o crescimento.</strong> Consulte a Secretaria para informações sobre classes disponíveis, admissão e organização pedagógica.</p></div>
          </div>
        </section>

        <section className="activities-section section-pad" id="actividades">
          <div className="site-container">
            <div className="activities-topline"><span className="eyebrow"><span /> Aprendizagem para além da sala</span><span className="activities-doodle">✳</span></div>
            <div className="activities-heading-row"><div><h2>Talentos que ganham<br /><span>espaço para brilhar.</span></h2></div><p>As actividades extracurriculares complementam a formação académica e estimulam a criatividade, o raciocínio, a expressão e o contacto com a tecnologia.</p></div>
            <div className="activities-grid grid gap-3">
              {activities.map((activity, index) => {
                const Icon = activityIcons[activity.icon]
                return (
                  <article className={`activity-card activity-card-${activity.accent}`} key={activity.title}>
                    <div className="activity-image">
                      {activity.image ? <img src={activity.image} alt={activity.title} /> : <div className="activity-image-placeholder"><Icon size={54} /></div>}
                      <span className="activity-index">0{index + 1}</span>
                    </div>
                    <div className="activity-card-content"><span>{activity.subtitle}</span><h3>{activity.title}</h3><p>{activity.description}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Saber mais sobre ${activity.title}`}><ArrowUpRight size={18} /></a></div>
                  </article>
                )
              })}
            </div>
            <div className="activities-bottom-note"><div className="note-icon"><Users size={20} /></div><p><strong>Mais oportunidades para desenvolver talentos.</strong><br />Consulte a Secretaria para confirmar os horários, condições e actividades disponíveis no ano lectivo.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a escola <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="admissions-section section-pad" id="inscricoes">
          <div className="site-container admissions-grid">
            <div className="admissions-copy">
              <span className="admissions-pill"><CalendarDays size={15} /> Ano lectivo 2027</span>
              <h2>O próximo capítulo<br />da sua criança<br /><span>começa aqui.</span></h2>
              <p>As inscrições estão abertas para a 1.ª à 12.ª classe. Entre em contacto com a Secretaria para conhecer os requisitos, os procedimentos e a disponibilidade de vagas.</p>
              <div className="admissions-points"><div><Check size={16} /> Inscrição de novos alunos</div><div><Check size={16} /> Renovação de matrícula</div><div><Check size={16} /> Informações sobre requisitos</div></div>
              <div className="admissions-actions flex flex-wrap gap-3"><a className="button button-yellow" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar informações <MessageCircle size={17} /></a><a className="button button-outline-light" href="/images/cartaz-inscricoes-2027.jpg" target="_blank" rel="noreferrer">Ver cartaz oficial <ArrowUpRight size={17} /></a></div>
              <small className="admissions-footnote">O processo de inscrição/renovação indicado no cartaz é presencial. Confirme os requisitos actualizados junto da Secretaria.</small>
            </div>
            <div className="admissions-poster-wrap">
              <div className="poster-tape" />
              <a className="admissions-poster" href="/images/cartaz-inscricoes-2027.jpg" target="_blank" rel="noreferrer" aria-label="Abrir cartaz oficial de inscrições de 2027">
                <img src="/images/cartaz-inscricoes-2027.jpg" alt="Cartaz do Externato Fátima: inscrições abertas para 2027, da 1.ª à 12.ª classe" />
                <span className="poster-open"><Play size={14} fill="currentColor" /> Abrir cartaz</span>
              </a>
              <div className="poster-caption"><Sparkles size={16} /> Inscrições e renovações 2027</div>
            </div>
            <div className="requirements-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="requirement-card">
                <div className="requirement-title"><span><BookOpen size={18} /></span><div><small>Documentação</small><h3>Novos ingressos</h3></div></div>
                <ul>
                  <li>Fotocópia do Bilhete de Identidade do aluno.</li>
                  <li>Três fotografias tipo passe.</li>
                  <li>Fotocópia do BI e número de NUIT do encarregado de educação.</li>
                  <li>Boletim de passagem da classe anterior.</li>
                  <li>Informação pedagógica das classes anteriores.</li>
                </ul>
                <small className="requirement-note">O cartaz indica que todos os documentos devem estar autenticados.</small>
              </article>
              <article className="requirement-card requirement-card-renewal">
                <div className="requirement-title"><span><CalendarDays size={18} /></span><div><small>Documentação</small><h3>Renovação</h3></div></div>
                <ul>
                  <li>BI do encarregado de educação.</li>
                  <li>Número de NUIT do encarregado de educação.</li>
                </ul>
                <small className="requirement-note">A apresentação é indicada no cartaz para o acto da renovação.</small>
              </article>
            </div>
          </div>
        </section>

        <section className="fees-section section-pad" id="emolumentos">
          <div className="site-container">
            <div className="fees-header">
              <div><SectionHeading eyebrow="Informação financeira" title="Emolumentos 2027" description="Consulte os valores indicados no cartaz de emolumentos fornecido pelo Externato Fátima. Valores apresentados em meticais (MT)." /></div>
              <a className="button button-blue" href="/images/cartaz-emolumentos-2027.jpg" target="_blank" rel="noreferrer">Ver cartaz completo <ArrowUpRight size={17} /></a>
            </div>
            <div className="fee-filter-row"><label htmlFor="grade-filter">Consultar por classe</label><div className="select-wrap"><select id="grade-filter" value={selectedGrade} onChange={(event) => setSelectedGrade(event.target.value)}><option>Todas</option>{feeRows.map((row) => <option key={row.grade}>{row.grade}</option>)}</select><ChevronDown size={17} /></div><span className="fee-unit">Valores em MT</span></div>
            <div className="fees-table-wrap">
              <table className="fees-table">
                <thead><tr><th>Classe</th><th>Inscrição<br />novos ingressos</th><th>Renovação<br />alunos internos</th><th>Propina<br />mensal</th><th>Cartão de<br />estudante</th><th>Certificado<br />académico</th><th>Taxa de<br />exame</th><th>Caderneta</th><th>Caderno<br />caligráfico</th></tr></thead>
                <tbody>{visibleFees.map((row) => <tr key={row.grade}><th scope="row">{row.grade}</th><td>{row.admission}</td><td>{row.renewal}</td><td className="fee-highlight">{row.monthly}</td><td>{row.card}</td><td>{row.certificate}</td><td>{row.exam}</td><td>{row.notebook}</td><td>{row.calligraphy}</td></tr>)}</tbody>
              </table>
            </div>
            <div className="fees-footer"><div className="fees-notes"><h3><span><Sparkles size={15} /></span> Notas importantes</h3><ul>{feeNotes.map((note) => <li key={note}>{note}</li>)}</ul><p className="fee-disclaimer">— indica que não há valor indicado no cartaz disponibilizado. Confirme todos os valores e condições com a Secretaria antes de efectuar qualquer pagamento.</p></div><div className="fees-contact-card"><div className="fees-contact-icon"><Phone size={22} /></div><div><strong>Precisa de ajuda com os emolumentos?</strong><p>A Secretaria pode esclarecer dúvidas sobre pagamentos e documentos necessários.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Contactar a Secretaria <ArrowRight size={16} /></a></div></div></div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="galeria">
          <div className="site-container">
            <div className="gallery-heading"><SectionHeading eyebrow="Momentos que contam" title="A vida no Externato Fátima." description="Um olhar sobre espaços e actividades apresentados nos materiais institucionais da escola." /><div className="gallery-doodle">✳</div></div>
            <div className="gallery-grid grid gap-3">
              {gallery.map((item, index) => (
                <button className={`gallery-item gallery-item-${index + 1}`} key={item.src} onClick={() => setLightboxIndex(index)} aria-label={`Ampliar fotografia: ${item.label}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <span className="gallery-overlay"><span>{item.label}</span><span className="gallery-zoom"><ArrowUpRight size={18} /></span></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <Faq />

        <section className="contact-section section-pad" id="contactos">
          <div className="site-container">
            <div className="contact-card">
              <div className="contact-decoration contact-decoration-one">✳</div><div className="contact-decoration contact-decoration-two">✦</div>
              <div className="contact-copy"><span className="contact-kicker">Estamos aqui para ajudar</span><h2>Vamos conversar<br /><span>sobre o futuro?</span></h2><p>Fale com a nossa Secretaria para obter informações sobre admissões, emolumentos e actividades escolares.</p><a className="button button-yellow" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Conversar pelo WhatsApp</a></div>
              <div className="contact-details grid gap-4">
                <div className="contact-detail"><span><Phone size={19} /></span><div><small>Telefone / WhatsApp</small><a href={`tel:+${school.phoneInternational}`}>{school.phoneDisplay}</a></div></div>
                <div className="contact-detail"><span><Mail size={19} /></span><div><small>E-mail da Secretaria</small><a href={`mailto:${school.email}`}>{school.email}</a></div></div>
                <div className="contact-detail"><span><MapPin size={19} /></span><div><small>Visite-nos</small><a href={mapUrl} target="_blank" rel="noreferrer">{school.address}</a></div></div>
                <div className="contact-detail"><span><Instagram size={19} /></span><div><small>Instagram</small><a href={school.instagram} target="_blank" rel="noreferrer">{school.instagramHandle}</a></div></div>
              </div>
            </div>
            <div className="contact-bottom"><span><Clock3 size={16} /> Atendimento presencial: confirme o horário com a Secretaria.</span><a href={mapUrl} target="_blank" rel="noreferrer">Ver localização no mapa <ArrowUpRight size={15} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <a className="footer-brand" href="#inicio"><img src="/images/simbolo-externato-fatima.jpg" alt="" /><span><strong>Externato Fátima</strong><small>Ensino Primário &amp; Secundário</small></span></a>
          <p>Educação que inspira, valores que transformam.</p>
          <div className="footer-links"><a href="#sobre">Sobre nós</a><a href="#actividades">Actividades</a><a href="#inscricoes">Inscrições</a><a href="#contactos">Contactos</a></div>
          <a className="footer-instagram" href={school.instagram} target="_blank" rel="noreferrer" aria-label="Instagram do Externato Fátima"><Instagram size={19} /></a>
        </div>
        <div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Externato Fátima. Todos os direitos reservados.</span><span>Matola, Moçambique</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar o Externato Fátima pelo WhatsApp"><MessageCircle size={23} /><span>Fale connosco</span></a>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotografias" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Fechar galeria"><X size={24} /></button>
          <button className="lightbox-arrow lightbox-prev" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length) }} aria-label="Fotografia anterior"><ChevronLeft size={28} /></button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} />
            <figcaption>{gallery[lightboxIndex].label}</figcaption>
          </figure>
          <button className="lightbox-arrow lightbox-next" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % gallery.length) }} aria-label="Fotografia seguinte"><ChevronRight size={28} /></button>
        </div>
      )}
    </>
  )
}

export default App
