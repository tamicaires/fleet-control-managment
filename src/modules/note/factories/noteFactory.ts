import { Note } from '../entities/Note';

type Override = Partial<Note> ;

export const makeNote = ({ id, ...override }: Override ) => {
  return new Note(
    {
      title: 'Dar like no video',
      userId: '123456',
      description: 'Se inscreva no canal',
      ...override,
    },
    id,
  );
};