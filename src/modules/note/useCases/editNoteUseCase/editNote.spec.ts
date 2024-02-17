import { makeUser } from 'src/modules/user/factories/userFactory';
import { NoteRepositoryInMemory } from '../../repositories/noteRepositoryInMemory';
import { EditNote } from './editNote';
import { makeNote } from '../../factories/noteFactory';
import { NoteNotFoundException } from '../../exceptions/NoteNotFoundException';
import { NoteWithoutPermissionException } from '../../exceptions/NoteWithoudPermissionException';

let noteRepositoryInMemory: NoteRepositoryInMemory;
let editNote: EditNote;

describe('Edit Note', () => {
  beforeEach(() => {
    noteRepositoryInMemory = new NoteRepositoryInMemory();
    editNote = new EditNote(noteRepositoryInMemory);
  });

  it('Should be able to edit note', async () => {
    const user = makeUser({});
    const note = makeNote({
      userId: user.id
    });

    noteRepositoryInMemory.notes = [note];

    const titleChanged = 'Inspeção cavalinho vencida';
    const descriptionChanged = 'Frota 22515';

    await editNote.execute({
      title: titleChanged,
      description: descriptionChanged,
      noteId: note.id,
      userId: user.id,
    });

    expect(noteRepositoryInMemory.notes[0].title).toEqual(titleChanged);
    expect(noteRepositoryInMemory.notes[0].description).toEqual(descriptionChanged);
  });

  it('Should be able to throw error when not found note', async () => {

    expect(async () => {
      await editNote.execute({
        title: 'Preventiva 22545',
        noteId: 'fakeId',
        userId: 'fakeId'
      });
    }).rejects.toThrow(NoteNotFoundException);
  });

  it('Should be able to throw error when note has another user', async () => {
    const note = makeNote({});

    noteRepositoryInMemory.notes = [note];

    expect(async () => {
      await editNote.execute({
        title: 'Preventiva agendada 22311',
        noteId: note.id,
        userId: 'fakeId'
      });
    }).rejects.toThrow(NoteWithoutPermissionException);
  });
});