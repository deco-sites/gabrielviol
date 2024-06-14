import Image from "apps/website/components/Image.tsx";

interface Arraial {
  nome: string;
  cidade: string;
  estado: string;
  imagem: string;
  descricao: string;
}

const arraiais: Arraial[] = [
  {
    nome: "Arraiá do Galinho",
    cidade: "Salvador",
    estado: "Bahia",
    imagem: "https://exemplo.com/arraia-do-galinho.jpg",
    descricao: "Um dos maiores arraiais do Brasil, com shows de artistas famosos e comidas típicas.",
  },
  {
    nome: "Arraiá de Campina Grande",
    cidade: "Campina Grande",
    estado: "Paraíba",
    imagem: "https://exemplo.com/arraia-campina-grande.jpg",
    descricao: "Conhecido como 'O Maior São João do Mundo', com 30 dias de festa e diversas atrações.",
  },
  {
    nome: "Mossoró Cidade Junina",
    cidade: "Mossoró",
    estado: "Rio Grande do Norte",
    imagem: "https://exemplo.com/mossoro-cidade-junina.jpg",
    descricao: "Um mês inteiro de festa com shows, quadrilhas e o espetáculo 'Chuva de Bala no País de Mossoró'.",
  },
  {
    nome: "Festa Junina de Caruaru",
    cidade: "Caruaru",
    estado: "Pernambuco",
    imagem: "https://exemplo.com/festa-junina-caruaru.jpg",
    descricao: "Conhecida pelo Alto do Moura, centro de artesanato em barro, e pela culinária típica.",
  },
];

export default function GrandesArraiais() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Grandes Arraiais do Brasil</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {arraiais.map((arraial) => (
          <div key={arraial.nome} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={arraial.imagem} alt={arraial.nome} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{arraial.nome}</h3>
              <p className="text-gray-600 mb-2">{arraial.cidade}, {arraial.estado}</p>
              <p className="text-gray-700">{arraial.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}