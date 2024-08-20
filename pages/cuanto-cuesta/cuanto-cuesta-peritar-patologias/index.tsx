import Head from 'next/head';

const PeritarPatologiasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta peritar patologías? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la peritación de patologías y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-peritar-patologias`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta peritar patologías?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Peritación Básica: 200€ - 500€ por informe</p>
            <p>Incluye inspección básica y reporte detallado de patologías.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Peritación Compleja: 500€ - 1000€ por informe</p>
            <p>Incluye inspección detallada y análisis extensivo de patologías complejas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad de las Patologías: Desde problemas estructurales simples hasta daños complejos que requieren análisis extensivo.</li>
          <li>Tamaño y Tipo de Propiedad: Diferencias en costos según el tamaño y la complejidad de la propiedad a peritar.</li>
          <li>Experiencia del Perito: Tarifas varían según la experiencia y la reputación del perito.</li>
          <li>Accesibilidad: Costos adicionales si se requiere acceso especial o herramientas específicas para la peritación.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Peritación de Patologías</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Peritación Básica</strong>: 200€ - 500€ por informe, incluyendo inspección básica y reporte detallado.
          </li>
          <li>
            <strong>Peritación Compleja</strong>: 500€ - 1000€ por informe, incluyendo inspección detallada y análisis extensivo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Patologías</strong>: Determina la gravedad y extensión de las patologías a peritar.</p>
        <p>2. <strong>Selección de Perito</strong>: Investiga y selecciona un perito con experiencia y conocimiento en el tipo de patologías de tu propiedad.</p>
        <p>3. <strong>Solicitud de Presupuestos</strong>: Obtén cotizaciones detalladas de varios peritos para comparar precios y servicios ofrecidos.</p>
        <p>4. <strong>Logística y Planificación</strong>: Coordina la visita del perito y la ejecución del informe dentro de un calendario adecuado.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la peritación de patologías, puedes identificar y abordar problemas estructurales y de calidad de construcción de manera efectiva.
        </p>
      </section>
    </div>
  );
};

export default PeritarPatologiasCoste;