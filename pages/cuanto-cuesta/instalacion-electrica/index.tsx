import Head from 'next/head';

const InstalacionElectricaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la instalación eléctrica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la instalación eléctrica y cómo planificar tu presupuesto para asegurar la seguridad eléctrica en tu hogar o negocio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalacion-electrica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la instalación eléctrica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €500 - €2000</p>
            <p>Incluye cableado estándar y tomas eléctricas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: €2000 - €10000</p>
            <p>Incluye diseño personalizado y equipos especializados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad: Área a cubrir y tipo de instalaciones requeridas.</li>
          <li>Materiales y equipos: Calidad y tipo de cableado, interruptores y otros componentes.</li>
          <li>Normativas locales: Cumplimiento de regulaciones y permisos de construcción.</li>
          <li>Ubicación: Costos pueden variar según la ubicación geográfica y accesibilidad del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación eléctrica</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €500 - €2000, incluyendo cableado estándar y tomas eléctricas.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: €2000 - €10000, incluyendo diseño personalizado y equipos especializados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial de requisitos eléctricos</strong>: Determinar las necesidades específicas de instalación.</p>
        <p>2. <strong>Solicitar múltiples presupuestos</strong>: Obtener estimaciones detalladas de varios electricistas cualificados.</p>
        <p>3. <strong>Considerar seguridad y eficiencia energética</strong>: Valorar el costo a largo plazo de las soluciones propuestas.</p>
        <p>4. <strong>Revisión de garantías y soporte</strong>: Asegurar el soporte post-instalación y garantías ofrecidas por los proveedores.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de instalación eléctrica, puedes asegurar la seguridad y funcionalidad eléctrica en tu propiedad de manera efectiva.
        </p>
      </section>
    </div>
  );
};

export default InstalacionElectricaCoste;
