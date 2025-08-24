import {Module} from '@nestjs/common';
import {UserModule} from "@nx-v21/user";
import {CompanyService} from "./company.service";
import {UtilsModule} from "@nx-v21/utils";

@Module({
  imports: [UserModule, UtilsModule],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}

