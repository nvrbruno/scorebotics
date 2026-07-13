import { CreateTeamDTO, UpdateTeamDTO, UpdateTeamStatusDTO, } from '../dto/team.dto';
import { TeamRepository } from '../repositories/team.repository';
import jwt from "jsonwebtoken";

const repository = new TeamRepository();

export class TeamService {
  create(data: CreateTeamDTO) {
    return repository.create(data);
  }

  findAll() {
    return repository.findAll();
  }

  async findById(id: string) {
    const Team = await repository.findById(id);
    if (!Team) {
      throw new Error('Team not found');
    }
    return Team;
  }

  update(id: string, data: UpdateTeamDTO,) {
    return repository.update(id, data);
  }

  updateStatus(id: string, data: UpdateTeamStatusDTO) {
    return repository.updateStatus(id, data);
  }

  delete(id: string) {
    return repository.delete(id);
  }
}