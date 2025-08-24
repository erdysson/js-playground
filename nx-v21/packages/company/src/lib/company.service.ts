import {Injectable} from "@nestjs/common";
import {UserService} from "@nx-v21/user";
import { UtilsService } from "@nx-v21/utils";

@Injectable()
export class CompanyService {
  constructor(readonly userService: UserService, readonly utilsService: UtilsService) {}

  getAllUsers(companyId: string): string[] {
    return this.userService.getAll();
  }

  getAbsoluteValue(x: number): number {
    return this.utilsService.abs(x);
  }
}
