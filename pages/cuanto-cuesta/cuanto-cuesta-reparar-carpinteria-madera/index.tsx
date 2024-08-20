import Head from 'next/head';

const RepararCarpinteriaMaderaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar carpintería de madera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de carpintería de madera y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-carpinteria-madera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar carpintería de madera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparaciones Básicas: 50€ - 200€ por proyecto</p>
            <p>Incluye pequeñas reparaciones como ajustes y reemplazo de piezas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparaciones Avanzadas: 200€ - 500€ por proyecto</p>
            <p>Incluye reparaciones complejas como restauraciones y reconstrucciones.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Grado de Daño: Pequeñas reparaciones versus restauraciones completas.</li>
          <li>Materiales Utilizados: Costos basados en la calidad y tipo de madera y accesorios necesarios.</li>
          <li>Complejidad del Trabajo: Impacto en los costos según la dificultad y tiempo necesario para las reparaciones.</li>
          <li>Ubicación y Accesibilidad: Influencia en los costos debido a la distancia y accesibilidad al sitio de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar Carpintería de Madera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparaciones Básicas</strong>: 50€ - 200€ por proyecto, incluyendo ajustes y reemplazo de piezas pequeñas.
          </li>
          <li>
            <strong>Reparaciones Avanzadas</strong>: 200€ - 500€ por proyecto, incluyendo restauraciones y reconstrucciones complejas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Proyecto</strong>: Inspecciona y documenta el alcance completo de las reparaciones necesarias.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén estimaciones detalladas de varios carpinteros para comparar costos y servicios.</p>
        <p>3. <strong>Selección del Profesional</strong>: Considera la experiencia, reputación y portafolio del carpintero antes de contratar.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye costos de materiales, acabados y cualquier servicio adicional como transporte y disposición de desechos.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica cuidadosamente la reparación de carpintería de madera para garantizar resultados duraderos y satisfactorios dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default RepararCarpinteriaMaderaCoste;
