import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartiesService } from './parties.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { Party } from './schemas/party.schema';

@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Post()
  async create(
    @Body() createPartyDto: CreatePartyDto): Promise<boolean> {
    return this.partiesService.create(createPartyDto);
  }

  @Get(':postId')
  async findAll(@Param('postId') postId: string): Promise<Party[]> {
    return this.partiesService.findAll(postId);
  }

  @Get('party/:id')
  async findOne(@Param('id') id: string): Promise<Party> {
    return this.partiesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePartyDto: UpdatePartyDto): Promise<boolean> {
    return this.partiesService.update(id, updatePartyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.partiesService.remove(id);
  }
}
