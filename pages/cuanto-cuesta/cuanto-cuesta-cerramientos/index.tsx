import Head from 'next/head';

const CuantoCuestaCerramientos = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cerramientos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la instalación de cerramientos para mejorar tu hogar o espacio comercial."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cerramientos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cerramientos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cerramientos básicos: €X - €X por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cerramientos de alta gama: €X - €X por metro cuadrado</p>
            <p>Incluye materiales premium y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipos de materiales utilizados (aluminio, PVC, vidrio, etc.).</li>
          <li>Diseño y complejidad del cerramiento.</li>
          <li>Tamaño total del área a cubrir.</li>
          <li>Ubicación geográfica y accesibilidad al sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para instalar cerramientos</h2>
        <p>1. <strong>Consulta con varios proveedores</strong>: Obtén múltiples presupuestos para comparar precios y opciones.</p>
        <p>2. <strong>Considera la durabilidad</strong>: Elige materiales que sean resistentes y fáciles de mantener.</p>
        <p>3. <strong>Planificación del diseño</strong>: Asegúrate de que el diseño del cerramiento complemente la estética de tu espacio.</p>
        <p>4. <strong>Contratación de profesionales</strong>: Opta por instaladores con experiencia para garantizar un trabajo de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Al tomar decisiones informadas y planificar adecuadamente, puedes instalar cerramientos que mejoren tu espacio con un costo que se ajuste a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaCerramientos;
