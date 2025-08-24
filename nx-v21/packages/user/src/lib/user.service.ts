import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
  getAll(): string[] {
    return ['User1', 'User2', 'User3'];
  }
}
