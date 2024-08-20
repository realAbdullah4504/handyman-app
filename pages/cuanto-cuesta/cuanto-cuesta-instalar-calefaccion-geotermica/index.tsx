import Head from 'next/head';

const InstalarCalefaccionGeotermicaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar calefacción geotérmica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de calefacción geotérmica y cómo planificar tu presupuesto para esta solución energética eficiente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-calefaccion-geotermica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar calefacción geotérmica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 10,000€ - 20,000€</p>
            <p>Incluye perforación y colocación de sistema de calefacción geotérmica estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 20,000€ - 40,000€</p>
            <p>Incluye sistemas más complejos o personalizados y mayor profundidad de perforación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Profundidad del Sistema: Costos pueden variar según la cantidad de bucles y la profundidad de la perforación necesaria.</li>
          <li>Complejidad del Proyecto: Instalaciones estándar vs. personalizadas que requieren diseño y configuración específica.</li>
          <li>Ubicación: Precios pueden fluctuar según la geología del terreno y la accesibilidad para la maquinaria de perforación.</li>
          <li>Costos de Permisos: Incluyendo permisos de construcción y regulaciones locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para Instalar Calefacción Geotérmica</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 10,000€ - 20,000€, incluyendo perforación y colocación de sistema estándar.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 20,000€ - 40,000€, incluyendo sistemas más complejos y mayor profundidad de perforación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Terreno</strong>: Realiza un estudio del terreno para determinar la viabilidad y los requisitos de instalación.</p>
        <p>2. <strong>Consultas y Diseño</strong>: Trabaja con un profesional para diseñar un sistema que cumpla con tus necesidades de calefacción y eficiencia energética.</p>
        <p>3. <strong>Obtención de Cotizaciones</strong>: Solicita múltiples presupuestos detallados y compara precios, servicios y garantías ofrecidas.</p>
        <p>4. <strong>Planificación a Largo Plazo</strong>: Considera el retorno de inversión a través de ahorros en costos energéticos a lo largo del tiempo.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de calefacción geotérmica no solo reduce costos operativos a largo plazo, sino que también ofrece una solución sostenible y eficiente para la calefacción de tu hogar.
        </p>
      </section>
    </div>
  );
};

export default InstalarCalefaccionGeotermicaCoste;