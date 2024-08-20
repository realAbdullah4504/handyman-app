import Head from 'next/head';

const InstalarPuertasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar puertas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de puertas y cómo planificar tu presupuesto para este tipo de proyecto de carpintería."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-puertas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar puertas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 100€ - 300€ por puerta</p>
            <p>Incluye puertas estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 300€ - 600€ por puerta</p>
            <p>Incluye puertas personalizadas y técnicas de instalación avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Puerta: Puertas estándar versus puertas personalizadas con características especiales.</li>
          <li>Materiales Utilizados: Diferencias en costos basados en el tipo y calidad de los materiales de la puerta.</li>
          <li>Tamaño y Complejidad: Impacto en los costos según el tamaño de la puerta y la complejidad de la instalación.</li>
          <li>Ubicación y Logística: Influencia en los costos de transporte y accesibilidad al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar Puertas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 100€ - 300€ por puerta, incluyendo puertas estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 300€ - 600€ por puerta, incluyendo puertas personalizadas y técnicas de instalación avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Proyecto</strong>: Determina el número de puertas a instalar y el tipo deseado.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén presupuestos detallados de varios instaladores de puertas para comparar costos y servicios.</p>
        <p>3. <strong>Selección del Instalador</strong>: Considera la experiencia, reputación y portfolio del instalador antes de tomar una decisión final.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye costos de materiales, acabados y cualquier servicio adicional como transporte e instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la instalación de puertas, puedes asegurarte de obtener resultados de alta calidad que satisfagan tus necesidades funcionales y estéticas dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default InstalarPuertasCoste;