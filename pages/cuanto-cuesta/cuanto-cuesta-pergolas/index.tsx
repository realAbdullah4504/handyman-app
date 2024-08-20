
import Head from 'next/head';

const PergolasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las pérgolas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la instalación de pérgolas y cómo planificar tu presupuesto para este proyecto de mejoras en el hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pergolas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las pérgolas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pérgola Básica: €500 - €2000</p>
            <p>Incluye estructura estándar y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pérgola Avanzada: €2000 - €5000</p>
            <p>Incluye diseño personalizado y materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño: Dimensiones y complejidad de la estructura.</li>
          <li>Materiales: Calidad y tipo de materiales seleccionados.</li>
          <li>Personalización: Opciones adicionales como cubiertas retráctiles, iluminación, etc.</li>
          <li>Ubicación: Costos pueden variar según la ubicación geográfica y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para pérgolas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pérgola Básica</strong>: €500 - €2000, incluyendo estructura estándar y materiales básicos.
          </li>
          <li>
            <strong>Pérgola Avanzada</strong>: €2000 - €5000, incluyendo diseño personalizado y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades y diseño</strong>: Determinar el estilo y tamaño adecuado de pérgola.</p>
        <p>2. <strong>Solicitar múltiples presupuestos</strong>: Comparar estimaciones de varios proveedores de pérgolas.</p>
        <p>3. <strong>Considerar mantenimiento y durabilidad</strong>: Evaluar costos a largo plazo y beneficios de la calidad de la pérgola.</p>
        <p>4. <strong>Instalación y garantía</strong>: Asegurar la instalación profesional y garantías ofrecidas por los proveedores.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de pérgolas, puedes mejorar tu espacio exterior de manera efectiva dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default PergolasCoste;
