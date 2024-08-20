import Head from 'next/head';

const InstalarICPCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar un ICP? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de un Interruptor de Control de Potencia (ICP) y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-icp`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar un ICP?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 100€ - 200€</p>
            <p>Incluye el coste del ICP estándar y la mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 200€ - 500€</p>
            <p>Incluye el coste de un ICP con características adicionales y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de ICP: Estándar vs. con características avanzadas como protección adicional.</li>
          <li>Complejidad de Instalación: Costos adicionales para instalaciones en lugares de difícil acceso o con requerimientos especiales.</li>
          <li>Normativas y Permisos: Cumplimiento de regulaciones locales y la necesidad de obtener permisos para la instalación.</li>
          <li>Marca y Calidad: Marcas reconocidas que pueden implicar un costo mayor por la calidad y durabilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de ICP</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 100€ - 200€, incluyendo el coste del ICP estándar y la mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 200€ - 500€, incluyendo el coste de un ICP con características adicionales y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades de Instalación</strong>: Determina el tipo de ICP necesario y los requisitos específicos para su instalación.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios instaladores de ICP para comparar precios, tipos de dispositivos ofrecidos y métodos de instalación.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: Asegúrate de que el ICP instalado cumpla con las normativas locales y proporcione una protección eléctrica adecuada a largo plazo.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un instalador con experiencia en la instalación de ICP para garantizar una instalación segura y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la instalación de un ICP, puedes garantizar la seguridad eléctrica y mantenerse dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default InstalarICPCoste;
