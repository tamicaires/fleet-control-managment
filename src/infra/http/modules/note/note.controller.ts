import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request } from "@nestjs/common";
import { CreateNote } from "src/modules/note/useCases/createNoteUseCase/createNote";
import { AuthenticatedRequestModel } from "../auth/models/authenticateRequestModel";
import { CreateNoteBody } from "./dtos/createNoteBody";
import { NoteViewModel } from "./viewModels/NoteViewModel";
import { EditNote } from "src/modules/note/useCases/editNoteUseCase/editNote";
import { EditNoteBody } from "./dtos/editNoteBody";
import { DeleteNote } from "src/modules/note/useCases/deleteNoteUseCase/deleteNote";
import { GetNote } from "src/modules/note/useCases/getNoteUseCase/getNote";
import { GetManyNotes } from "src/modules/note/useCases/getManyNoteUseCase/getManyNotes";

@Controller('notes')
export class NoteController {
  constructor (
    private createNoteUseCase: CreateNote,
    private editNoteUseCase: EditNote,
    private deleteNoteUseCase: DeleteNote,
    private getNoteUseCase: GetNote,
    private getManyNoteUseCase: GetManyNotes
    ) {}

  @Post()
  async createNote(
    @Request() request: AuthenticatedRequestModel, 
    @Body() body: CreateNoteBody
  ){
    const { title, description } = body;

    const note = await this.createNoteUseCase.execute({
      title,
      userId: request.user.id,
      description
    });

    return NoteViewModel.toHttp(note);
  };

  @Put(':id')
  async editNote(
    @Request() request: AuthenticatedRequestModel,
    @Param('id') noteId: string,
    @Body() body: EditNoteBody
  ){
    const { title, description } = body;

    await this.editNoteUseCase.execute({
      noteId,
      title,
      userId: request.user.id,
      description
    });
  };

  @Delete(':id')
  async deleteNote(
    @Request() request: AuthenticatedRequestModel,
    @Param('id') noteId: string
  ) {
    await this.deleteNoteUseCase.execute({
      noteId,
      userId: request.user.id
    });
  };

  @Get(':id')
  async getNote(
    @Request() request: AuthenticatedRequestModel,
    @Param('id') noteId: string
  ) {
    const note = await this.getNoteUseCase.execute({
      noteId,
      userId: request.user.id
    });

    return NoteViewModel.toHttp(note);
  };

  @Get()
  async getManyNotes(
    @Request() request: AuthenticatedRequestModel,
    @Query('page') page: string,
    @Query('perPage') perPage: string
  ){
    const notes = await this.getManyNoteUseCase.execute({
      userId: request.user.id,
      page,
      perPage
    });

    return notes.map(NoteViewModel.toHttp)
  };
};