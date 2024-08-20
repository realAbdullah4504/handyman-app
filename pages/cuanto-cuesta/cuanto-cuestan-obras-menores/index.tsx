import Head from 'next/head';

const ObrasMenoresCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las obras menores? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con las obras menores y cómo presupuestar para proyectos de reparación y mantenimiento."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuestan-obras-menores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las obras menores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparaciones básicas: €100 - €500</p>
            <p>Incluye reparaciones simples como fontanería, electricidad o pintura.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mejoras y renovaciones: €500 - €2000+</p>
            <p>Incluye mejoras estéticas o funcionales como cambio de suelos o reformas parciales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de trabajo: El costo varía según si es una reparación simple o una mejora más compleja.</li>
          <li>Calidad de los materiales: Utilizar materiales estándar o premium puede influir en el costo total.</li>
          <li>Profesionalismo requerido: Costos pueden aumentar si se necesita mano de obra especializada.</li>
          <li>Escala del proyecto: Proyectos más grandes o que requieren múltiples trabajos pueden ser más costosos.</li>
          <li>Ubicación del proyecto: Los costos pueden variar según la accesibilidad y la ubicación geográfica.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para obras menores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparaciones básicas</strong>: €100 - €500, incluyendo trabajos simples de fontanería, electricidad o pintura.
          </li>
          <li>
            <strong>Mejoras y renovaciones</strong>: €500 - €2000+, incluyendo cambios estéticos o funcionales como renovación de suelos o reformas parciales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del proyecto</strong>: Determinar el tipo y alcance de las obras menores necesarias.</p>
        <p>2. <strong>Obtener cotizaciones</strong>: Solicitar presupuestos detallados de contratistas y proveedores de materiales.</p>
        <p>3. <strong>Gestión de tiempo y recursos</strong>: Planificar la disponibilidad de tiempo y recursos necesarios para completar las obras menores.</p>
        <p>4. <strong>Seguimiento y mantenimiento</strong>: Considerar costos adicionales para mantenimiento regular y futuras reparaciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar obras menores, considera estos factores para garantizar que el proyecto se realice dentro del presupuesto y cumpla con tus expectativas de calidad y funcionalidad.
        </p>
      </section>
    </div>
  );
};

export default ObrasMenoresCoste;
