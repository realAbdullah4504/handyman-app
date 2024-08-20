import Head from "next/head";

const PonerTrasdosadoPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta poner trasdosado? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de trasdosado y cómo planificar el presupuesto para este proyecto de remodelación de interiores."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/poner-trasdosado`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta poner trasdosado?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Trasdosado estándar: €20 - €30 por metro cuadrado
						</p>
						<p>Incluye materiales básicos y mano de obra.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Trasdosado con aislamiento: €30 - €50 por metro
							cuadrado
						</p>
						<p>
							Incluye materiales aislantes y técnica avanzada de
							instalación.
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
						Tipo de trasdosado: Simple vs. con aislamiento acústico
						o térmico.
					</li>
					<li>
						Tamaño y diseño del área: Afecta la cantidad de material
						y la complejidad de la instalación.
					</li>
					<li>
						Condiciones del sitio: Accesibilidad y necesidad de
						preparación adicional del área.
					</li>
					<li>
						Ubicación geográfica: Puede influir en los costos de
						mano de obra y materiales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Poner Trasdosado
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Trasdosado estándar</strong>: €20 - €30 por
						metro cuadrado, incluyendo materiales básicos y mano de
						obra.
					</li>
					<li>
						<strong>Trasdosado con aislamiento</strong>: €30 - €50
						por metro cuadrado, incluyendo materiales aislantes y
						técnica avanzada de instalación.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Poner Trasdosado
				</h2>
				<p>
					1. <strong>Selección de Materiales</strong>: Determinar el
					tipo de trasdosado y los materiales necesarios.
				</p>
				<p>
					2. <strong>Pedido de Presupuestos</strong>: Obtener
					estimaciones detalladas de varios contratistas.
				</p>
				<p>
					3. <strong>Preparación del Espacio</strong>: Asegurar que el
					área esté lista para la instalación.
				</p>
				<p>
					4. <strong>Instalación y Acabado</strong>: Supervisar el
					proceso para garantizar la calidad y satisfacción final.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y presupuesto, la instalación
					de trasdosado puede mejorar el confort y estética de tu
					espacio interior.
				</p>
			</section>
		</div>
	);
};

export default PonerTrasdosadoPage;
