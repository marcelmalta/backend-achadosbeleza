import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  shortName: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  discountPrice: number;

  @Column({ nullable: true })
  discountPercent: number;

  @Column({ nullable: true })
  paymentInfo: string;

  @Column({ type: "float", nullable: true })
  rating: number;

  @Column({ nullable: true })
  reviews: number;

  // Shipping
  @Column({ default: false })
  freeShipping: boolean;

  @Column({ default: false })
  full: boolean;

  @Column({ nullable: true })
  deliveryTime: string;

  // Arrays
  @Column("simple-array", { nullable: true })
  images: string[];

  @Column("simple-array", { nullable: true })
  color: string[];

  @Column("simple-array", { nullable: true })
  voltage: string[];

  @Column("simple-array", { nullable: true })
  description: string[];

  // Seller
  @Column({ nullable: true })
  sellerName: string;

  @Column({ nullable: true })
  sellerLevel: string;

  @Column({ nullable: true })
  sellerSales: string;

  @Column({ nullable: true })
  sellerWarranty: string;

  @Column()
  link: string;
}
