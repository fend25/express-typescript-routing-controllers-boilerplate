import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
} from 'routing-controllers'

@Controller('/')
export class RootController {
  @Get()
  getAll() {
    return 'Hello world!'
  }
}
