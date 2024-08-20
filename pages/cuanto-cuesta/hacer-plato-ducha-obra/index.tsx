import Head from "next/head";

const HacerPlatoDuchaObraPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta hacer un plato de ducha de obra? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de un plato de ducha de obra y cómo planificar el presupuesto para este proyecto de remodelación de baños."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/hacer-plato-ducha-obra`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta hacer un plato de ducha de obra?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Plato de ducha estándar: €300 - €600
						</p>
						<p>Incluye materiales y mano de obra básica.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Plato de ducha personalizado: €600 - €1,200
						</p>
						<p>
							Incluye diseño personalizado y materiales premium.
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
						Tamaño y diseño del plato de ducha: Estándar vs.
						personalizado.
					</li>
					<li>
						Materiales utilizados: Desde cerámica hasta piedra
						natural.
					</li>
					<li>
						Preparación del suelo: Necesidad de nivelación o
						trabajos adicionales.
					</li>
					<li>
						Ubicación y accesibilidad: Impacto en costos de
						transporte y mano de obra.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Platos de Ducha de Obra
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Plato estándar</strong>: €300 - €600, incluyendo
						materiales y mano de obra básica.
					</li>
					<li>
						<strong>Plato personalizado</strong>: €600 - €1,200,
						incluyendo diseño personalizado y materiales premium.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Construir un Plato de Ducha de Obra
				</h2>
				<p>
					1. <strong>Diseño y Especificaciones</strong>: Definir el
					diseño y tamaño del plato de ducha requerido.
				</p>
				<p>
					2. <strong>Obtención de Presupuestos</strong>: Comparar
					cotizaciones de varios contratistas de construcción
					especializados en baños.
				</p>
				<p>
					3. <strong>Selección del Contratista</strong>: Elegir un
					profesional con experiencia en la construcción de platos de
					ducha de obra.
				</p>
				<p>
					4. <strong>Ejecución y Supervisión</strong>: Asegurarse de
					que la construcción se realice según los estándares y plazos
					acordados.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y presupuesto, la
					construcción de un plato de ducha de obra puede transformar
					tu baño de manera efectiva.
				</p>
			</section>
		</div>
	);
};

export default HacerPlatoDuchaObraPage;
