import { makeUser } from 'src/modules/user/factories/userFactory';
import { NoteRepositoryInMemory } from '../../repositories/noteRepositoryInMemory';
import { DeleteNote } from './deleteNote';
import { makeNote } from '../../factories/noteFactory';
import { NoteWithoutPermissionException } from '../../exceptions/NoteWithoudPermissionException';
import { NoteNotFoundException } from '../../exceptions/NoteNotFoundException';

let noteRepositoryInMemory: NoteRepositoryInMemory;
let deleteNote: DeleteNote;

describe('Delete Note', () => {
  beforeEach(() => {
    noteRepositoryInMemory = new NoteRepositoryInMemory();
    deleteNote = new DeleteNote(noteRepositoryInMemory);
  });

  it('Should be able to delete note', async () => {
    const user = makeUser({});
    
    const note = makeNote({
      userId: user.id
    });

    noteRepositoryInMemory.notes = [note];

    await deleteNote.execute({
      noteId: note.id,
      userId: user.id,
    });

    expect(noteRepositoryInMemory.notes).toHaveLength(0);
  });

  it('Should be able to throw error when not found note', async () => {

    expect(async () => {
      await deleteNote.execute({
        noteId: 'fakeId',
        userId: 'fakeId',
      });
    }).rejects.toThrow(NoteNotFoundException);
  });

  it('Should be able to throw error when note has another user', async () => {
    const note = makeNote({});

    noteRepositoryInMemory.notes = [note];

    expect(async () => {
      await deleteNote.execute({
        noteId: note.id,
        userId: 'fakeId',
      });
    }).rejects.toThrow(NoteWithoutPermissionException);
  });
});