import { NoteRepositoryInMemory } from "../../repositories/noteRepositoryInMemory"
import { CreateNote } from "./createNote"

let noteRepositoryInMemory: NoteRepositoryInMemory
let createNote: CreateNote

describe('Create Note', ()=> {
  
  beforeEach(() => {
    noteRepositoryInMemory = new NoteRepositoryInMemory()
    createNote = new CreateNote(noteRepositoryInMemory)
  });

  it('Should be able to create a note', async () => {

    expect(noteRepositoryInMemory.notes).toEqual([])
    
    const note = await createNote.execute({
      title: "Acessar planilha",
      userId: "123456",
    });

    expect(noteRepositoryInMemory.notes).toEqual([note])
  })
})