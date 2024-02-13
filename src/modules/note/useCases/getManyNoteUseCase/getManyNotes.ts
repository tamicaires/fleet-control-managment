import { Injectable } from "@nestjs/common";
import { NoteRepository } from "../../repositories/noteRepository";

interface GetManyNotesRequest {
  userId: string;
  page?: string;
  perPage?: string;
}

@Injectable()
export class GetManyNotes {
  constructor(private noteRepositoy: NoteRepository){}
  async execute({ userId, page, perPage }: GetManyNotesRequest) {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;

    const currentPage = Number(page) || DEFAULT_PAGE
    const currentPerPage = Number(perPage) || DEFAULT_PER_PAGE

    const notes = await this.noteRepositoy.findManyByUserId(
      userId,
      currentPage,
      currentPerPage
    )

    return notes;
  };
}