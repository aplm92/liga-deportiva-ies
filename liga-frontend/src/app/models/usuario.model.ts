export interface Usuario {
  _id?: string;
  nombre: string;
  email: string;
  password: string;
  tipo: 'admin' | 'normal' | 'capitan' | 'arbitro';
  equipoId?: string;
}
