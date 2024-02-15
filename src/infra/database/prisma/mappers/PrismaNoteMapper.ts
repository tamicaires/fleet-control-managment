import { Note as NoteRaw } from "@prisma/client";
import { Note } from "src/modules/note/entities/Note";

export class PrismaNoteMapper {
  static toPrisma({
    id, 
    title, 
    description, 
    userId, 
    createdAt, 
    updatedAt 
  }: Note): NoteRaw {
    return { id, title, description, userId, createdAt, updatedAt }
  };

  static toDomain({
    id, 
    title, 
    description, 
    userId, 
    createdAt, 
    updatedAt
  }: NoteRaw ): Note {
    return new Note({
      title, description, userId, createdAt, updatedAt 
    }, id);
  };
};
