'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GaleriaProdutos() {
    
    const [dadosResposta, setDadosResposta] = useState();

    const getProdutos = async () => {
        const requisicao = await fetch("http://localhost:3050/")
        const dadosResposta = await requisicao.json()
        setDadosResposta(dadosResposta)
    }

    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dadosResposta && dadosResposta.map((produto, indice) => (
                        <Link key={indice} href={produto.url}>
                            <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
                                <img
                                    src={produto.fotos[0].url}
                                    alt={produto.fotos[0].descricao}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-base font-medium text-gray-800 mb-1">{produto.titulo}</h3>
                                    <p className="text-lg font-bold text-green-600 mb-1">{produto.preco}</p>
                                    <p className="text-sm text-gray-500">{produto.local}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}