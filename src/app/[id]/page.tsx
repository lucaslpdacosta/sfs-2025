import BarraSuperior from "../widgets/BarraSuperior";
import MenuNavegacao from "../widgets/MenuNavegacao";

const dados = {
    "produto": {
        "id": "1",
        "titulo": "Smartphone Samsung Galaxy A05s 4G 128GB 6GB RAM Câmera Traseira Tripla 50MP + 2MP + 2MP + Selfie 13MP Tela 6.7” Preto",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "preco": "R$ 1.190",
        "local": "São Paulo – SP",
        "url": "smartphone-samsung-galaxy",
        "fotos": [
            {
                "id": "1",
                "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "url": "https://web.codans.com.br/mercado-livre/img/produtos/01/001.webp"
            },
            {
                "id": "2",
                "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "url": "https://web.codans.com.br/mercado-livre/img/produtos/01/002.webp"
            },
            {
                "id": "1",
                "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "url": "https://web.codans.com.br/mercado-livre/img/produtos/01/003.webp"
            },
            {
                "id": "2",
                "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "url": "https://web.codans.com.br/mercado-livre/img/produtos/01/004.webp"
            },
            {
                "id": "1",
                "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "url": "https://web.codans.com.br/mercado-livre/img/produtos/01/005.webp"
            },
        ]
    },
}

type Props = {
    params: {
        id: string
    }
}

export default function Detalhes({ params }: Props) {
    const { id } = params;
    const produto = dados.produto;

    return (
      <div>
        <header className="bg-amber-300">
          <BarraSuperior />
          <MenuNavegacao />
        </header>
  
        <main>
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-3 gap-2">
                {produto.fotos.map((foto: any, i: number) => {
                  const primeiroItem = i === 0 ? 'col-span-2 row-span-2' : '';
                  return (
                    <div className={primeiroItem} key={i}>
                      <img
                        src={foto.url}
                        alt={`Imagem ${i + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  );
                })}
              </div>
  
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{produto.titulo}</h1>
                  <p className="text-3xl text-green-600 font-bold mb-4">{produto.preco}</p>
                  <p className="text-gray-500 text-sm mb-4">Localização: {produto.local}</p>
                  <p className="text-base text-gray-700">{produto.descricao}</p>
                </div>
                <button className="mt-6 bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}