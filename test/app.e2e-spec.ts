import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto, CreateUserDto } from '../src/auth/dto';
import { EditUserDto } from 'src/user/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);

    await prisma.cleanDb();
    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      const dto: CreateUserDto = {
        email: 'john@email.com',
        password: 'password123',
        retypedPassword: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        city: 'Anytown',
        district: 'Anydistrict',
        street: 'Main Street',
        phone: '123-456-7890',
        dataConsent: true,
        marketingConsent: false,
      };

      it('should throw error if email empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            ...dto,
            email: '',
          })
          .expectStatus(400);
      });

      it('should throw error if password fields empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            ...dto,
            password: '',
            retypedPassword: '',
          })
          .expectStatus(400);
      });

      it('should throw error if all fields empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({})
          .expectStatus(400);
      });

      it('should signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Signin', () => {
      const dto: AuthDto = {
        email: 'john@email.com',
        password: 'password123',
      };

      it('should throw error if email empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            ...dto,
            email: '',
          })
          .expectStatus(400);
      });

      it('should throw error if password fields empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            ...dto,
            password: '',
            retypedPassword: '',
          })
          .expectStatus(400);
      });

      it('should throw error if all fields empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({})
          .expectStatus(400);
      });

      it('should signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
      });
    });
  });

  describe('User', () => {
    describe('Get me', () => {
      it('should get current user', () => {
        return pactum
          .spec()
          .get('/users/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
      });
    });

    describe('Edit user', () => {
      it('should edit user', () => {
        const dto: EditUserDto = {
          firstName: 'Jack',
          email: 'jack@email.com',
        };
        return pactum
          .spec()
          .patch('/users')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.email);
      });
    });
  });

  describe('Order', () => {
    describe('creates new order', () => {
      // tests here
    });
    describe('gets all orders', () => {
      // tests here
    });
    describe('gets order by id', () => {
      // tests here
    });
    describe('edits order by id', () => {
      // tests here
    });
    describe('deletes order by id', () => {
      // tests here
    });
  });

  describe('Meal', () => {
    // Meal tests here
  });

  describe('Category', () => {
    // Category tests here
  });

  describe('CartItem', () => {
    // Cart item tests here
  });
});
