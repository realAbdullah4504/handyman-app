import Head from "next/head";

const ConstruirBanoPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta construir un baño? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de un baño y cómo planificar este tipo de proyecto."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-bano`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta construir un baño?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Baño Básico: €3,000 - €8,000
						</p>
						<p>
							Incluye materiales estándar y mano de obra básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Baño de Lujo: €10,000 - €25,000+
						</p>
						<p>
							Instalaciones personalizadas con materiales premium
							y diseño exclusivo.
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
						Tamaño y Complejidad del Baño: Baño completo, medio
						baño, diseño y personalización.
					</li>
					<li>
						Calidad de los Materiales: Azulejos, grifería, muebles
						de baño, y accesorios.
					</li>
					<li>
						Trabajo de Albañilería y Fontanería: Costos de mano de
						obra y especialistas.
					</li>
					<li>
						Extras y Acabados: Iluminación, ventilación, y detalles
						decorativos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Construcción de Baños
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Baño Básico</strong>: €3,000 - €8,000,
						incluyendo materiales estándar y mano de obra básica.
					</li>
					<li>
						<strong>Baño de Lujo</strong>: €10,000 - €25,000+,
						instalaciones personalizadas con materiales premium y
						diseño exclusivo.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Construcción del Baño
				</h2>
				<p>
					1. <strong>Diseño y Diseño Interior</strong>: Planifique el
					diseño y los materiales antes de comenzar la construcción.
				</p>
				<p>
					2. <strong>Precios y Comparación</strong>: Compare los
					presupuestos de varios constructores y especialistas en
					diseño de baños.
				</p>
				<p>
					3. <strong>Inversión a Largo Plazo</strong>: Considere la
					durabilidad y el mantenimiento para evitar problemas
					futuros.
				</p>
				<p>
					4. <strong>Contratación de Especialistas</strong>: Asegúrese
					de contratar a especialistas en construcción de baños con
					experiencia y referencias sólidas.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la construcción de un baño, considere todos
					los factores para asegurar que el proyecto esté dentro del
					presupuesto y se complete según lo planeado.
				</p>
			</section>
		</div>
	);
};

export default ConstruirBanoPage;
