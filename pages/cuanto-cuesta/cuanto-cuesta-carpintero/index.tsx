import Head from 'next/head';

const CuantoCuestaCarpintero = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un carpintero? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con contratar a un carpintero para diversos proyectos de carpintería y cómo presupuestar adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-carpintero`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un carpintero?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyectos básicos: €200 - €500</p>
            <p>Incluye trabajos como reparaciones simples y pequeños proyectos de carpintería.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyectos avanzados: €500 - €2000+</p>
            <p>Para proyectos complejos como instalación de muebles a medida o renovaciones completas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de trabajo: Reparaciones, instalaciones, muebles a medida, etc.</li>
          <li>Complejidad del proyecto: Simple vs. complejo.</li>
          <li>Materiales utilizados: Madera de calidad estándar vs. maderas exóticas o personalizadas.</li>
          <li>Ubicación: Precios pueden variar según la región y disponibilidad de carpinteros.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el alcance y requisitos del proyecto de carpintería.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener múltiples cotizaciones de carpinteros con experiencia.</p>
        <p>3. <strong>Selección de carpintero</strong>: Considerar calidad, experiencia y costo antes de elegir.</p>
        <p>4. <strong>Seguimiento del proyecto</strong>: Coordinar fechas y seguimiento de avances con el carpintero.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un carpintero profesional puede asegurar la calidad y precisión en tus proyectos de carpintería.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaCarpintero;