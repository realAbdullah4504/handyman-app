
import Head from 'next/head';

const PintarTejado = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pintar un tejado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la pintura de tejados y cómo planificar tu presupuesto para este tipo de proyecto de mantenimiento."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/pintar-tejado`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pintar un tejado?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estimación Básica: 500€ - 1,500€</p>
            <p>Incluye preparación básica del tejado y aplicación de pintura estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estimación Completa: 1,500€ - 3,000€</p>
            <p>Incluye preparación detallada, reparaciones menores y aplicación de pintura de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Área del Tejado: Dimensiones y complejidad de la estructura del tejado.</li>
          <li>Estado Actual del Tejado: Necesidad de reparaciones previas, limpieza y preparación.</li>
          <li>Tipo de Pintura: Costos variados según la calidad y durabilidad de la pintura seleccionada.</li>
          <li>Ubicación y Accesibilidad: Dificultades logísticas que pueden afectar el costo total.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pintar Tejados</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Estimación Básica</strong>: 500€ - 1,500€, incluyendo preparación básica del tejado y aplicación de pintura estándar.
          </li>
          <li>
            <strong>Estimación Completa</strong>: 1,500€ - 3,000€, incluyendo preparación detallada, reparaciones menores y aplicación de pintura de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Tejado</strong>: Inspecciona el estado actual del tejado y determina las necesidades de preparación.</p>
        <p>2. <strong>Solicitud de Propuestas</strong>: Obtén múltiples presupuestos detallados de contratistas especializados en pintura de tejados.</p>
        <p>3. <strong>Selección de Materiales</strong>: Discute las opciones de pintura y materiales con el contratista para ajustarse a tu presupuesto y preferencias.</p>
        <p>4. <strong>Programación del Trabajo</strong>: Coordina el calendario de trabajo y el tiempo necesario para completar el proyecto de pintura del tejado.</p>
      </section>

      <section>
        <p className="text-lg">
          La pintura de un tejado no solo mejora la estética, sino que también protege la estructura contra los elementos. Planifica cuidadosamente tu presupuesto para obtener los mejores resultados y la mayor durabilidad.
        </p>
      </section>
    </div>
  );
};

export default PintarTejado;
