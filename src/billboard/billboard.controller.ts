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
import { BillboardService } from './billboard.service';
import { CreateBillboardDto, EditBillboardDto } from './dto';

@Controller('billboard')
export class BillboardController {
  constructor(private readonly billboardService: BillboardService) {}

  @Post()
  createBillboard(@Body() dto: CreateBillboardDto) {
    return this.billboardService.createBillboard(dto);
  }

  @Get()
  getBillboards() {
    return this.billboardService.getBillboards();
  }

  @Get(':id')
  getBillboardById(@Param('id', ParseIntPipe) billboardId: number) {
    return this.billboardService.getBillboardById(billboardId);
  }

  @Patch(':id')
  editBillboardById(
    @Param('id', ParseIntPipe) billboardId: number,
    @Body() dto: EditBillboardDto,
  ) {
    return this.billboardService.editBillboardById(billboardId, dto);
  }

  @Delete(':id')
  deleteBillboardById(@Param('id', ParseIntPipe) billboardId: number) {
    return this.billboardService.deleteBillboardById(billboardId);
  }
}
