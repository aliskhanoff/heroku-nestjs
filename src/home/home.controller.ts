import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {

    @Get('/')
    public Index():any {
        return { message: 'Hello world' }
    }

}
