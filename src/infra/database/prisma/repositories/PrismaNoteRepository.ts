import { Note } from "src/modules/note/entities/Note";
import { NoteRepository } from "src/modules/note/repositories/noteRepository";
import { PrismaService } from "../prisma.service";
import { PrismaNoteMapper } from "../mappers/PrismaNoteMapper";

export class PrismaNoteRepository implements NoteRepository {
  constructor(private prisma: PrismaService) {}

  async create(note: Note): Promise<void> {
    const noteRaw = PrismaNoteMapper.toPrisma(note);
    
    await this.prisma.note.create({
      data: noteRaw
    });
  };

  async findById(id: string): Promise<Note | null> {
    const noteRaw = await this.prisma.note.findUnique({ where: { id }});

    if(!noteRaw) return null;

    return PrismaNoteMapper.toDomain(noteRaw);
  };

  async delete(id: string): Promise<void> {
    await this.prisma.note.delete({ where: { id }});
  };

  async save(note: Note): Promise<void> {
    const noteRaw = PrismaNoteMapper.toPrisma(note);

    await this.prisma.note.update({ 
      data: noteRaw,
      where: {
        id: noteRaw.id
      } 
    });
  };

  async findManyByUserId(userId: string, page: number, perPage: number): Promise<Note[]> {
    const notes = await this.prisma.note.findMany({ 
      where: { 
        userId
      },
      take: perPage,
      skip: (page - 1) * perPage
    });

    return notes.map(PrismaNoteMapper.toDomain);
  };
};