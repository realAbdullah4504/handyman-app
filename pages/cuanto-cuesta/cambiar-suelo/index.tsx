import Head from "next/head";

const FlooringReplacement = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta cambiar el suelo? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con cambiar el suelo de tu hogar y cómo planificar esta renovación."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-suelo`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta cambiar el suelo?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Suelo Básico: €20 - €40 por metro cuadrado
						</p>
						<p>
							Suelo estándar de materiales como cerámica o vinilo.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Suelo de Alta Gama: €50 - €100+ por metro cuadrado
						</p>
						<p>
							Suelo con materiales premium como madera noble o
							mármol.
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
						Tipo de Material: Cerámica, vinilo, madera, mármol, etc.
					</li>
					<li>
						Área Total: Superficie del suelo a cubrir en metros
						cuadrados.
					</li>
					<li>
						Preparación del Suelo: Costos adicionales por nivelación
						o eliminación del suelo anterior.
					</li>
					<li>
						Instalación: Mano de obra y posibles costos adicionales
						por diseños complejos o patrones.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cambiar el Suelo
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Suelo Básico</strong>: €20 - €40 por metro
						cuadrado, materiales estándar como cerámica o vinilo.
					</li>
					<li>
						<strong>Suelo de Alta Gama</strong>: €50 - €100+ por
						metro cuadrado, materiales premium como madera noble o
						mármol.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Renovación
				</h2>
				<p>
					1. <strong>Selección del Suelo</strong>: Elige el tipo de
					material que se ajuste a tu estilo y presupuesto.
				</p>
				<p>
					2. <strong>Presupuesto Detallado</strong>: Incluye costos de
					materiales, instalación y preparación del suelo.
				</p>
				<p>
					3. <strong>Preparación del Espacio</strong>: Asegúrate de
					que el área esté lista para la instalación del nuevo suelo.
				</p>
				<p>
					4. <strong>Instalación Profesional</strong>: Contrata a
					profesionales cualificados para garantizar un resultado
					duradero y estético.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al cambiar el suelo, considera todos los factores
					involucrados para una renovación exitosa y dentro de tu
					presupuesto.
				</p>
			</section>
		</div>
	);
};

export default FlooringReplacement;
