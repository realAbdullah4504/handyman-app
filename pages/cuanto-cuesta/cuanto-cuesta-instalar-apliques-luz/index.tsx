import Head from 'next/head';

const InstalacionApliquesLuz = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar apliques de luz? - Oficios24</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de apliques de luz y cómo presupuestar para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-apliques-luz`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar apliques de luz?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €50 - €100 por aplique</p>
            <p>Incluye instalación estándar de apliques de luz en paredes accesibles.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Compleja: €100 - €200 por aplique</p>
            <p>Incluye instalación en lugares de difícil acceso o con requerimientos especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Cantidad de apliques a instalar.</li>
          <li>Tipo de pared (yeso, hormigón, etc.) y accesibilidad.</li>
          <li>Requisitos eléctricos y normativos locales.</li>
          <li>Costo de los materiales y herramientas necesarios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de apliques de luz</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €50 - €100 por aplique, incluyendo instalación estándar en paredes accesibles.
          </li>
          <li>
            <strong>Instalación Compleja</strong>: €100 - €200 por aplique, incluyendo instalación en lugares de difícil acceso o con requerimientos especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar la cantidad y ubicación de los apliques de luz requeridos.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de electricistas o instaladores de apliques de luz.</p>
        <p>3. <strong>Considerar requisitos legales</strong>: Asegurarse de cumplir con las normativas locales y requisitos de seguridad eléctrica.</p>
        <p>4. <strong>Calidad del servicio</strong>: Elegir un proveedor con experiencia y referencias sólidas para garantizar una instalación segura y duradera.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes gestionar eficazmente la instalación de apliques de luz dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalacionApliquesLuz;
