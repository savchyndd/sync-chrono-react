export interface NoteType {
  id?: string;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string;
  arhived?: boolean;
}
export interface NoteTypeWhithId {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string;
  arhived: boolean;
}
