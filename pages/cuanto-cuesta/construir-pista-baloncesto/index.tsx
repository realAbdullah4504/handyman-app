import Head from "next/head";

const ConstruirPistaBaloncestoPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta construir una pista de baloncesto? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de una pista de baloncesto y cómo planificar el presupuesto para este proyecto deportivo."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-pista-baloncesto`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta construir una pista de baloncesto?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Construcción básica: €10,000 - €20,000
						</p>
						<p>
							Incluye preparación del terreno y cancha simple sin
							acabados especiales.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Construcción premium: €20,000 - €50,000
						</p>
						<p>
							Incluye cancha con materiales de alta calidad y
							acabados personalizados.
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
						Tamaño y tipo de la cancha: Dimensiones estándar vs.
						personalizadas.
					</li>
					<li>
						Materiales utilizados: Superficie de juego, cercado,
						iluminación, etc.
					</li>
					<li>
						Ubicación: Precios pueden variar según la región y
						accesibilidad.
					</li>
					<li>
						Acabados adicionales: Pintura, líneas de juego, bancos,
						etc.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Construir una Pista de Baloncesto
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Construcción básica</strong>: €10,000 - €20,000,
						incluyendo preparación del terreno y cancha simple.
					</li>
					<li>
						<strong>Construcción premium</strong>: €20,000 -
						€50,000, incluyendo materiales de alta calidad y
						acabados personalizados.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para la Construcción de una Pista de
					Baloncesto
				</h2>
				<p>
					1. <strong>Determinar Requerimientos</strong>: Especificar
					el tamaño y características deseadas para la pista.
				</p>
				<p>
					2. <strong>Solicitar Presupuestos</strong>: Obtener
					cotizaciones detalladas de contratistas especializados en
					construcción deportiva.
				</p>
				<p>
					3. <strong>Selección de Contratista</strong>: Elegir un
					contratista con experiencia en proyectos de canchas
					deportivas y buenas referencias.
				</p>
				<p>
					4. <strong>Supervisión del Proyecto</strong>: Asegurarse de
					la correcta ejecución del proyecto conforme a los estándares
					y regulaciones deportivas.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con la construcción adecuada de una pista de baloncesto,
					puedes disfrutar de un espacio deportivo de calidad para tu
					comunidad o residencia.
				</p>
			</section>
		</div>
	);
};

export default ConstruirPistaBaloncestoPage;
