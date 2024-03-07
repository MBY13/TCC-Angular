export interface Curso {
  result: {
    nome: string;
    semestres: any[]; // ou o tipo apropriado para seus semestres
    isCursando: boolean;
    id: string;
  }[];
  id: number;
  exception: any;
  status: number;
  isCanceled: boolean;
  isCompleted: boolean;
  isCompletedSuccessfully: boolean;
  creationOptions: number;
  asyncState: any;
  isFaulted: boolean;
}

export interface Semestres {
  result: {
      nome: string;
      dataInicio: Date | null;
      dataFinal: Date | null;
      disciplinas: number | null;
      alunoId: string;
      id: string;
  }[];
  id: number;
  exception: any;
  status: number;
  isCanceled: boolean;
  isCompleted: boolean;
  isCompletedSuccessfully: boolean;
  creationOptions: number;
  asyncState: any;
  isFaulted: boolean;
}

export interface Disciplina {
  result: {
    nome: string;
    professor: string;
    frequencia: number;
    faltas: number;
    aulas: number;
    media: number;
    avaliacoes: {
      nome: string;
      dataEntrega: Date;
      conteudo: string;
      nota: number;
      tipoTarefa: number;
      id: string;
    }[];
    resultado: number;
    id: string;
  }[];
  id: number;
  exception: any;
  status: number;
  isCanceled: boolean;
  isCompleted: boolean;
  isCompletedSuccessfully: boolean;
  creationOptions: number;
  asyncState: any;
  isFaulted: boolean;
}