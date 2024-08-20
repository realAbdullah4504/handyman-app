import Head from "next/head";

const PoolConstruction = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>Construcción de Piscinas - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos y procesos involucrados en la construcción de piscinas, desde la planificación hasta la finalización del proyecto."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construccion-piscinas`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				Construcción de Piscinas
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Piscina Estándar: €15,000 - €30,000
						</p>
						<p>Construcción básica con materiales estándar.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Piscina de Lujo: €30,000 - €100,000+
						</p>
						<p>
							Construcción con características personalizadas y de
							alta gama.
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
						Tamaño y Forma de la Piscina: Metros cuadrados y diseño
						personalizado.
					</li>
					<li>
						Tipo de Material: Hormigón, fibra de vidrio, vinilo,
						etc.
					</li>
					<li>
						Extras y Accesorios: Iluminación, cubiertas, sistemas de
						calefacción, etc.
					</li>
					<li>
						Excavación y Preparación del Terreno: Condiciones del
						suelo y acceso al sitio.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Construcción de Piscinas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Piscina Estándar</strong>: €15,000 - €30,000,
						construcción básica con materiales estándar.
					</li>
					<li>
						<strong>Piscina de Lujo</strong>: €30,000 - €100,000+,
						construcción con características personalizadas y de
						alta gama.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Proyecto
				</h2>
				<p>
					1. <strong>Diseño y Permiso</strong>: Trabaja con un
					diseñador de piscinas y asegúrate de obtener los permisos
					necesarios.
				</p>
				<p>
					2. <strong>Selección de Material</strong>: Elige el material
					adecuado según tu presupuesto y necesidades.
				</p>
				<p>
					3. <strong>Excavación y Construcción</strong>: Contrata a
					contratistas con experiencia en construcción de piscinas
					para garantizar calidad y cumplimiento de plazos.
				</p>
				<p>
					4. <strong>Mantenimiento y Accesorios</strong>: Considera el
					mantenimiento continuo y los accesorios adicionales para
					mejorar la funcionalidad de la piscina.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la construcción de una piscina, asegúrate de
					considerar todos los factores involucrados para un proyecto
					exitoso y dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default PoolConstruction;
