import { Injectable } from '@nestjs/common';
import {CompanyService} from "@nx-v21/company";

@Injectable()
export class AppService {
  constructor(readonly companyService: CompanyService) {
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getCompanyUsers(companyId: number) {
    return this.companyService.getAllUsers(companyId.toString());
  }
}
