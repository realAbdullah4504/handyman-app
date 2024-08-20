import Head from 'next/head';

const ArreglarTejadoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta arreglar un tejado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de tejados y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-arreglar-tejado`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta arreglar un tejado?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 500€ - 1000€</p>
            <p>Incluye reparaciones menores y reemplazo de tejas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Completa: 2000€ - 5000€</p>
            <p>Incluye reparaciones extensas y reemplazo de estructuras.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión del Daño: Desde pequeñas filtraciones hasta daños estructurales.</li>
          <li>Tipo de Techo: Tejados planos vs. tejados inclinados.</li>
          <li>Materiales Utilizados: Costo de las tejas, membranas impermeabilizantes, etc.</li>
          <li>Accesibilidad: Dificultad para acceder al tejado y espacio disponible para equipos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Arreglar un Tejado</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 500€ - 1000€, incluyendo reparaciones menores y reemplazo de tejas.
          </li>
          <li>
            <strong>Reparación Completa</strong>: 2000€ - 5000€, incluyendo reparaciones extensas y reemplazo de estructuras.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Daño</strong>: Inspección detallada para determinar la magnitud y el tipo de reparaciones necesarias.</p>
        <p>2. <strong>Obtención de Estimaciones</strong>: Solicitar presupuestos detallados de varios contratistas para comparar precios y métodos de reparación.</p>
        <p>3. <strong>Selección de Materiales</strong>: Considerar la calidad y durabilidad de los materiales a utilizar en la reparación del tejado.</p>
        <p>4. <strong>Planificación del Tiempo</strong>: Coordinar el calendario de reparaciones para minimizar el impacto climático y asegurar la eficiencia.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la reparación de un tejado, puedes asegurar la integridad estructural de tu hogar y evitar problemas futuros.
        </p>
      </section>
    </div>
  );
};

export default ArreglarTejadoCosto;