import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.entity';
import { hashPassword } from '../../../shared/utils/hash';

export class CreateUserUseCase {
  constructor(private repo: UserRepository) {}

  async execute(email: string, password: string) {
    const hashed = await hashPassword(password);
    return this.repo.create(new User(0, email, hashed));
  }
}
