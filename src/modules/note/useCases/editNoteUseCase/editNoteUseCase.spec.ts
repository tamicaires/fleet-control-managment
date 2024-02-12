import { makeUser } from 'src/modules/user/factories/userFactory';
import { NoteRepositoryInMemory } from '../../repositories/noteRepositoryInMemory';
import { EditNoteUseCase } from './editNoteUseCase';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { makeNote } from '../../factories/noteFactory';

let noteRepositoryInMemory: NoteRepositoryInMemory;
let editNoteUseCase: EditNoteUseCase;

describe('Edit Note', () => {
  beforeEach(() => {
    noteRepositoryInMemory = new NoteRepositoryInMemory();
    editNoteUseCase = new EditNoteUseCase(noteRepositoryInMemory);
  });

  it('Should be able to edit note', async () => {
    const user = makeUser({});
    const note = makeNote({
      userId: user.id
    });

    noteRepositoryInMemory.notes = [note];

    const titleChanged = 'Inspeção cavalinho vencida';
    const descriptionChanged = 'Frota 22515';

    await editNoteUseCase.execute({
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
      await editNoteUseCase.execute({
        title: 'Preventiva 22545',
        noteId: 'fakeId',
        userId: 'fakeId'
      });
    }).rejects.toThrow(NotFoundException);
  });

  it('Should be able to throw error when note has another user', async () => {
    const note = makeNote({});

    noteRepositoryInMemory.notes = [note];

    expect(async () => {
      await editNoteUseCase.execute({
        title: 'Preventiva agendada 22311',
        noteId: note.id,
        userId: 'fakeId'
      });
    }).rejects.toThrow(UnauthorizedException);
  });
});