import Head from 'next/head';

const InstalarCanaletasCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar canaletas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de canaletas para el drenaje de agua y cómo planificar este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-canaletas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar canaletas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €500 - €1,000</p>
            <p>Incluye canaletas estándar y la instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: €1,000 - €3,000+</p>
            <p>Incluye canaletas con características especiales y una instalación más compleja.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y material: Longitud y material de las canaletas (por ejemplo, PVC, aluminio).</li>
          <li>Características adicionales: Sistemas de filtrado, capacidad de drenaje y durabilidad.</li>
          <li>Costos de instalación: Costos asociados con la preparación del sitio y la instalación de las canaletas.</li>
          <li>Ubicación y acceso: Accesibilidad al lugar de instalación y condiciones del terreno.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalar canaletas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €500 - €1,000, incluyendo canaletas estándar y la instalación básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: €1,000 - €3,000+, incluyendo canaletas con características especiales y una instalación más compleja.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del proyecto</strong>: Determina las especificaciones y necesidades para las canaletas de acuerdo con el entorno.</p>
        <p>2. <strong>Solicita cotizaciones</strong>: Obtén estimaciones detalladas de varios contratistas especializados en instalación de canaletas.</p>
        <p>3. <strong>Considera la durabilidad y mantenimiento</strong>: Asegúrate de evaluar las opciones que ofrezcan mayor durabilidad y facilidad de mantenimiento.</p>
        <p>4. <strong>Accesorios y personalización</strong>: Considera opciones adicionales como accesorios de filtrado y sistemas de limpieza para mejorar el rendimiento de las canaletas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al considerar estos factores, podrás instalar canaletas que cumplan con tus necesidades de drenaje de agua y se ajusten a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalarCanaletasCosto;
