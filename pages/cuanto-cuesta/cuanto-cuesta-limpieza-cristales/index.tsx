import Head from 'next/head';

const LimpiezaCristalesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de cristales? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de cristales y cómo mantener ventanas y superficies transparentes y limpias."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-cristales`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de cristales?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 50€ - 100€</p>
            <p>Incluye limpieza de ventanas exteriores e interiores de un hogar estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 100€ - 200€</p>
            <p>Incluye limpieza de ventanas y cristales difíciles de alcanzar o con alto nivel de suciedad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Número y Tamaño de las Ventanas: Más ventanas o ventanas grandes implican más trabajo y tiempo.</li>
          <li>Altura y Accesibilidad: Ventanas en pisos altos o de difícil acceso pueden requerir equipos especiales.</li>
          <li>Estado de las Ventanas: Ventanas con suciedad incrustada o manchas difíciles pueden requerir más tiempo y productos especiales.</li>
          <li>Frecuencia de la Limpieza: Limpiezas regulares pueden ser más económicas que limpiezas esporádicas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Cristales</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 50€ - 100€, incluyendo limpieza de ventanas exteriores e interiores de un hogar estándar.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 100€ - 200€, incluyendo limpieza de ventanas y cristales difíciles de alcanzar o con alto nivel de suciedad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina el número y tipo de ventanas que necesitan limpieza.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Consulta con varias empresas de limpieza para obtener presupuestos detallados.</p>
        <p>3. <strong>Considera la Frecuencia</strong>: Programa limpiezas regulares para mantener las ventanas limpias y prolongar su vida útil.</p>
        <p>4. <strong>Mantenimiento Preventivo</strong>: Considera sellar o proteger las ventanas después de la limpieza para mantenerlas más limpias por más tiempo.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener los cristales limpios no solo mejora la apariencia de tu hogar o negocio, sino que también ayuda a conservar mejor las ventanas y prolongar su vida útil.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaCristalesCoste;
