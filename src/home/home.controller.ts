import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class HomeController {

    @Get('/')
    @Render('index.ejs')
    public Index():any {
        return { message: 'index page' }
    }

    @Get('/about')
    public About():any {
        return { message: 'about page' }
    }

    @Get('/contacts')
    public Contacts():any {
        return { message: 'contacts' }
    }

}
