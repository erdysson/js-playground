import {Injectable} from "@nestjs/common";

@Injectable()
export class UtilsService {
  abs(x: number): number {
    return Math.abs(x);
  }
}
