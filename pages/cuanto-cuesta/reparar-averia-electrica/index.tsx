import Head from 'next/head';

const RepararAveriaElectricaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una avería eléctrica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reparación de averías eléctricas y cómo planificar tu presupuesto para mantener la seguridad eléctrica en tu hogar o negocio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-averia-electrica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una avería eléctrica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: €50 - €200</p>
            <p>Incluye diagnóstico y reparación de problemas simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: €200 - €1000</p>
            <p>Incluye reparaciones complejas o reemplazo de componentes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de avería: Desde problemas simples como fusibles fundidos hasta problemas complejos como cableado defectuoso.</li>
          <li>Equipo y materiales: Costos de los materiales necesarios para la reparación.</li>
          <li>Experiencia del técnico: Tarifas pueden variar según la experiencia y especialización del electricista.</li>
          <li>Emergencia: Costos adicionales pueden aplicarse para reparaciones urgentes fuera de horario laboral.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reparación de averías eléctricas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: €50 - €200, incluyendo diagnóstico y reparación de problemas simples.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: €200 - €1000, incluyendo reparaciones complejas o reemplazo de componentes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial de la avería</strong>: Identificar la naturaleza del problema eléctrico.</p>
        <p>2. <strong>Solicitar múltiples presupuestos</strong>: Obtener estimaciones detalladas de varios electricistas calificados.</p>
        <p>3. <strong>Considerar seguridad y eficiencia energética</strong>: Valorar el costo a largo plazo de las soluciones propuestas.</p>
        <p>4. <strong>Garantía y revisión</strong>: Asegurar la garantía y el soporte post-reparación ofrecido por el proveedor de servicios.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de reparación de averías eléctricas, puedes mantener la seguridad y funcionalidad eléctrica en tu propiedad de manera efectiva.
        </p>
      </section>
    </div>
  );
};

export default RepararAveriaElectricaCoste;
