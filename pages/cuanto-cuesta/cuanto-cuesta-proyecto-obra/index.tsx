
import Head from 'next/head';

const ProyectoObraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un proyecto de obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la realización de un proyecto de obra y cómo planificar tu presupuesto para este tipo de trabajos de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-proyecto-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un proyecto de obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 5000€ - 10000€</p>
            <p>Incluye planos y documentación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Detallado: 10000€ - 20000€</p>
            <p>Incluye planos detallados, cálculos estructurales y memoria de calidades.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Proyecto: Área total a construir o remodelar.</li>
          <li>Complejidad del Diseño: Detalles arquitectónicos y estructurales.</li>
          <li>Materiales y Acabados: Costos variados según los materiales seleccionados.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para un Proyecto de Obra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 5000€ - 10000€, incluyendo planos y documentación básica.
          </li>
          <li>
            <strong>Proyecto Detallado</strong>: 10000€ - 20000€, incluyendo planos detallados, cálculos estructurales y memoria de calidades.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Requisitos</strong>: Determina los objetivos y requisitos específicos del proyecto.</p>
        <p>2. <strong>Consulta Profesional</strong>: Busca asesoramiento de arquitectos y contratistas para obtener estimaciones detalladas.</p>
        <p>3. <strong>Comparación de Propuestas</strong>: Compara diferentes propuestas y selecciona la opción que mejor se ajuste a tus necesidades y presupuesto.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye un margen adicional para imprevistos y ajustes durante la ejecución del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente un proyecto de obra, puedes asegurar que se cumplirán tus expectativas de diseño y funcionalidad, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default ProyectoObraCoste;