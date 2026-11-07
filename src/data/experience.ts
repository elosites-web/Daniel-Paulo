export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  isCurrent?: boolean;
  category: 'educacao' | 'gestao' | 'lideranca';
}

export const professionalExperiences: ExperienceItem[] = [
  {
    id: 'anhanguera',
    role: 'Professor',
    organization: 'Faculdade Anhanguera',
    period: 'Desde 01/04/2024 (Ativo)',
    isCurrent: true,
    category: 'educacao',
  },
  {
    id: 'unika',
    role: 'Coordenador Pedagógico',
    organization: 'Unika Negócios e Desenvolvimento Humano',
    period: 'Janeiro de 2021 a Julho de 2025',
    category: 'educacao',
  },
  {
    id: 'risso',
    role: 'Gerente Comercial',
    organization: 'Transportadora Risso',
    period: 'Agosto de 2019 a Janeiro de 2020',
    category: 'gestao',
  },
  {
    id: 'bsm',
    role: 'Supervisor de Logística',
    organization: 'BSM Logística e Transportes',
    period: 'Abril de 2017 a Julho de 2019',
    category: 'gestao',
  },
  {
    id: 'sao-carlos',
    role: 'Supervisor Geral',
    organization: 'Casa São Carlos',
    period: 'Março de 2014 a Março de 2017',
    category: 'lideranca',
  },
];
