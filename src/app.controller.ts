import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.entity";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(Number(id));
  }

  @Post()
  create(@Body() product: Partial<Product>) {
    return this.productsService.create(product);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() product: Partial<Product>) {
    return this.productsService.update(Number(id), product);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(Number(id));
  }
}
