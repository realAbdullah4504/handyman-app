
import Head from 'next/head';

const AsfaltarCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta asfaltar? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el asfaltado de superficies y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-asfaltar`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta asfaltar?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Asfaltado Básico: 20€ - 30€ por metro cuadrado</p>
            <p>Incluye preparación del terreno y asfaltado estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Asfaltado Avanzado: 30€ - 50€ por metro cuadrado</p>
            <p>Incluye asfaltado con materiales de mayor calidad y técnicas avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Superficie: Calles, aparcamientos, caminos rurales, etc.</li>
          <li>Calidad del Asfalto: Básico vs. Avanzado.</li>
          <li>Área Total: Extensión del área a ser asfaltada.</li>
          <li>Ubicación: Precios pueden variar según la región y proveedores locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Asfaltado</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Asfaltado Básico</strong>: 20€ - 30€ por metro cuadrado, incluyendo preparación del terreno y asfaltado estándar.
          </li>
          <li>
            <strong>Asfaltado Avanzado</strong>: 30€ - 50€ por metro cuadrado, incluyendo materiales de mayor calidad y técnicas avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Área</strong>: Determinar la extensión y tipo de superficie a asfaltar.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicitar presupuestos detallados de varios contratistas.</p>
        <p>3. <strong>Considerar Durabilidad y Mantenimiento</strong>: Optar por materiales que minimicen costos de mantenimiento a largo plazo.</p>
        <p>4. <strong>Selección de Proveedor</strong>: Elegir un proveedor con experiencia en asfaltado y buenas referencias.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el asfaltado, puedes mejorar la durabilidad y la estética de tus superficies, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default AsfaltarCosto;