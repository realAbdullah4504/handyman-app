
import Head from 'next/head';

const ProyectoArquitecturaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un proyecto de arquitectura? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la realización de un proyecto de arquitectura y cómo planificar tu presupuesto para esta fase inicial del proceso de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-proyecto-arquitectura`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un proyecto de arquitectura?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 3,000€ - 6,000€</p>
            <p>Incluye planos básicos y especificaciones generales para la construcción.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Detallado: 6,000€ - 12,000€</p>
            <p>Incluye planos detallados, especificaciones técnicas y estudio de viabilidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad: Dimensiones y características específicas del proyecto arquitectónico.</li>
          <li>Especificaciones Técnicas: Detalle y precisión requerida en los planos y especificaciones.</li>
          <li>Consultoría Especializada: Honorarios de arquitectos y consultores involucrados en el proyecto.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y condiciones locales del mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Proyectos de Arquitectura</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 3,000€ - 6,000€, incluyendo planos y especificaciones generales.
          </li>
          <li>
            <strong>Proyecto Detallado</strong>: 6,000€ - 12,000€, incluyendo planos detallados y especificaciones técnicas completas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definir Requisitos</strong>: Especificar necesidades y objetivos del proyecto arquitectónico.</p>
        <p>2. <strong>Consultar Profesionales</strong>: Obtener presupuestos detallados de arquitectos y consultores para comparar servicios y precios.</p>
        <p>3. <strong>Considerar Normativas</strong>: Asegurarse de cumplir con las regulaciones y requisitos legales locales durante la planificación.</p>
        <p>4. <strong>Prever Contingencias</strong>: Establecer un margen para imprevistos y ajustes durante la ejecución del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente un proyecto de arquitectura, puedes asegurar una base sólida para la construcción efectiva y eficiente de tu proyecto.
        </p>
      </section>
    </div>
  );
};

export default ProyectoArquitecturaCoste;