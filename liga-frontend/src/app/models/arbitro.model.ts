export interface Arbitro {
  nombre: string;
  competicion: string;
  experiencia: number;
  categoria: string;
  partidosArbitrados: number;
  email: string;
  telefono: string;
  certificaciones: string[];

  tarjetasAmarillas?: number;
  tarjetasRojas?: number;
  faltas?: number;
  tecnicas?: number;
  exclusiones?: number;
  descalificaciones?: number;
  sets?: number;
}
