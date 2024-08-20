import Head from 'next/head';

const SolarGarajeCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta solar un garaje? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de paneles solares en un garaje y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-solar-garaje`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta solar un garaje?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 3,000€ - 5,000€</p>
            <p>Incluye paneles solares estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 5,000€ - 8,000€</p>
            <p>Incluye paneles solares de alta eficiencia y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Garaje: Área disponible para la instalación de paneles solares.</li>
          <li>Tipo de Paneles Solares: Eficiencia y calidad de los paneles seleccionados.</li>
          <li>Condiciones del Techo: Inclinación, orientación y material del techo del garaje.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y la oferta de servicios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Solar un Garaje</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 3,000€ - 5,000€, incluyendo paneles solares estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 5,000€ - 8,000€, incluyendo paneles solares de alta eficiencia y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Consumo Energético</strong>: Determina las necesidades de energía del garaje y el potencial de ahorro con energía solar.</p>
        <p>2. <strong>Consultas y Cotizaciones</strong>: Obtén varios presupuestos de proveedores de paneles solares y servicios de instalación.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos de mantenimiento, permisos y posibles incentivos fiscales o subvenciones.</p>
        <p>4. <strong>Selección del Proveedor</strong>: Elige un proveedor con experiencia en la instalación de paneles solares y buenas referencias.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la instalación de paneles solares en un garaje, puedes reducir costos energéticos y contribuir a la sostenibilidad ambiental, dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default SolarGarajeCoste;