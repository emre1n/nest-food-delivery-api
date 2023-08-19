import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, EditCategoryDto } from './dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Post()
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.createCategory(dto);
  }

  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.getCategoryById(categoryId);
  }

  @Patch(':id')
  editCategoryById(
    @Param('id', ParseIntPipe) categoryId: number,
    @Body() dto: EditCategoryDto,
  ) {
    return this.categoriesService.editCategoryById(categoryId, dto);
  }

  @Delete(':id')
  deleteCategoryById(@Param('id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.deleteCategoryById(categoryId);
  }
}
