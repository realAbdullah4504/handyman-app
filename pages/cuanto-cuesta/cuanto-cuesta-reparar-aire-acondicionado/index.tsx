import Head from 'next/head';

const CuantoCuestaRepararAireAcondicionado = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar un aire acondicionado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de un aire acondicionado, incluyendo materiales, mano de obra y otros factores relevantes."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-aire-acondicionado`}
        />
      
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta reparar un aire acondicionado?
      </h1>

      <section className="mb-8">
        <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mb-4">
          <p className="text-xl font-bold mb-2">Costo típico: €100 - €500</p>
          <p>
            Costo promedio para la reparación de problemas comunes como fugas de refrigerante, problemas eléctricos, o mantenimiento general.
          </p>
        </div>
        <p className="mb-4">
          El costo puede variar dependiendo del tipo de problema, la marca y modelo del aire acondicionado, y la complejidad de la reparación.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes del costo</h2>
        <ul className="list-disc list-inside">
          <li>Costo de mano de obra del técnico o empresa de reparación.</li>
          <li>Reemplazo de piezas defectuosas o dañadas.</li>
          <li>Posibles costos adicionales como el recarga de refrigerante o ajustes en la instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recomendaciones</h2>
        <p>1. <strong>Mantenimiento regular</strong>: Realiza mantenimientos periódicos para prevenir problemas costosos.</p>
        <p>2. <strong>Reparación rápida</strong>: No dejes pasar mucho tiempo antes de reparar problemas pequeños para evitar daños mayores.</p>
        <p>3. <strong>Profesionales certificados</strong>: Contrata técnicos certificados para garantizar un servicio de calidad y seguro.</p>
      </section>

      <section>
        <p className="text-lg">
          Una reparación oportuna puede extender la vida útil de tu aire acondicionado y evitar costos mayores en el futuro.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaRepararAireAcondicionado;
