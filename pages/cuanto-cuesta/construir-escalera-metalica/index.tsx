import Head from 'next/head';

const ConstruirEscaleraMetalica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una escalera metálica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de escaleras metálicas y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-escalera-metalica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una escalera metálica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Escalera Básica: 500€ - 1,000€</p>
            <p>Incluye una escalera estándar de metal sin adornos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Escalera Personalizada: 1,000€ - 5,000€</p>
            <p>Incluye una escalera metálica con diseños personalizados y detalles adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Diseño y Complejidad: Simple, en espiral, con descansos, etc.</li>
          <li>Materiales y Acabados: Hierro, acero inoxidable, pintura especial, etc.</li>
          <li>Altura y Longitud: Dimensiones específicas de la escalera.</li>
          <li>Ubicación y Accesibilidad: Precios pueden variar según la ubicación geográfica y accesibilidad del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construcción de Escaleras Metálicas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Escalera Básica</strong>: 500€ - 1,000€, incluyendo una escalera estándar de metal sin adornos.
          </li>
          <li>
            <strong>Escalera Personalizada</strong>: 1,000€ - 5,000€, incluyendo una escalera metálica con diseños personalizados y detalles adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Diseño</strong>: Elige entre opciones estándar y personalizadas según tus necesidades y estética.</p>
        <p>2. <strong>Consulta con Profesionales</strong>: Obtén cotizaciones detalladas de constructores de escaleras metálicas para comparar precios y servicios.</p>
        <p>3. <strong>Considera la Seguridad y Estética</strong>: Evalúa la durabilidad y el diseño de la escalera para asegurar funcionalidad y estética.</p>
        <p>4. <strong>Instalación y Mantenimiento</strong>: Coordinar la instalación adecuada y planificar el mantenimiento regular para asegurar la durabilidad de la escalera metálica.</p>
      </section>

      <section>
        <p className="text-lg">
          La construcción de una escalera metálica es una inversión importante. Planifica cuidadosamente para garantizar una instalación segura y duradera.
        </p>
      </section>
    </div>
  );
};

export default ConstruirEscaleraMetalica;