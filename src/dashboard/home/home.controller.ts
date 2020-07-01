import { Controller, Req, Get, Render, UseGuards } from '@nestjs/common';

@Controller('admin')

export class HomeController {

    @Get('/')
    @Render('/dashboard/index.ejs')
    public IndexPage() {
        return {
            title: "Title"
        }
    }

    @Get('/about')
    @Render('/dashboard/about.ejs')
    public AboutPage() {
        return {
            message: "Hello world"
        }
    }

}
