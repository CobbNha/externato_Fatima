export type FeeRow = {
  grade: string
  admission: string
  renewal: string
  monthly: string
  card: string
  certificate: string
  exam: string
  notebook: string
  calligraphy: string
}

// Transcrição do cartaz de Emolumentos 2027 enviado pela escola.
// Confirme os valores com a Secretaria antes da publicação definitiva.
export const feeRows: FeeRow[] = [
  { grade: '1.ª classe', admission: '1.500', renewal: '—', monthly: '1.900', card: '300', certificate: '—', exam: '—', notebook: '300', calligraphy: '600' },
  { grade: '2.ª classe', admission: '2.500', renewal: '2.200', monthly: '2.000', card: '300', certificate: '—', exam: '—', notebook: '300', calligraphy: '600' },
  { grade: '3.ª classe', admission: '2.500', renewal: '2.200', monthly: '2.100', card: '300', certificate: '—', exam: '—', notebook: '300', calligraphy: '600' },
  { grade: '4.ª classe', admission: '2.500', renewal: '2.200', monthly: '2.500', card: '300', certificate: '—', exam: '—', notebook: '300', calligraphy: '—' },
  { grade: '5.ª classe', admission: '2.500', renewal: '2.200', monthly: '2.600', card: '300', certificate: '—', exam: '—', notebook: '300', calligraphy: '—' },
  { grade: '6.ª classe', admission: '2.500', renewal: '2.200', monthly: '2.700', card: '300', certificate: '1.000', exam: '500', notebook: '300', calligraphy: '—' },
  { grade: '7.ª classe', admission: '2.500', renewal: '2.200', monthly: '4.000', card: '300', certificate: '—', exam: '—', notebook: '—', calligraphy: '—' },
  { grade: '8.ª classe', admission: '2.500', renewal: '2.200', monthly: '4.000', card: '300', certificate: '—', exam: '—', notebook: '—', calligraphy: '—' },
  { grade: '9.ª classe', admission: '2.500', renewal: '2.200', monthly: '4.000', card: '300', certificate: '1.000', exam: '700', notebook: '—', calligraphy: '—' },
  { grade: '10.ª classe', admission: '2.500', renewal: '2.200', monthly: '4.200', card: '300', certificate: '—', exam: '—', notebook: '—', calligraphy: '—' },
  { grade: '11.ª classe', admission: '2.500', renewal: '2.200', monthly: '4.200', card: '300', certificate: '—', exam: '—', notebook: '—', calligraphy: '—' },
  { grade: '12.ª classe', admission: '2.500', renewal: '2.200', monthly: '4.200', card: '300', certificate: '1.000', exam: '900', notebook: '—', calligraphy: '—' },
]

export const feeNotes = [
  'Os valores referentes à inscrição, renovação e propinas escolares pagos ao Externato não são reembolsáveis em caso de desistência.',
  'No acto de inscrição/renovação deve ser paga a primeira propina mensal e os outros emolumentos descritos na tabela.',
  'O pagamento das propinas segue o regime pré-pago, totalizando 10 propinas por ano lectivo.',
  'O processo de inscrição/renovação é presencial e o pagamento deve ser feito em Cash/POS.',
]
