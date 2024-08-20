import Head from 'next/head';

const CuantoCuestaTiendas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta abrir una tienda? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la apertura de una tienda y cómo planificar tu presupuesto para iniciar un negocio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-tiendas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta abrir una tienda?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costos iniciales: €10,000 - €50,000</p>
            <p>Incluye alquiler, remodelación del local, permisos y licencias.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Inventario inicial: Variable</p>
            <p>Depende del tipo y tamaño de la tienda, así como del stock inicial requerido.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y ubicación del local: Alquiler y costos de remodelación pueden variar.</li>
          <li>Permiso y licencias: Costos asociados con la apertura legal del negocio.</li>
          <li>Inventario y equipamiento: Varía según el tipo de productos y servicios ofrecidos.</li>
          <li>Marketing inicial: Gastos para dar a conocer la tienda.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Planificación financiera</strong>: Establece un presupuesto detallado para cada aspecto del inicio de tu tienda.</p>
        <p>2. <strong>Negociación de costos</strong>: Busca proveedores y contratistas que ofrezcan precios competitivos para minimizar gastos.</p>
        <p>3. <strong>Investigación de mercado</strong>: Asegúrate de entender la demanda local y ajusta tu oferta en consecuencia.</p>
        <p>4. <strong>Consideración legal</strong>: Cumple con todos los requisitos legales y regulatorios para evitar multas y retrasos.</p>
      </section>

      <section>
        <p className="text-lg">
          Abrir una tienda puede ser emocionante y desafiante. Con una planificación cuidadosa y un presupuesto realista, puedes maximizar tus posibilidades de éxito.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaTiendas;