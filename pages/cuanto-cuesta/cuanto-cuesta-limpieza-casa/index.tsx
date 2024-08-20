import Head from 'next/head';

const LimpiezaCasaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de una casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de una casa y cómo planificar el mantenimiento de tu hogar de manera eficiente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de una casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Estándar: 50€ - 100€</p>
            <p>Incluye limpieza básica de superficies y áreas comunes.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 100€ - 200€</p>
            <p>Incluye limpieza detallada de áreas difíciles y limpieza especializada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Casa: El número de habitaciones y baños.</li>
          <li>Estado de la Casa: Nivel de suciedad y necesidad de limpieza especializada.</li>
          <li>Frecuencia de la Limpieza: Limpieza regular versus limpieza ocasional o profunda.</li>
          <li>Ubicación Geográfica: Costos pueden variar según la ubicación y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de una Casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Estándar</strong>: 50€ - 100€, incluyendo limpieza básica de superficies y áreas comunes.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 100€ - 200€, incluyendo limpieza detallada de áreas difíciles y limpieza especializada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Tamaño y Estado</strong>: Evalúa las necesidades específicas de limpieza de tu casa.</p>
        <p>2. <strong>Comparación de Precios</strong>: Obtén presupuestos detallados de varias empresas de limpieza.</p>
        <p>3. <strong>Consideraciones Especiales</strong>: Solicita servicios adicionales según tus requerimientos específicos.</p>
        <p>4. <strong>Mantenimiento Regular</strong>: Planifica la limpieza regular para mantener tu hogar en condiciones óptimas.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza regular y profunda de una casa es esencial para mantener un ambiente saludable y confortable para toda la familia.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaCasaCoste;
