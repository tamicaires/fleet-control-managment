import { Note } from "src/modules/note/entities/Note";

export class NoteViewModel {
  static toHttp({ id, title, description, createdAt, updatedAt }: Note) {
    return {
      id, 
      title, 
      description, 
      createdAt, 
      updatedAt
    };
  };
};