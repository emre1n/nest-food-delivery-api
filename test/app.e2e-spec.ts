import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';

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

    prisma = app.get(PrismaService);

    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      it.todo('should signup');
    });

    describe('Signin', () => {
      it.todo('should signin');
    });
  });

  describe('User', () => {
    describe('Get me', () => {
      // Get me tests here
    });

    describe('Edit user', () => {
      // Edit user tests here
    });
  });

  describe('Order', () => {
    describe('creates new order', () => {});
    describe('gets all orders', () => {});
    describe('gets order by id', () => {});
    describe('edits order by id', () => {});
    describe('deletes order by id', () => {});
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
