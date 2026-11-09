export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  isCurrent?: boolean;
  category: 'educacao' | 'gestao' | 'lideranca';
  notes?: string;
}

export const professionalExperiences: ExperienceItem[] = [
  {
    id: 'anhanguera',
    role: 'Professor',
    organization: 'Faculdade Anhanguera',
    period: 'Desde 01/04/2024 (Ativo)',
    isCurrent: true,
    category: 'educacao',
    notes: 'Docência no ensino superior em desenvolvimento humano e áreas afins.',
  },
  {
    id: 'unika',
    role: 'Coordenador Pedagógico',
    organization: 'Unika Negócios e Desenvolvimento Humano',
    period: 'Janeiro de 2021 a Julho de 2025',
    category: 'educacao',
    notes: 'Coordenação pedagógica e facilitação de cursos e treinamentos.',
  },
  {
    id: 'gestao-corporativa-anterior',
    role: 'Atuação Prévia em Gestão Logística e Liderança Comercial',
    organization: 'Setor Corporativo e Operacional',
    period: 'Experiência Anterior Consolidada',
    category: 'gestao',
    notes: 'Supervisão de operações logísticas, liderança de equipes e gestão comercial prévia à consolidação clínica e acadêmica.',
  },
];
