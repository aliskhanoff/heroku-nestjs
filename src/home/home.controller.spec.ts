import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';

describe('Home Controller', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
    }).compile();

    controller = module.get<HomeController>(HomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should say hello world', () => {
    expect(controller.Index().message).toEqual("index page")
  });
});
