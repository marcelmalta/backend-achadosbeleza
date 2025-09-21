import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  create(product: Partial<Product>) {
    return this.repo.save(product);
  }

  update(id: string, product: Partial<Product>) {
    return this.repo.update(id, product);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
