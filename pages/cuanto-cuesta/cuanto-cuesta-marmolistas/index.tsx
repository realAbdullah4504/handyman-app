import Head from 'next/head';

const MarmolistasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a marmolistas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con contratar a marmolistas y cómo planificar tu presupuesto para proyectos de mármol y piedra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-marmolistas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a marmolistas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye mano de obra estándar y materiales básicos de mármol o piedra.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 100€ - 300€ por metro cuadrado</p>
            <p>Incluye mano de obra especializada, materiales premium y diseños complejos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Mármol o Piedra: Calidad y rareza del material.</li>
          <li>Diseño y Personalización: Complejidad del diseño y detalles personalizados.</li>
          <li>Ubicación y Accesibilidad: Impacto en costos de logística y transporte.</li>
          <li>Tamaño del Proyecto: Área total a cubrir con mármol o piedra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Marmolistas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 50€ - 100€ por metro cuadrado, incluyendo mano de obra estándar y materiales básicos.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 100€ - 300€ por metro cuadrado, incluyendo mano de obra especializada y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consulta Inicial</strong>: Discutir requisitos de diseño y tipo de material con los marmolistas.</p>
        <p>2. <strong>Obtención de Muestras</strong>: Evaluar muestras de mármol o piedra para seleccionar el material adecuado.</p>
        <p>3. <strong>Solicitar Presupuestos Detallados</strong>: Comparar costos entre varios marmolistas y considerar garantías.</p>
        <p>4. <strong>Programar Instalación</strong>: Coordinar fechas de instalación y asegurarse de la preparación adecuada del área.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la contratación de marmolistas, puedes asegurar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default MarmolistasCoste;