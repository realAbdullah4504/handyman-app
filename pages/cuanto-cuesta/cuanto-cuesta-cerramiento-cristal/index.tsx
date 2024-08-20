import Head from "next/head";

const CerramientoCristalCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un cerramiento de cristal? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con un cerramiento de cristal y cómo presupuestar para esta solución para tu espacio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cerramiento-cristal`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta un cerramiento de cristal?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">
              Cerramiento estándar: €1000 - €3000
            </p>
            <p>
              Incluye cristales templados y estructuras básicas de aluminio.
            </p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">
              Opciones personalizadas: €3000 - €10000+
            </p>
            <p>
              Puede incluir cristales especiales, sistemas de apertura avanzados
              y diseño personalizado.
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
            Tamaño del cerramiento: Áreas más grandes o más pequeñas pueden
            afectar el costo total.
          </li>
          <li>
            Tipo de cristal: Cristales simples vs. dobles, templados o
            laminados.
          </li>
          <li>
            Acabados y diseño: Diseños personalizados y acabados especiales
            pueden incrementar el precio.
          </li>
          <li>
            Instalación y estructura: Costos adicionales por mano de obra
            especializada y estructuras específicas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>
          1. <strong>Evaluar las necesidades del espacio</strong>: Determinar el
          tamaño y el tipo de cerramiento requerido.
        </p>
        <p>
          2. <strong>Solicitar múltiples presupuestos</strong>: Obtener
          cotizaciones detalladas de varios proveedores para comparar precios y
          servicios.
        </p>
        <p>
          3. <strong>Planificar la instalación</strong>: Coordinar la fecha y el
          tiempo de la instalación para minimizar la interrupción y garantizar
          la calidad del trabajo.
        </p>
        <p>
          4. <strong>Considerar costos adicionales</strong>: Incluir en el
          presupuesto final el costo de permisos, garantías y mantenimiento
          futuro.
        </p>
      </section>

      <section>
        <p className="text-lg">
          Al considerar un cerramiento de cristal, ten en cuenta estos factores
          para asegurar que el proyecto se ajuste a tu presupuesto y necesidades
          estéticas.
        </p>
      </section>
    </div>
  );
};

export default CerramientoCristalCoste;
