
import Head from 'next/head';

const CambiarTejadoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar un tejado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de tejado y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-tejado`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar un tejado?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tejado Básico: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tejado Complejo: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye materiales premium y técnicas de instalación avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Tejas, paneles, pizarra, etc.</li>
          <li>Tamaño del Tejado: Superficie total a cubrir.</li>
          <li>Accesibilidad: Complejidad para acceder al tejado y espacio para equipos.</li>
          <li>Estado Estructural: Necesidad de reparaciones adicionales o refuerzos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar un Tejado</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tejado Básico</strong>: 50€ - 100€ por metro cuadrado, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Tejado Complejo</strong>: 100€ - 200€ por metro cuadrado, incluyendo materiales premium y técnicas de instalación avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Tejado</strong>: Determinar el tipo y estado actual del tejado.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtener estimaciones detalladas de contratistas especializados.</p>
        <p>3. <strong>Considerar la Durabilidad</strong>: Evaluar la longevidad y mantenimiento requerido para los materiales.</p>
        <p>4. <strong>Gestión de Residuos</strong>: Coordinar la eliminación adecuada de materiales viejos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el cambio de tejado, puedes asegurar que tu hogar esté protegido y mantener la inversión a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default CambiarTejadoCosto;