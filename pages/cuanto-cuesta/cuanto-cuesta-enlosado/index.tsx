import Head from 'next/head';

const EnlosadoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta enlosado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con el enlosado de pisos y paredes en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-enlosado`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta enlosado?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Servicio: Variable</p>
          <p>Dependerá del tipo de azulejos, tamaño del área a cubrir, preparación del sustrato y otros factores.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tipos Comunes de Enlosado</h2>
        <ul className="list-disc list-inside">
          <li>Pisos de Azulejos</li>
          <li>Paredes de Azulejos</li>
          <li>Mosaicos y Decoraciones Especiales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Azulejo: Cerámica, porcelana, mármol, etc.</li>
          <li>Área a Cubrir: Tamaño y complejidad de la superficie.</li>
          <li>Preparación del Sustrato: Nivelación y reparación de la base.</li>
          <li>Detalles del Diseño: Patrones y cortes especiales.</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un profesional para el enlosado puede asegurar un acabado de alta calidad y duradero para tus proyectos de remodelación en casa.
        </p>
      </section>
    </div>
  );
};

export default EnlosadoCoste;