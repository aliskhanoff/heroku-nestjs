import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  

  it('should return credentials of user', () => {
    expect(service.findOne('john@gmail.com')).toBeDefined();
  });
  
  
});
