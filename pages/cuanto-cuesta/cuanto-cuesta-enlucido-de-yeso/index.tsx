import Head from "next/head";

const EnlucidoDeYesoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta enlucido de yeso? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con el enlucido de yeso en paredes y techos de tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-enlucido-de-yeso`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta enlucido de yeso?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Servicio: Variable</p>
          <p>
            Dependerá del tamaño de la superficie a enlucir, estado de las
            paredes y techos, y otros factores.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Tipos Comunes de Enlucido de Yeso
        </h2>
        <ul className="list-disc list-inside">
          <li>Enlucido en Paredes</li>
          <li>Enlucido en Techos</li>
          <li>Acabados Especiales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Factores que Afectan los Costos
        </h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Superficie</li>
          <li>Estado de las Superficies</li>
          <li>Acabados y Detalles Específicos</li>
          <li>Ubicación Geográfica</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un profesional para el enlucido de yeso puede asegurar un
          acabado de calidad y duradero para tus proyectos de remodelación en
          casa.
        </p>
      </section>
    </div>
  );
};

export default EnlucidoDeYesoCoste;
