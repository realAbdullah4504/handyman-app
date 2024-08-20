import Head from 'next/head';

const LimpiezaEdificiosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de edificios? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de edificios y cómo mantener un entorno limpio y seguro para los ocupantes."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-edificios`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de edificios?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 500€ - 1000€ por mes</p>
            <p>Incluye limpieza diaria de áreas comunes y mantenimiento general.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 1000€ - 3000€ por mes</p>
            <p>Incluye limpieza detallada de áreas interiores y exteriores del edificio.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Edificio: Metros cuadrados y número de pisos.</li>
          <li>Frecuencia de Limpieza: Diaria, semanal o mensual.</li>
          <li>Tipos de Servicios: Limpieza estándar vs limpieza especializada (ventanas, fachadas, etc.).</li>
          <li>Requerimientos Especiales: Necesidades de limpieza específicas del edificio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Edificios</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 500€ - 1000€ por mes, incluyendo mantenimiento diario de áreas comunes.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 1000€ - 3000€ por mes, incluyendo limpieza detallada de interiores y exteriores.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determinar la frecuencia y tipo de limpieza requerida.</p>
        <p>2. <strong>Comparación de Presupuestos</strong>: Obtener cotizaciones de varias empresas de limpieza.</p>
        <p>3. <strong>Programación de Servicios</strong>: Establecer un calendario de limpieza que se ajuste al presupuesto.</p>
        <p>4. <strong>Monitoreo y Mantenimiento</strong>: Revisar regularmente la calidad de los servicios de limpieza.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener la limpieza adecuada en los edificios no solo mejora el ambiente, sino que también asegura la salud y seguridad de los ocupantes.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaEdificiosCoste;