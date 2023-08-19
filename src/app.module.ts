import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { MealModule } from './meal/meal.module';
import { PrismaModule } from './prisma/prisma.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CategoryModule } from './category/category.module';
import { BillboardModule } from './billboard/billboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    OrderModule,
    MealModule,
    PrismaModule,
    CartItemModule,
    CategoryModule,
    BillboardModule,
  ],
})
export class AppModule {}
