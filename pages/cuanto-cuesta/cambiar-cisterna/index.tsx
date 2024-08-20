import Head from "next/head";

const CambiarCisternaPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta cambiar la cisterna? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con el cambio de cisterna en un baño y cómo planificar tu presupuesto para esta instalación."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-cisterna`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta cambiar la cisterna?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cisterna Estándar: €100 - €300
						</p>
						<p>
							Incluye cisterna de reemplazo estándar y mano de
							obra básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cisterna de Alta Gama: €300 - €600
						</p>
						<p>
							Incluye cisterna de lujo y mano de obra
							especializada.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>
						Tipo de cisterna: Estándar vs. alta gama con
						características adicionales.
					</li>
					<li>
						Marca y calidad: Marcas reconocidas vs. opciones
						genéricas.
					</li>
					<li>
						Complejidad de la instalación: Reemplazo básico vs.
						ajustes adicionales en la fontanería.
					</li>
					<li>
						Ubicación: Costos pueden variar según la accesibilidad y
						normativas locales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cambio de Cisterna
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Cisterna Estándar</strong>: €100 - €300, incluye
						cisterna de reemplazo estándar y mano de obra básica.
					</li>
					<li>
						<strong>Cisterna de Alta Gama</strong>: €300 - €600,
						incluye cisterna de lujo y mano de obra especializada.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determina el
					tipo y características requeridas de la nueva cisterna.
				</p>
				<p>
					2. <strong>Obtención de Cotizaciones</strong>: Solicita
					presupuestos detallados de varias empresas de fontanería.
				</p>
				<p>
					3. <strong>Consideración de Adicionales</strong>: Asegúrate
					de incluir costos como piezas adicionales y ajustes en la
					fontanería.
				</p>
				<p>
					4. <strong>Normativas Locales</strong>: Verifica los
					permisos y normativas para la instalación de la cisterna.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y entendimiento de los
					costos, puedes cambiar la cisterna de tu baño dentro de tu
					presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default CambiarCisternaPage;
