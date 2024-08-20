
import Head from 'next/head';

const ReparacionElectrodomesticosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la reparación de electrodomésticos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reparación de electrodomésticos y cómo planificar tu presupuesto para mantener el funcionamiento óptimo de tus equipos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparacion-electrodomesticos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la reparación de electrodomésticos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: €50 - €200</p>
            <p>Incluye diagnóstico y reparación de problemas menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: €200 - €1000</p>
            <p>Incluye diagnóstico profundo y reparaciones complejas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de electrodoméstico: Lavadoras, refrigeradores, hornos, etc.</li>
          <li>Gravedad del problema: Naturaleza y extensión del daño o mal funcionamiento.</li>
          <li>Piezas y repuestos: Costos adicionales por partes nuevas o especializadas.</li>
          <li>Ubicación: Tarifas pueden variar según la ubicación geográfica y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reparación de electrodomésticos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: €50 - €200, incluyendo diagnóstico y reparación de problemas menores.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: €200 - €1000, incluyendo diagnóstico profundo y reparaciones complejas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Diagnóstico preciso del problema</strong>: Identificar la causa principal del mal funcionamiento.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Comparar costos y servicios ofrecidos por técnicos especializados.</p>
        <p>3. <strong>Evaluación de opciones</strong>: Considerar la posibilidad de reparación versus reemplazo del electrodoméstico.</p>
        <p>4. <strong>Garantía y seguimiento</strong>: Verificar las garantías ofrecidas y opciones de servicio post-reparación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos de reparación de electrodomésticos, puedes tomar decisiones informadas para mantener tus equipos funcionando eficientemente.
        </p>
      </section>
    </div>
  );
};

export default ReparacionElectrodomesticosCoste;