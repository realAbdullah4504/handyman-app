import Head from 'next/head';

const ConstruccionPiscinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la construcción de una piscina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de piscinas y cómo presupuestar para tu proyecto de piscina."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construccion-piscinas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la construcción de una piscina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Piscina Básica: €10,000 - €20,000</p>
            <p>Incluye piscina estándar con materiales básicos y tamaño pequeño a mediano.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Piscina de Alta Gama: €20,000 - €50,000</p>
            <p>Incluye materiales de alta calidad, tamaño grande y acabados premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y forma de la piscina: Piscinas más grandes y formas personalizadas aumentan el costo.</li>
          <li>Materiales y acabados: Calidad de los materiales y acabados utilizados.</li>
          <li>Instalación y equipos: Costos de instalación y equipo adicional como filtros, bombas y sistemas de calefacción.</li>
          <li>Ubicación del proyecto: El costo puede variar dependiendo de la localización y el acceso al sitio.</li>
          <li>Permisos y licencias: Costos de obtener los permisos necesarios para la construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la construcción de piscinas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Piscina Básica</strong>: €10,000 - €20,000, incluyendo materiales básicos y tamaño pequeño a mediano.
          </li>
          <li>
            <strong>Piscina de Alta Gama</strong>: €20,000 - €50,000, incluyendo materiales de alta calidad, tamaño grande y acabados premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar las necesidades del proyecto</strong>: Determinar el tamaño, forma y características de la piscina.</p>
        <p>2. <strong>Obtener varios presupuestos</strong>: Comparar ofertas de diferentes constructores y proveedores de materiales.</p>
        <p>3. <strong>Considerar la durabilidad y mantenimiento</strong>: Optar por materiales y equipos que ofrezcan valor a largo plazo.</p>
        <p>4. <strong>Planificación y diseño</strong>: Trabajar con arquitectos y diseñadores para asegurar que el proyecto cumpla con tus expectativas y necesidades.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la construcción de tu piscina, ten en cuenta estos factores para asegurar un proyecto exitoso dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionPiscinasCoste;