import { InjectRepository } from '@nestjs/typeorm';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BookDTO } from './interfaces/book.dto';
import { BookRepository } from './books.repository';

@Controller('books')
export class BooksController {
  constructor(
    @InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
  ) {}

  @Get()
  getBooks() {
    return this.bookRepository.find();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.bookRepository.findBook(id);
  }

  @Post()
  createBook(@Body() bookDTO: BookDTO) {
    return this.bookRepository.createBook(bookDTO);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() bookDTO: BookDTO) {
    return this.bookRepository.updateBook(id, bookDTO);
  }

  @Delete(':id')
  removeBook(@Param('id') id: string) {
    return this.bookRepository.removeBook(id);
  }
}
