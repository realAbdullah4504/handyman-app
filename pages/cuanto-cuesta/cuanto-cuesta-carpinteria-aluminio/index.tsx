
import Head from 'next/head';

const CuantoCuestaCarpinteriaAluminio = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar carpintería de aluminio? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la contratación de servicios de carpintería de aluminio para ventanas, puertas y cerramientos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-carpinteria-aluminio`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar carpintería de aluminio?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ventanas estándar: €100 - €300 por metro cuadrado</p>
            <p>Dependiendo del tamaño y tipo de ventana.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puertas de entrada: €500 - €1000 por unidad</p>
            <p>Incluyendo instalación básica.</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cerramientos de terraza: €2000 - €5000</p>
            <p>Varía según el tamaño y complejidad del diseño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de producto: Ventanas, puertas, cerramientos, etc.</li>
          <li>Material y calidad: Aluminio estándar vs. aluminio premium.</li>
          <li>Medidas y diseño: Tamaño del proyecto y personalización requerida.</li>
          <li>Instalación: Costos adicionales por instalación especializada o detalles específicos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar exactamente qué productos y medidas son necesarios.</p>
        <p>2. <strong>Obtener múltiples cotizaciones</strong>: Comparar precios y servicios de varios proveedores de carpintería de aluminio.</p>
        <p>3. <strong>Considerar el mantenimiento</strong>: Calcular costos a largo plazo incluyendo mantenimiento y durabilidad del aluminio.</p>
        <p>4. <strong>Garantía y servicio post-venta</strong>: Asegurar que el proveedor ofrezca garantía y servicio adecuado después de la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar servicios de carpintería de aluminio puede mejorar la eficiencia energética y estética de tu hogar o negocio.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaCarpinteriaAluminio;