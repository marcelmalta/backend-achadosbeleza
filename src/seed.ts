import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ProductsService } from "./modules/products/products.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productsService = app.get(ProductsService);

  const sampleProducts = [
    {
      title: "Secador De Cabelo Profissional Easy 1700w Taiff Cor Preto",
      shortName: "Secador Taiff Easy 1700w",
      price: 349.0,
      discountPrice: 178.15,
      discountPercent: 48,
      paymentInfo: "ou R$ 197,95 em outros meios",
      rating: 4.8,
      reviews: 6897,
      freeShipping: true,
      full: true,
      deliveryTime: "Receba grátis segunda-feira",
      images: [
        "https://http2.mlstatic.com/D_NQ_NP_2X_677164-MLA52532548124_112022-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_823842-MLA52532548123_112022-F.webp",
      ],
      color: ["Preto"],
      voltage: ["127V", "220V"],
      description: [
        "Potência de 1.7kW",
        "Cabo de 1.8m",
        "4 níveis de temperatura",
        "2 velocidades",
      ],
      sellerName: "INFOBLESSED",
      sellerLevel: "MercadoLíder",
      sellerSales: "+250 mil vendas",
      sellerWarranty: "7 dias de garantia de fábrica",
      link: "https://produto.mercadolivre.com.br/secador-profissional-taiff-easy-1700w",
    },
    {
      title: "Prancha de Cabelo Profissional Taiff Look Íon Bivolt",
      shortName: "Prancha Taiff Look Íon",
      price: 299.0,
      discountPrice: 199.9,
      discountPercent: 33,
      paymentInfo: "até 6x sem juros",
      rating: 4.7,
      reviews: 4231,
      freeShipping: true,
      full: true,
      deliveryTime: "Entrega em até 2 dias",
      images: [
        "https://http2.mlstatic.com/D_NQ_NP_2X_829842-MLB52012349012_102022-F.webp",
      ],
      color: ["Preto", "Rosa"],
      voltage: ["Bivolt"],
      description: [
        "Tecnologia Íon",
        "Placas de cerâmica",
        "Cabo de 2m",
        "Design leve e ergonômico",
      ],
      sellerName: "INFOBLESSED",
      sellerLevel: "MercadoLíder",
      sellerSales: "+250 mil vendas",
      sellerWarranty: "1 ano de garantia",
      link: "https://produto.mercadolivre.com.br/prancha-profissional-taiff-look-ion",
    },
  ];

  for (const product of sampleProducts) {
    const exists = await productsService.findAll();
    const alreadyExists = exists.find((p) => p.title === product.title);

    if (!alreadyExists) {
      await productsService.create(product);
      console.log(`✅ Produto adicionado: ${product.title}`);
    } else {
      console.log(`⚠️ Produto já existe: ${product.title}`);
    }
  }

  await app.close();
}

bootstrap();
