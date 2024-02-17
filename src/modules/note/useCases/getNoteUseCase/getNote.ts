import { Injectable } from "@nestjs/common";
import { NoteRepository } from "../../repositories/noteRepository";
import { NoteNotFoundException } from "../../exceptions/NoteNotFoundException";
import { NoteWithoutPermissionException } from "../../exceptions/NoteWithoudPermissionException";

interface GetNoteRequest {
  noteId: string;
  userId: string;
}

@Injectable()
export class GetNote {
  constructor(private noteRepository: NoteRepository){}

  async execute({ noteId, userId }: GetNoteRequest) {
    const note = await this.noteRepository.findById(noteId);

    if(!note) throw new NoteNotFoundException();

    if(note.userId !== userId) throw new NoteWithoutPermissionException({
      actionName: 'recuperar'
    });

    return note;
  }
}    