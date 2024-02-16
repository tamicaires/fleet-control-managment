import { Module } from "@nestjs/common";
import { NoteController } from "./note.controller"; 
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateNote } from "src/modules/note/useCases/createNoteUseCase/createNote";
import { DeleteNote } from "src/modules/note/useCases/deleteNoteUseCase/deleteNote";
import { EditNote } from "src/modules/note/useCases/editNoteUseCase/editNote";
import { GetManyNotes } from "src/modules/note/useCases/getManyNoteUseCase/getManyNotes";
import { GetNote } from "src/modules/note/useCases/getNoteUseCase/getNote";

@Module({
  controllers: [NoteController],
  imports: [DatabaseModule],
  providers: [
    CreateNote,
    EditNote,
    DeleteNote,
    GetNote,
    GetManyNotes
  ]
})

export class NoteModule{}