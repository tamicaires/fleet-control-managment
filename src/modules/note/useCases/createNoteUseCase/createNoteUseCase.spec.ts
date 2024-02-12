import { NoteRepositoryInMemory } from "../../repositories/noteRepositoryInMemory"
import { CreateNoteUseCase } from "./createNoteUseCase"

let noteRepositoryInMemory: NoteRepositoryInMemory
let createNoteUseCase: CreateNoteUseCase

describe('Create Note', ()=> {
  
  beforeEach(() => {
    noteRepositoryInMemory = new NoteRepositoryInMemory()
    createNoteUseCase = new CreateNoteUseCase(noteRepositoryInMemory)
  });

  it('Should be able to create a note', async () => {

    expect(noteRepositoryInMemory.notes).toEqual([])

    const note = await createNoteUseCase.execute({
      title: "Acessar planilha",
      userId: "123456",
    });

    expect(noteRepositoryInMemory.notes).toEqual([note])
  })
})