import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1>
        Bem-vindo á Biblioteca do IFPB!
      </h1>
      <Image
      src="/ifpb-logo.png"
      alt="IFPB logo"
      width={200}
      height={300}
      />
      <p>
        Explore nossa coleção de livros, artigos e recursos.
      </p>
    
    </div>
  );
}



