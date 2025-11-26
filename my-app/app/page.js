import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1> 
      Bem vindo a Biblioteca do IFPB!
      </h1>
      <Image
      src="/ifpb-logo.png"
      alt="IFPB logo"
      width={200}
      height={300}
      />
      <p>
        Explore nossa coleçao de livros, artigos e recursos.
      </p>

      </div>

  );
}



