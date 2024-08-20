import Head from 'next/head';

const PaisajistaCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un paisajista? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a contratar a un paisajista para diseñar y mantener tu jardín según tus necesidades y presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-paisajista`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un paisajista?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño de Jardín Básico: 500€ - 1500€</p>
            <p>Incluye planificación de diseño básico y selección de plantas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño de Jardín Completo: 1500€ - 5000€</p>
            <p>Incluye diseño detallado, selección de materiales y supervisión de la instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del jardín y complejidad del diseño.</li>
          <li>Tipo de plantas y materiales seleccionados.</li>
          <li>Necesidad de mantenimiento y cuidado continuo.</li>
          <li>Experiencia y reputación del paisajista.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Contratar a un Paisajista</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Diseño de Jardín Básico</strong>: 500€ - 1500€, incluye planificación básica y selección de plantas.
          </li>
          <li>
            <strong>Diseño de Jardín Completo</strong>: 1500€ - 5000€, incluye diseño detallado y supervisión de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Contratar a un Paisajista</h2>
        <p>1. <strong>Especifica tus Necesidades</strong>: Detalla claramente tus expectativas y presupuesto antes de comenzar.</p>
        <p>2. <strong>Verifica la Experiencia</strong>: Revisa el portafolio y las referencias del paisajista antes de contratar.</p>
        <p>3. <strong>Considera el Mantenimiento</strong>: Planifica el mantenimiento regular para mantener el diseño de tu jardín.</p>
        <p>4. <strong>Presupuesto Inicial</strong>: Solicita varios presupuestos y compáralos antes de tomar una decisión final.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para contratar a un paisajista según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para un diseño de jardín exitoso.
        </p>
      </section>
    </div>
  );
};

export default PaisajistaCost;