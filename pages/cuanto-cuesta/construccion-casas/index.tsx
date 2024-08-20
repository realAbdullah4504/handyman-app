import Head from "next/head";

const ConstruccionCasasPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta la construcción de casas? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de casas y cómo planificar el presupuesto para este proyecto de obra."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construccion-casas`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta la construcción de casas?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Construcción Básica: €900 - €1,200 por m²
						</p>
						<p>
							Incluye estructura básica, paredes y tejado
							estándar.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Construcción Premium: €1,200 - €1,800 por m²
						</p>
						<p>
							Incluye materiales de alta calidad y diseño
							personalizado.
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
						Tamaño y diseño de la casa: Área total a construir y
						complejidad del diseño arquitectónico.
					</li>
					<li>
						Calidad de los materiales: Materiales estándar vs.
						materiales premium seleccionados.
					</li>
					<li>
						Ubicación: Costos pueden variar según la ubicación
						geográfica y oferta local de mano de obra y materiales.
					</li>
					<li>
						Acabados interiores: Costos adicionales por acabados de
						alta gama y personalización.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para la Construcción de Casas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Construcción Básica</strong>: €900 - €1,200 por
						m², incluye estructura básica y paredes estándar.
					</li>
					<li>
						<strong>Construcción Premium</strong>: €1,200 - €1,800
						por m², incluye materiales de alta calidad y diseño
						personalizado.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Diseño y Planificación</strong>: Define
					claramente los requisitos y diseño de tu casa.
				</p>
				<p>
					2. <strong>Obtención de Cotizaciones</strong>: Solicita
					presupuestos detallados de diferentes constructores y
					empresas.
				</p>
				<p>
					3. <strong>Consideraciones Adicionales</strong>: Incluye
					costos de permisos, gestión de residuos y otros gastos
					relacionados.
				</p>
				<p>
					4. <strong>Calidad y Durabilidad</strong>: Prioriza la
					calidad de la construcción y durabilidad para minimizar
					costos a largo plazo.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y entendimiento de los costos
					involucrados, puedes llevar a cabo la construcción de tu
					casa dentro de tu presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default ConstruccionCasasPage;
