import { Request, Response } from 'express';
import { CreateUserUseCase } from '../application/create-user.usecase';
import { PrismaUserRepository } from '../infrastructure/prisma-user.repository';

export class UserController {
  static async create(req: Request, res: Response) {
    const usecase = new CreateUserUseCase(
      new PrismaUserRepository()
    );
    const user = await usecase.execute(req.body.email, req.body.password);
    res.status(201).json(user);
  }
}
