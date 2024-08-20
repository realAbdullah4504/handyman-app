import Head from 'next/head';

const SustitucionVigasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la sustitución de vigas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la sustitución de vigas y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/uanto-cuesta-sustitucion-vigas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la sustitución de vigas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sustitución Básica: 100€ - 200€ por viga</p>
            <p>Incluye la sustitución estándar de vigas y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sustitución Avanzada: 200€ - 500€ por viga</p>
            <p>Incluye la sustitución de vigas con materiales de alta calidad y técnicas avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado de las Vigas: Condición actual y necesidad de reforzar o modificar.</li>
          <li>Tamaño y Tipo de Viga: Dimensiones y material de las vigas a ser reemplazadas.</li>
          <li>Accesibilidad: Dificultad para acceder al área de trabajo.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y la oferta de servicios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Sustitución de Vigas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Sustitución Básica</strong>: 100€ - 200€ por viga, incluyendo la sustitución estándar de vigas y mano de obra básica.
          </li>
          <li>
            <strong>Sustitución Avanzada</strong>: 200€ - 500€ por viga, incluyendo la sustitución de vigas con materiales de alta calidad y técnicas avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Vigas Actuales</strong>: Determina la condición y necesidades específicas de sustitución.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicita presupuestos detallados a varios proveedores de servicios de construcción.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos de permisos, materiales adicionales y disposición de residuos.</p>
        <p>4. <strong>Selección del Proveedor</strong>: Elige un proveedor con experiencia en la sustitución de vigas y buenas referencias.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la sustitución de vigas, puedes asegurar la seguridad estructural y mejorar la funcionalidad de tu propiedad, dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default SustitucionVigasCoste;