import Head from 'next/head';

const RetejarTejadoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta retejar un tejado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con retejar un tejado y cómo planificar tu presupuesto para este proyecto de renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-retejar-tejado`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta retejar un tejado?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Retejado Básico: 60€ - 100€ por metro cuadrado de tejado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Retejado Premium: 100€ - 200€ por metro cuadrado de tejado</p>
            <p>Incluye materiales de alta calidad y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Material de las Tejas: Costos variados dependiendo del tipo de tejas seleccionadas, como cerámicas, de hormigón, o de pizarra.</li>
          <li>Tamaño y Forma del Tejado: Superficie total del tejado y su complejidad arquitectónica.</li>
          <li>Accesibilidad y Seguridad: Costos adicionales para trabajos en tejados con difícil acceso o necesidades especiales de seguridad.</li>
          <li>Ubicación Geográfica: Variación de precios según el mercado local y costos de mano de obra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Retejar un Tejado</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Retejado Básico</strong>: 60€ - 100€ por metro cuadrado de tejado, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Retejado Premium</strong>: 100€ - 200€ por metro cuadrado de tejado, incluyendo materiales de alta calidad y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Tejado Actual</strong>: Inspecciona el estado actual del tejado y determina si es necesario un retejado completo.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita presupuestos detallados de contratistas especializados en retejados para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Consideración de Opciones de Materiales</strong>: Investiga y elige materiales que se adapten a tus necesidades y presupuesto, considerando la durabilidad y apariencia estética.</p>
        <p>4. <strong>Selección de Contratista</strong>: Elige un contratista con experiencia en retejados y garantías de calidad para asegurar un resultado duradero y seguro.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el retejado de tu tejado, puedes mejorar la protección y apariencia de tu hogar, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default RetejarTejadoCoste;