import Head from 'next/head';

const YeserosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a yeseros? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la contratación de yeseros y cómo planificar tu presupuesto para proyectos de yeso y pladur."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-yeseros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a yeseros?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 10€ - 20€ por metro cuadrado</p>
            <p>Incluye mano de obra estándar y materiales básicos de yeso o pladur.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 20€ - 40€ por metro cuadrado</p>
            <p>Incluye mano de obra especializada, materiales premium y técnicas decorativas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Acabado: Nivel de detalle y acabado decorativo.</li>
          <li>Área a Cubrir: Tamaño del espacio donde se aplicará el yeso o pladur.</li>
          <li>Estado de las Superficies: Necesidad de preparación o reparación de superficies previa.</li>
          <li>Ubicación y Accesibilidad: Impacto en costos de logística y transporte.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Yeseros</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 10€ - 20€ por metro cuadrado, incluyendo mano de obra estándar y materiales básicos.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 20€ - 40€ por metro cuadrado, incluyendo mano de obra especializada y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consulta Inicial</strong>: Detallar requisitos de diseño y tipo de acabado con los yeseros.</p>
        <p>2. <strong>Selección de Material</strong>: Elegir entre diferentes opciones de yeso o pladur según el estilo y presupuesto.</p>
        <p>3. <strong>Solicitar Presupuestos Detallados</strong>: Obtener cotizaciones de varios proveedores y comparar costos.</p>
        <p>4. <strong>Programar Trabajo</strong>: Coordinar fechas de trabajo y asegurarse de la preparación adecuada del área.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la contratación de yeseros, puedes asegurar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default YeserosCoste;