import { CreateTeamResponsibleDTO, UpdateTeamResponsibleDTO } from '../dto/teamResponsible.dto';
import { ResponsibleRepository } from '../repositories/responsible.repository';
import { TeamRepository } from '../repositories/team.repository';
import { TeamResponsibleRepository } from '../repositories/teamResponsible.repository';

const teamRepository = new TeamRepository();
const responsibleRepository = new ResponsibleRepository();
const repository = new TeamResponsibleRepository();

export class TeamResponsibleService {
 async create(teamId: string, responsibleId: string, role?: string) {
    const [team, responsible] = await Promise.all([
      teamRepository.findById(teamId),
      responsibleRepository.findById(responsibleId),
    ]);

    if (!team) {
      throw new Error('Team not found');
    }

    if (!responsible) {
      throw new Error('Responsible not found');
    }

    const teamResponsible = await repository.create({
      teamId,
      responsibleId,
      role,
    });

    return teamResponsible;
  }

  findAll() {
    return repository.findAll();
  }

  async findById(id: string) {
    const teamResponsible = await repository.findById(id);
    if (!teamResponsible) {
      throw new Error('teamResponsible not found');
    }
    return teamResponsible;
  }

  update(id: string, data: UpdateTeamResponsibleDTO) {
    return repository.update(id, data);
  }

  delete(id: string) {
    return repository.delete(id);
  }
  deleteByResponsibleId(id: string) {
    return repository.deleteByResponsibleId(id);
  }
}