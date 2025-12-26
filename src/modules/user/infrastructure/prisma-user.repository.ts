import { prisma } from '../../../config/database';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.entity';

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const u = await prisma.user.create({
      data: { email: user.email, password: user.password }
    });
    return new User(u.id, u.email, u.password);
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users.map(u => new User(u.id, u.email, u.password));
  }
}
