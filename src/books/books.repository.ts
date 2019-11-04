import { Book } from './books.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BookDTO } from './interfaces/book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  createBook = async (bookDTO: BookDTO) => {
    return await this.save(bookDTO);
  };

  findBook = async (id: string) => {
    return await this.findOneOrFail(id);
  };

  updateBook = async (id: string, bookDTO: BookDTO) => {
    return this.save({ ...bookDTO, id: Number(id) });
  };

  removeBook = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
