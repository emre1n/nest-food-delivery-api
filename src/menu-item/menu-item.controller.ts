import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
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
  getMenuItems() {
    return this.menuItemService.getMenuItems();
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
