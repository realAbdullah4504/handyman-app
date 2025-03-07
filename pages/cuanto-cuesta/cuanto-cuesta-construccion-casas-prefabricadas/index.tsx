import Head from 'next/head';

const ConstruccionCasasPrefabricadasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la construcción de una casa prefabricada? - Oficios24</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de casas prefabricadas y cómo presupuestar para tu proyecto de vivienda prefabricada."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta-construccion-casas-prefabricadas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la construcción de una casa prefabricada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa Prefabricada Básica: €700 - €1,200 por metro cuadrado</p>
            <p>Incluye construcción estándar con materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa Prefabricada de Alta Gama: €1,200 - €2,500 por metro cuadrado</p>
            <p>Incluye materiales de alta calidad y acabados premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la casa: Casas más grandes y diseños personalizados aumentan el costo.</li>
          <li>Materiales y acabados: Calidad de los materiales y acabados utilizados.</li>
          <li>Instalación y transporte: Costos de instalación y transporte de los módulos prefabricados.</li>
          <li>Ubicación del proyecto: El costo puede variar dependiendo de la localización y el acceso al sitio.</li>
          <li>Permisos y licencias: Costos de obtener los permisos necesarios para la construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la construcción de casas prefabricadas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Casa Prefabricada Básica</strong>: €700 - €1,200 por metro cuadrado, incluyendo materiales básicos y mano de obra estándar.
          </li>
          <li>
            <strong>Casa Prefabricada de Alta Gama</strong>: €1,200 - €2,500 por metro cuadrado, incluyendo materiales de alta calidad y acabados premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar las necesidades del proyecto</strong>: Determinar el tamaño y diseño de la casa prefabricada.</p>
        <p>2. <strong>Obtener varios presupuestos</strong>: Comparar ofertas de diferentes constructores y proveedores de materiales.</p>
        <p>3. <strong>Considerar la durabilidad y mantenimiento</strong>: Optar por materiales que ofrezcan valor a largo plazo.</p>
        <p>4. <strong>Planificación y diseño</strong>: Trabajar con arquitectos y diseñadores para asegurar que el proyecto cumpla con tus expectativas y necesidades.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la construcción de tu casa prefabricada, ten en cuenta estos factores para asegurar un proyecto exitoso dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionCasasPrefabricadasCoste;