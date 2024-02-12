import { Note } from "../../entities/Note";
import { NoteRepository } from "../../repositories/noteRepository";

interface CreateNoteRequest {
  title: string;
  description?: string;
  userId: string ;
}

export class CreateNoteUseCase {

  constructor(private noteRepository: NoteRepository) {}
  async execute({title, description, userId}: CreateNoteRequest) {
    const note = new Note({
      userId,
      description,
      title
    });

    await this.noteRepository.create(note)
    
    return note;
  }
}