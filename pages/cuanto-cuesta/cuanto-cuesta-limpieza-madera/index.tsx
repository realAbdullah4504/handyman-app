import Head from 'next/head';

const LimpiezaMaderaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de madera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de muebles y superficies de madera y cómo mantenerlas en condiciones óptimas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-madera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de madera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 20€ - 50€ por hora</p>
            <p>Incluye limpieza superficial de muebles y superficies de madera.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 50€ - 100€ por hora</p>
            <p>Incluye limpieza intensiva de madera, pulido y restauración de muebles antiguos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado de la Madera: Nuevo, antiguo, tratado o sin tratar.</li>
          <li>Tipo de Madera: Dura o blanda, con acabados especiales.</li>
          <li>Dimensiones y Complejidad: Tamaño de los muebles o superficies a limpiar.</li>
          <li>Servicios Adicionales: Pulido, encerado, o restauración de muebles antiguos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Madera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 20€ - 50€ por hora, incluyendo limpieza superficial de muebles y superficies de madera.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 50€ - 100€ por hora, incluyendo pulido y restauración de muebles de madera antiguos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar Necesidades de Limpieza</strong>: Determina el estado y tipo de madera que requiere limpieza.</p>
        <p>2. <strong>Solicitar Cotizaciones</strong>: Obtén presupuestos detallados de empresas especializadas en limpieza de muebles de madera.</p>
        <p>3. <strong>Considerar Mantenimiento Regular</strong>: Programa limpiezas periódicas para mantener la madera en condiciones óptimas.</p>
        <p>4. <strong>Elegir Profesionales Calificados</strong>: Selecciona especialistas con experiencia en limpieza y tratamiento de madera para garantizar resultados satisfactorios.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener muebles y superficies de madera limpios y bien cuidados no solo mejora su aspecto, sino que también prolonga su vida útil.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaMaderaCoste;