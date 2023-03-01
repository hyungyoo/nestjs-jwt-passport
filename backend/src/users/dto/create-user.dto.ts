import { CoreOutput } from "src/common/dtos/core-output.dto";
import { IsObject } from "class-validator";
import { Users } from "../entities/user.entity";
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";

/**
 * DTO for creating a user:
 * UserCreateDto: includes fields
 * such as email, password, firstName and lastName for creating a user
 * from Users entity
 */
export class CreateUserInput extends PickType(Users, [
  "email",
  "firstName",
  "lastName",
  "password",
]) {}

/**
 * DTO for returning the user creation service result
 * CoreOutput(success: boolean, status code : number, error or data)
 */
export class CreateUserOutput extends CoreOutput {
  @ApiProperty({ type: OmitType(Users, ["password"]) })
  @IsObject()
  data: { user: Omit<Users, "password" | "hashPassword"> };
}
