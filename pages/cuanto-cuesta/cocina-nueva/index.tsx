import Head from "next/head";

const NewKitchenCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta una cocina nueva? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la remodelación o instalación de una cocina nueva y cómo planificar este tipo de proyecto."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cocina-nueva`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta una cocina nueva?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cocina Básica: €3,000 - €7,000
						</p>
						<p>
							Renovación simple con materiales estándar y
							electrodomésticos básicos.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cocina de Alta Gama: €7,000 - €15,000+
						</p>
						<p>
							Instalación de cocina personalizada con
							electrodomésticos de lujo y acabados premium.
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
						Tamaño y Diseño de la Cocina: Dimensiones y complejidad
						del diseño interior.
					</li>
					<li>
						Materiales y Acabados: Calidad de los materiales,
						encimeras, armarios y suelos.
					</li>
					<li>
						Electrodomésticos: Costos de electrodomésticos estándar
						versus modelos de gama alta.
					</li>
					<li>
						Instalación y Mano de Obra: Costos de instalación y
						honorarios del contratista.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cocinas Nuevas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Cocina Básica</strong>: €3,000 - €7,000,
						renovación simple con materiales estándar.
					</li>
					<li>
						<strong>Cocina de Alta Gama</strong>: €7,000 - €15,000+,
						instalación personalizada con acabados premium.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Instalación de una Cocina Nueva
				</h2>
				<p>
					1. <strong>Diseño y Planificación</strong>: Determina el
					diseño interior y las especificaciones de los materiales.
				</p>
				<p>
					2. <strong>Presupuesto y Financiamiento</strong>: Calcula
					los costos totales y asegura el financiamiento adecuado.
				</p>
				<p>
					3. <strong>Selección de Materiales</strong>: Elige
					materiales que se adapten al estilo y presupuesto del
					proyecto.
				</p>
				<p>
					4. <strong>Contratación de Profesionales</strong>: Trabaja
					con diseñadores y contratistas de cocina con experiencia.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar una cocina nueva, considera todos los factores
					para asegurar un proyecto exitoso y dentro del presupuesto.
				</p>
			</section>
		</div>
	);
};

export default NewKitchenCost;
