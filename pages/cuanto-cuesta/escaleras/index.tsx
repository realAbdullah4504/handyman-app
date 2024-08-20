import Head from 'next/head';

const Escaleras = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las escaleras? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de escaleras y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/escaleras`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las escaleras?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Escaleras Estándar: 500€ - 2,000€</p>
            <p>Incluye materiales y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Escaleras Personalizadas: 2,000€ - 10,000€</p>
            <p>Incluye diseños personalizados y materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Madera, metal, hormigón, etc.</li>
          <li>Estilo y Diseño: Escaleras rectas, en espiral, con descansos, etc.</li>
          <li>Altura y Longitud: Dimensiones de la escalera.</li>
          <li>Ubicación: Accesibilidad y ubicación dentro del hogar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Escaleras</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Escaleras Estándar</strong>: 500€ - 2,000€, incluyendo materiales y mano de obra básica.
          </li>
          <li>
            <strong>Escaleras Personalizadas</strong>: 2,000€ - 10,000€, incluyendo diseños personalizados y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Elegir el Tipo de Escalera</strong>: Decide el tipo de escalera que mejor se adapte a tus necesidades y estilo de tu hogar.</p>
        <p>2. <strong>Obtener Múltiples Cotizaciones</strong>: Solicita presupuestos detallados de varios contratistas para comparar precios y servicios.</p>
        <p>3. <strong>Considerar Calidad y Durabilidad</strong>: Escoge materiales de alta calidad que sean duraderos y fáciles de mantener.</p>
        <p>4. <strong>Programar la Instalación</strong>: Coordina la instalación de las escaleras con otros trabajos de remodelación o construcción en tu hogar.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de escaleras es crucial para la accesibilidad y el diseño interior de tu hogar. Planifica cuidadosamente y considera todos los factores para asegurar que tu proyecto se ajuste a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default Escaleras;