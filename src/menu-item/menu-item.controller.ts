import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMenuItemDto, EditMenuItemDto } from './dto';
import { MenuItemService } from './menu-item.service';

@Controller('menu-item')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Post()
  createBillboard(@Body() dto: CreateMenuItemDto) {
    return this.menuItemService.createMenuItem(dto);
  }

  @Get()
  getMenuItems(@Query() query) {
    // Convert isFeatured to boolean
    if (query.isFeatured) {
      query.isFeatured = query.isFeatured === 'true';
    }
    // Convert categoryId to number
    if (query.categoryId) {
      query.categoryId = +query.categoryId;
    }

    return this.menuItemService.getMenuItems(query);
  }

  @Get(':id')
  getMenuItemById(@Param('id', ParseIntPipe) menuItemId: number) {
    return this.menuItemService.getMenuItemById(menuItemId);
  }

  @Patch(':id')
  editMenuItemById(
    @Param('id', ParseIntPipe) menuItemId: number,
    @Body() dto: EditMenuItemDto,
  ) {
    return this.menuItemService.editMenuItemById(menuItemId, dto);
  }

  @Delete(':id')
  deleteMenuItemById(@Param('id', ParseIntPipe) menuItemId: number) {
    return this.menuItemService.deleteMenuItemById(menuItemId);
  }
}
