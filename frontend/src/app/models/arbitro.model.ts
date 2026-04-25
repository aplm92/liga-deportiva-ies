export interface Arbitro {
  id?: number;
  nombre: string;
  email: string;

  competicion?: string;
  experiencia?: number;
  categoria?: string;
  partidosArbitrados?: number;
}