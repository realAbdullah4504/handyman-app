import Head from 'next/head';

const CuantoCuestaRepararAerotermia = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar aerotermia? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de sistemas de aerotermia, incluyendo diagnóstico, reparación de componentes y mano de obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-aerotermia`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta reparar aerotermia?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md mb-4">
          <p className="text-xl font-bold mb-2">Costo típico: €300 - €1,500</p>
          <p>Costo de diagnóstico, piezas de repuesto y mano de obra para la reparación de sistemas de aerotermia.</p>
        </div>
        <p className="mb-4">
          El costo puede variar según la naturaleza del problema, la marca y modelo del sistema, y la necesidad de reemplazo de componentes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes del costo</h2>
        <ul className="list-disc list-inside">
          <li>Diagnóstico del problema.</li>
          <li>Reparación o reemplazo de componentes defectuosos.</li>
          <li>Costos de mano de obra.</li>
          <li>Posibles costos adicionales como costos de desplazamiento.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recomendaciones</h2>
        <p>1. <strong>Mantenimiento preventivo</strong>: Realiza mantenimientos regulares para evitar problemas costosos.</p>
        <p>2. <strong>Consulta con un profesional</strong>: Asegúrate de que el técnico esté certificado y tenga experiencia en reparación de aerotermia.</p>
        <p>3. <strong>Considera la garantía</strong>: Revisa si la reparación está cubierta por la garantía del fabricante.</p>
      </section>

      <section>
        <p className="text-lg">
          La reparación oportuna puede prolongar la vida útil de tu sistema de aerotermia y evitar costos mayores en el futuro.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaRepararAerotermia;
