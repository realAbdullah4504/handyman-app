import Head from 'next/head';

const ArquetasCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar arquetas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de arquetas en tu propiedad y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-arquetas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar arquetas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 500€ - 1,000€</p>
            <p>Precio estimado para la instalación estándar de arquetas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Compleja: 1,000€ - 3,000€</p>
            <p>Precio más alto para instalaciones que requieren excavaciones más profundas o reparaciones adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Profundidad: Dimensiones y profundidad de las arquetas requeridas.</li>
          <li>Acceso y Excavación: Dificultades como acceso limitado o necesidad de excavaciones extensas.</li>
          <li>Material y Tipo de Arquetas: Variedad de arquetas disponibles que pueden afectar el costo.</li>
          <li>Mano de Obra y Equipos: Costos asociados con el personal y el equipo necesario para la instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar Arquetas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 500€ - 1,000€, incluyendo arquetas estándar y mano de obra.
          </li>
          <li>
            <strong>Instalación Compleja</strong>: 1,000€ - 3,000€, para proyectos más grandes o complicados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Proyecto</strong>: Determinar el alcance y los requisitos específicos de las arquetas.</p>
        <p>2. <strong>Obtención de Varios Presupuestos</strong>: Comparar las ofertas de diferentes proveedores de servicios.</p>
        <p>3. <strong>Consideración de Costos Adicionales</strong>: Incluir contingencias para imprevistos durante la instalación.</p>
        <p>4. <strong>Calidad y Garantía</strong>: Verificar la calidad de las arquetas y la garantía ofrecida por el instalador.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la instalación de arquetas, es crucial considerar todos los factores involucrados para asegurar un proyecto exitoso dentro del presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default ArquetasCosto;