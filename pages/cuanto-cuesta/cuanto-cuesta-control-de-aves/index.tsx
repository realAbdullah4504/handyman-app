import Head from 'next/head';

const ControlDeAvesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el control de aves? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el control de aves y cómo planificar tu presupuesto para estos servicios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-control-de-aves`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el control de aves?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Control Básico: 100€ - 200€ por aplicación</p>
            <p>Incluye métodos estándar y aplicaciones básicas para el control de aves.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Control Avanzado: 200€ - 500€ por aplicación</p>
            <p>Incluye métodos avanzados y técnicas especializadas para el control efectivo de aves.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Método: Métodos físicos vs. métodos químicos o de repelente.</li>
          <li>Área a Cubrir: Tamaño del área que requiere control de aves.</li>
          <li>Grado de Infestación: Costos adicionales para problemas severos de infestación de aves.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las características específicas del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Control de Aves</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Control Básico</strong>: 100€ - 200€ por aplicación, incluyendo métodos estándar y aplicaciones básicas.
          </li>
          <li>
            <strong>Control Avanzado</strong>: 200€ - 500€ por aplicación, incluyendo métodos avanzados y técnicas especializadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades de Control</strong>: Determina el tipo de método y la extensión del área que necesita ser controlada.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios proveedores de control de aves para comparar precios y métodos ofrecidos.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: Evalúa los beneficios en términos de protección de la propiedad y prevención de daños causados por las aves.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un proveedor de servicios de control de aves con experiencia y reputación para garantizar resultados efectivos y duraderos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el control de aves, puedes proteger tu propiedad mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ControlDeAvesCoste;