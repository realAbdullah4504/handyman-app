import Head from 'next/head';

const CambiarCubiertaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar una cubierta? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cambiar una cubierta y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-cubierta`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar una cubierta?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye demolición y reemplazo básico de la cubierta.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Complejo: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye modificaciones estructurales y materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño de la Cubierta: Área total y complejidad del diseño arquitectónico.</li>
          <li>Material y Calidad: Tipo de material utilizado para la nueva cubierta y sus propiedades.</li>
          <li>Requisitos Locales: Normativas y permisos necesarios para la construcción o renovación de la cubierta.</li>
          <li>Accesibilidad: Facilidad o dificultad para acceder al sitio de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar una Cubierta</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 50€ - 100€ por metro cuadrado, incluyendo demolición y reemplazo básico de la cubierta.
          </li>
          <li>
            <strong>Proyecto Complejo</strong>: 100€ - 200€ por metro cuadrado, incluyendo modificaciones estructurales y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Cubierta Actual</strong>: Determinar el estado actual de la cubierta y las necesidades de renovación.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtener cotizaciones detalladas de varios contratistas o empresas especializadas.</p>
        <p>3. <strong>Considerar la Durabilidad</strong>: Evaluar la longevidad y mantenimiento requerido de la nueva cubierta.</p>
        <p>4. <strong>Seguridad y Legalidad</strong>: Cumplir con los códigos de construcción locales y obtener los permisos necesarios.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar cuidadosamente el cambio de una cubierta garantizará que tu hogar esté protegido y mantenga su integridad estructural a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default CambiarCubiertaCosto;