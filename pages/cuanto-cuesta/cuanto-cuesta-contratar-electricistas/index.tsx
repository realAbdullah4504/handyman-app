import Head from "next/head";

const ElectricistasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar electricistas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la contratación de electricistas para diferentes tipos de proyectos eléctricos en tu hogar o negocio."
        />

        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-contratar-electricistas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta contratar electricistas?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">
              Instalación básica: €100 - €500
            </p>
            <p>
              Incluye instalaciones sencillas como tomas de corriente o cambio
              de luminarias.
            </p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">
              Proyecto completo: €500 - €2,000
            </p>
            <p>
              Proyectos más complejos como cableado completo o instalaciones
              industriales.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Factores que afectan los costos
        </h2>
        <ul className="list-disc list-inside">
          <li>
            Tipo de proyecto: Reparación, instalación nueva, actualización de
            sistemas.
          </li>
          <li>Escalas de trabajo: Residencial, comercial o industrial.</li>
          <li>
            Equipo y materiales: Calidad y cantidad de materiales necesarios
            para el proyecto.
          </li>
          <li>
            Localización y accesibilidad: Impacto del entorno y acceso al sitio
            de trabajo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Precios promedio para contratar electricistas
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación básica</strong>: €100 - €500, incluyendo
            proyectos simples como tomas de corriente.
          </li>
          <li>
            <strong>Proyecto completo</strong>: €500 - €2,000, incluyendo
            instalaciones complejas como cableado completo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Planificación de presupuesto
        </h2>
        <p>
          1. <strong>Identificar necesidades eléctricas</strong>: Determinar el
          alcance del proyecto y requisitos específicos.
        </p>
        <p>
          2. <strong>Solicitar múltiples presupuestos</strong>: Comparar ofertas
          de diferentes electricistas para obtener la mejor relación
          calidad-precio.
        </p>
        <p>
          3. <strong>Considerar la calidad y garantía</strong>: Asegurarse de
          elegir electricistas con experiencia y garantía de trabajo.
        </p>
        <p>
          4. <strong>Revisar normativas locales</strong>: Cumplir con las
          regulaciones eléctricas y permisos necesarios para el proyecto.
        </p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos de contratar
          electricistas, puedes planificar y ejecutar proyectos eléctricos de
          manera eficiente y segura.
        </p>
      </section>
    </div>
  );
};

export default ElectricistasCoste;
