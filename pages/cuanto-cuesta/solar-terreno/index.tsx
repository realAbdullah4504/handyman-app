import Head from 'next/head';

const SolarTerreno = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta solar un terreno? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el proceso de solar un terreno y cómo planificar tu presupuesto para esta obra de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/solar-terreno`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta solar un terreno?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estimación Básica: 10,000€ - 20,000€</p>
            <p>Incluye nivelación y preparación del terreno básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estimación Completa: 20,000€ - 50,000€</p>
            <p>Incluye preparación avanzada del terreno y servicios adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Topografía del Terreno: Costo varía según el tamaño y las características del terreno.</li>
          <li>Preparación del Suelo: Necesidad de nivelación, desbroce, y posible remoción de escombros.</li>
          <li>Servicios de Infraestructura: Costos adicionales por conexión a servicios de agua, electricidad, y alcantarillado.</li>
          <li>Localización y Accesibilidad: Costos pueden variar según la ubicación del terreno y la accesibilidad para maquinaria.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Solar un Terreno</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Estimación Básica</strong>: 10,000€ - 20,000€, incluyendo nivelación y preparación del terreno básica.
          </li>
          <li>
            <strong>Estimación Completa</strong>: 20,000€ - 50,000€, incluyendo preparación avanzada del terreno y servicios adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Determina las necesidades específicas del terreno y servicios requeridos.</p>
        <p>2. <strong>Solicitud de Presupuestos</strong>: Obtén varias cotizaciones detalladas de contratistas y proveedores locales.</p>
        <p>3. <strong>Selección de Contratista</strong>: Considera la experiencia y la reputación del contratista en proyectos similares.</p>
        <p>4. <strong>Consideraciones Finales</strong>: Incluye costos adicionales como permisos y regulaciones locales.</p>
      </section>

      <section>
        <p className="text-lg">
          El costo de solar un terreno puede variar significativamente según varios factores. Planifica tu presupuesto cuidadosamente para asegurar que tu proyecto se realice dentro de tus expectativas.
        </p>
      </section>
    </div>
  );
};

export default SolarTerreno;