export type FormationType = 'pos-graduacao' | 'extensao' | 'desenvolvimento';

export interface VerifiedFormation {
  id: string;
  title: string;
  institution: string;
  year: number;
  type: FormationType;
  typeLabel: string;
  image: string;
  description?: string;
  verified: true;
}

export interface UnverifiedFormation {
  id: string;
  title: string;
  institution?: string;
  status: 'pending_verification' | 'in_progress';
  notes: string;
}

/**
 * 7 formações devidamente comprovadas com certificados oficiais e dados pessoais tratados.
 */
export const verifiedFormations: VerifiedFormation[] = [
  {
    id: 'pos-antropologia',
    title: 'Pós-graduação lato sensu em Antropologia',
    institution: 'FACPRISMA',
    year: 2025,
    type: 'pos-graduacao',
    typeLabel: 'Pós-Graduação Lato Sensu',
    image: '/assets/certificados/certificado-pos-antropologia-facprisma.webp',
    verified: true,
  },
  {
    id: 'pos-filosofia',
    title: 'Pós-graduação lato sensu em Filosofia',
    institution: 'FACPRISMA',
    year: 2024,
    type: 'pos-graduacao',
    typeLabel: 'Pós-Graduação Lato Sensu',
    image: '/assets/certificados/certificado-pos-filosofia-facprisma.webp',
    verified: true,
  },
  {
    id: 'pos-neurociencias',
    title: 'Pós-graduação lato sensu em Neurociências',
    institution: 'Faculdade Iguaçu',
    year: 2024,
    type: 'pos-graduacao',
    typeLabel: 'Pós-Graduação Lato Sensu',
    image: '/assets/certificados/certificado-pos-neurociencias-faculdade-iguacu.webp',
    verified: true,
  },
  {
    id: 'extensao-neuropsicopedagogia',
    title: 'Extensão em Neuropsicopedagogia',
    institution: 'Faculdade Iguaçu',
    year: 2024,
    type: 'extensao',
    typeLabel: 'Extensão Universitária',
    image: '/assets/certificados/certificado-extensao-neuropsicopedagogia-faculdade-iguacu.webp',
    verified: true,
  },
  {
    id: 'extensao-neuropsicanalise',
    title: 'Extensão em Neuropsicanálise',
    institution: 'Faculdade Iguaçu',
    year: 2024,
    type: 'extensao',
    typeLabel: 'Extensão Universitária',
    image: '/assets/certificados/certificado-extensao-neuropsicanalise-faculdade-iguacu.webp',
    verified: true,
  },
  {
    id: 'imersao-bup',
    title: 'Imersão Estratégica, Estruturação Comercial',
    institution: 'BUP',
    year: 2024,
    type: 'desenvolvimento',
    typeLabel: 'Desenvolvimento Profissional',
    image: '/assets/certificados/certificado-imersao-estrategica-estruturacao-comercial-bup.webp',
    verified: true,
  },
  {
    id: 'homem-ao-maximo',
    title: '"Homem ao Máximo"',
    institution: 'CMN',
    year: 2024,
    type: 'desenvolvimento',
    typeLabel: 'Capacitação Comportamental',
    image: '/assets/certificados/certificado-homem-ao-maximo-cmn.webp',
    verified: true,
  },
];

/**
 * Formações citadas pelo cliente que NÃO possuem comprovante anexado.
 * Mantidas em estrutura separada para controle interno.
 * NÃO são exibidas aos visitantes por padrão, conforme regra de integridade do projeto.
 */
export const unverifiedFormations: UnverifiedFormation[] = [
  { id: 'cetep-psicanalise', title: 'Psicanalista', institution: 'CETEP', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'coaching', title: 'Coaching', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'pnl', title: 'PNL (Programação Neurolinguística)', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'analise-comportamental', title: 'Analista Comportamental', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'constelacao', title: 'Constelação Sistêmica', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'speaker-ibc', title: 'Speaker', institution: 'IBC', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'esg-exame', title: 'ESG', institution: 'EXAME', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'teologia-eteqs', title: 'Teologia', institution: 'ETEQS', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'libras-enap', title: 'Libras', institution: 'ENAP', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'pos-dependencia', title: 'Pós em Dependência Química', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'psicologia-analitica', title: 'Psicologia Analítica', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'cadeia-logistica', title: 'Cadeia Logística', status: 'pending_verification', notes: 'Aguardando envio do comprovante' },
  { id: 'hipnose', title: 'Hipnólogo', status: 'in_progress', notes: 'Em andamento — não divulgar' },
];
