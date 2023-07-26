import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [AuthModule, UserModule, OrderModule, MealModule],
})
export class AppModule {}
