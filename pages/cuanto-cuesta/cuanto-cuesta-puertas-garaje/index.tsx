import Head from 'next/head';

const CuantoCuestaPuertasGaraje = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una puerta de garaje? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de puertas de garaje y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-puertas-garaje`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una puerta de garaje?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo básico: €1,000 - €3,000</p>
            <p>Incluye puerta estándar y instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo avanzado: €3,000 - €6,000</p>
            <p>Incluye puerta premium y técnicas de instalación complejas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y calidad de la puerta: Estándar vs. premium.</li>
          <li>Tamaño de la puerta: Según las dimensiones del garaje.</li>
          <li>Instalación eléctrica: Si se requiere un sistema automático.</li>
          <li>Accesorios adicionales: Como controles remotos y sistemas de seguridad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación de puertas de garaje</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación básica</strong>: €1,000 - €3,000, incluye puerta estándar y instalación básica.
          </li>
          <li>
            <strong>Instalación avanzada</strong>: €3,000 - €6,000, incluye puerta premium y técnicas de instalación complejas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina el tipo y tamaño de la puerta de garaje que necesitas.</p>
        <p>2. <strong>Comparación de precios</strong>: Obtén cotizaciones de varios instaladores para comparar precios y opciones.</p>
        <p>3. <strong>Considera la durabilidad</strong>: Piensa en la calidad y durabilidad para un retorno de inversión a largo plazo.</p>
        <p>4. <strong>Contratación de profesionales</strong>: Elige instaladores con experiencia para garantizar una instalación adecuada y segura.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa, puedes instalar una puerta de garaje que no solo sea funcional sino también mejore el valor y la seguridad de tu propiedad.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaPuertasGaraje;