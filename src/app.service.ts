import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProdutos() {
    const dados = [
      {
        id: "1",
        titulo: "Smartphone Samsung Galaxy A05s 4G 128GB 6GB RAM Câmera Traseira Tripla 50MP + 2MP + 2MP + Selfie 13MP Tela 6.7” Preto",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 1.190",
        local: "São Paulo – SP",
        url: "smartphone-samsung-galaxy",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/01/001.webp"
          },
          {
            id: "2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/01/002.webp"
          },
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/01/003.webp"
          },
          {
            id: "2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/01/004.webp"
          },
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/01/005.webp"
          }
        ]
      },
      {
        id: "2",
        titulo: "Smartphone Motorola Razr 50 - 512GB 24GB (12GB RAM +1 2GB Ram",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 1.300",
        local: "São Paulo – SP",
        url: "smartphone-motorola-razr",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/02/001.webp"
          }
        ]
      },
      {
        id: "3",
        titulo: "Smartphone Xiaomi Redmi Note 13 Dual Sim 256gb/8gb () Cor Verde- claro",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 2.300",
        local: "São Paulo – SP",
        url: "smartphone-xiaomi-note13",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/03/001.webp"
          }
        ]
      },
      {
        id: "4",
        titulo: "Smartphone Samsung Galaxy A25 5G 256GB 8GB Ram Dual SIM Android 14 Azul-Escuro 6,5",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 998.90",
        local: "São Paulo – SP",
        url: "smartphone-galaxy-a25",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/04/001.webp"
          }
        ]
      },
      {
        id: "5",
        titulo: "Smartphone Motorola Moto g34 5G - 128GB 8GB (4GB RAM+4GB Ram Boost) AI Camera 50MP NFC- Preto",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 2.300",
        local: "São Paulo – SP",
        url: "smartphone-motorola-motog34",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/05/001.webp"
          }
        ]
      },
      {
        id: "6",
        titulo: "Aspirador Vertical Mondial Turbo Cycle Ap-35 1.31 110v Cor Preto/Laranja",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 899",
        local: "São Paulo – SP",
        url: "aspirador-mondial",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/06/001.webp"
          }
        ]
      },
      {
        id: "7",
        titulo: "Fritadeira Elétrica Air Fryer 4,2l 1500w 127v Multi - Go207 Cor Preto",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 590",
        local: "São Paulo – SP",
        url: "fitadeira-airfryer",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/07/001.webp"
          }
        ]
      },
      {
        id: "8",
        titulo: "Grill E Sanduicheira PGR21PI Maxx Clean 1000W Cinza Philco 110V",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 560",
        local: "São Paulo – SP",
        url: "sanduicheira-grill",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/09/001.webp"
          }
        ]
      },
      {
        id: "9",
        titulo: "Computador Completo I5 3° G 8gb Hd Ssd 240gb Monitor Hdmi",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 1980.90",
        local: "São Paulo – SP",
        url: "kit-8gb",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/11/001.webp"
          }
        ]
      },
      {
        id: "11",
        titulo: "Computador Completo H61 Intel Core I5 2ª 16gb Ssd 240gb",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 2300.90",
        local: "São Paulo – SP",
        url: "kit-8gb",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/12/001.webp"
          }
        ]
      },
      {
        id: "12",
        titulo: "Smartphone Samsung Galaxy A05s 4G 128GB 6GB RAM Câmera Traseira Tripla 50MP + 2MP + 2MP + Selfie 13MP Tela 6.7” Preto",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 1.190",
        local: "São Paulo – SP",
        url: "smartphone-samsung-galaxy",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/01/001.webp"
          }
        ]
      },
      {
        id: "13",
        titulo: "Smartphone Motorola Razr 50 - 512GB 24GB (12GB RAM +1 2GB Ram",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: "R$ 1.300",
        local: "São Paulo – SP",
        url: "smartphone-motorola-razr",
        fotos: [
          {
            id: "1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://web.codans.com.br/mercado-livre/img/produtos/02/001.webp"
          }
        ]
      }
    ];

    return dados;
  }
}