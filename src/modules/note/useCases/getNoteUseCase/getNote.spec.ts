import { makeUser } from 'src/modules/user/factories/userFactory';
import { NoteRepositoryInMemory } from '../../repositories/noteRepositoryInMemory';
import { GetNote } from './getNote';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { makeNote } from '../../factories/noteFactory';

let noteRepositoryInMemory: NoteRepositoryInMemory;
let getNote: GetNote;

describe('Get Note', () => {
  beforeEach(() => {
    noteRepositoryInMemory = new NoteRepositoryInMemory();
    getNote = new GetNote(noteRepositoryInMemory);
  });

  it('Should be able to get note', async () => {
    const user = makeUser({});
    const note = makeNote({ userId: user.id });

    noteRepositoryInMemory.notes = [note];

    const result = await getNote.execute({
      noteId: note.id,
      userId: user.id
    });

    expect(result).toEqual(note);

  });

  it('Should be able to throw error when not found note', async () => {

    expect(async () => {
      await getNote.execute({
        noteId: 'fakeId',
        userId: 'fakeId'
      });
    }).rejects.toThrow(NotFoundException);
  });

  it('Should be able to throw error when note has another user', async () => {
    const note = makeNote({});

    noteRepositoryInMemory.notes = [note];

    expect(async () => {
      await getNote.execute({
        noteId: note.id,
        userId: 'fakeId'
      });
    }).rejects.toThrow(UnauthorizedException);
  });
});