
import Head from 'next/head';

const RepararMarmolCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar mármol? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de mármol y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-marmol`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar mármol?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye pulido y sellado de pequeños daños.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Completa: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye restauración de daños extensos y reemplazo de secciones dañadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad de los Daños: Desde pequeños arañazos hasta roturas importantes.</li>
          <li>Accesibilidad: Dificultad para acceder a las áreas dañadas del mármol.</li>
          <li>Calidad del Acabado: Nivel de pulido y acabado deseado después de la reparación.</li>
          <li>Ubicación: Los costos pueden variar según la ubicación geográfica y la disponibilidad de especialistas en mármol.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar Mármol</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 50€ - 100€ por metro cuadrado, incluyendo pulido y sellado de pequeños daños.
          </li>
          <li>
            <strong>Reparación Completa</strong>: 100€ - 200€ por metro cuadrado, incluyendo restauración de daños extensos y reemplazo de secciones dañadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Daños</strong>: Inspección detallada para determinar la extensión de la reparación.</p>
        <p>2. <strong>Solicitar Estimaciones</strong>: Obtención de presupuestos detallados de varios especialistas en reparación de mármol.</p>
        <p>3. <strong>Materiales y Tiempo</strong>: Consideración de los materiales necesarios y el tiempo estimado para completar la reparación.</p>
        <p>4. <strong>Selección del Especialista</strong>: Elección de un profesional con experiencia en reparación de mármol y garantía de servicio.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la reparación de mármol, puedes restaurar su belleza y funcionalidad dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RepararMarmolCoste;