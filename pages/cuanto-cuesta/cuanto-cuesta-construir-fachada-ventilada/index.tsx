import Head from 'next/head';

const ConstruirFachadaVentiladaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una fachada ventilada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de una fachada ventilada y cómo planificar y presupuestar este tipo de obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-fachada-ventilada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una fachada ventilada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Básico: €120 - €150 por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Premium: €150 - €300 por metro cuadrado</p>
            <p>Incluye materiales de alta calidad y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y calidad de los materiales: Diferentes materiales (porcelánico, piedra natural, madera) tienen precios variados.</li>
          <li>Dimensiones de la fachada: La cantidad total de metros cuadrados a cubrir influye en el precio final.</li>
          <li>Complejidad de la instalación: Fachadas con diseño complejo o accesibilidad limitada pueden incrementar los costos.</li>
          <li>Ubicación geográfica: Los costos pueden variar dependiendo de la región y las tarifas locales de los profesionales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir fachadas ventiladas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Básico</strong>: €120 - €150 por metro cuadrado, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Costo Premium</strong>: €150 - €300 por metro cuadrado, incluyendo materiales de alta calidad y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar el tamaño y los requisitos específicos para la fachada ventilada de tu edificio.</p>
        <p>2. <strong>Consulta con profesionales</strong>: Obtener asesoría de expertos en fachadas ventiladas para conocer los requisitos y costos.</p>
        <p>3. <strong>Comparación de presupuestos</strong>: Solicitar varios presupuestos a empresas especializadas para comparar costos y servicios ofrecidos.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Tener en cuenta los costos adicionales como los permisos y licencias necesarios para la construcción.</p>
      </section>

      <section>
        <p className="text-lg">
          Al comprender los factores que influyen en los costos de construir una fachada ventilada y planificar adecuadamente, puedes gestionar el proyecto de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirFachadaVentiladaCoste;