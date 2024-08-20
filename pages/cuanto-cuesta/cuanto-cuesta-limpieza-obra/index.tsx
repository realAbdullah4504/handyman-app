import Head from 'next/head';

const LimpiezaObraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de obra y cómo mantener tu espacio limpio y seguro después de una remodelación o construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 200€ - 500€</p>
            <p>Incluye eliminación de escombros gruesos y limpieza general de polvo y suciedad.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 500€ - 1000€</p>
            <p>Incluye limpieza detallada de residuos de construcción, manchas persistentes y preparación para ocupación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Proyecto: Mayor tamaño y complejidad implican más trabajo y materiales.</li>
          <li>Tipo de Residuos: Desechos de construcción, pintura y otros materiales influyen en el costo.</li>
          <li>Acceso y Seguridad: Espacios de difícil acceso o que requieren medidas de seguridad adicionales pueden aumentar el costo.</li>
          <li>Tiempo Transcurrido: Limpieza inmediata después de la obra puede ser más económica que limpiezas tardías con residuos incrustados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Obra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 200€ - 500€, incluyendo eliminación de escombros gruesos y limpieza general de polvo y suciedad.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 500€ - 1000€, incluyendo limpieza detallada de residuos de construcción, manchas persistentes y preparación para ocupación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Post-Obra</strong>: Determina el estado de limpieza necesario y cualquier área especial de atención.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Consulta con empresas de limpieza especializadas en limpieza post-obra para obtener cotizaciones detalladas.</p>
        <p>3. <strong>Seguridad y Cumplimiento</strong>: Asegúrate de que la empresa cumpla con las normativas de seguridad y medioambientales aplicables.</p>
        <p>4. <strong>Mantenimiento Continuo</strong>: Considera un plan de mantenimiento regular para mantener el espacio limpio y seguro después de la limpieza inicial.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza adecuada después de una obra es crucial para garantizar un espacio seguro y listo para su ocupación, además de prolongar la vida útil de los materiales utilizados.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaObraCoste;