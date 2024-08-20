import Head from "next/head";

const BoilerReplacement = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta cambiar una caldera? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con el cambio de una caldera y cómo presupuestar para este tipo de proyecto de instalación de sistemas de calefacción."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-caldera`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta cambiar una caldera?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Básica: €1,000 - €2,000
						</p>
						<p>
							Incluye caldera estándar de capacidad media y mano
							de obra básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Avanzada: €2,000 - €5,000 o más
						</p>
						<p>
							Incluye caldera de alta eficiencia energética y
							sistemas adicionales como termostatos inteligentes.
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
						Tipo de Caldera: Eficiencia energética y características
						adicionales.
					</li>
					<li>
						Capacidad y Tamaño: Tamaño de la caldera adecuado para
						el espacio a calentar.
					</li>
					<li>
						Instalación: Costos asociados con la instalación
						profesional y ajustes necesarios.
					</li>
					<li>
						Extras: Accesorios adicionales como termostatos,
						sistemas de filtración de agua, etc.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cambiar una Caldera
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Básica</strong>: €1,000 - €2,000, incluyendo
						caldera estándar y mano de obra básica.
					</li>
					<li>
						<strong>Avanzada</strong>: €2,000 - €5,000 o más,
						incluyendo caldera de alta eficiencia y características
						avanzadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Selección de Caldera</strong>: Evalúa las
					necesidades de calefacción y agua caliente para elegir la
					caldera adecuada.
				</p>
				<p>
					2. <strong>Consultas y Comparaciones</strong>: Solicita
					varios presupuestos de instaladores de calderas para
					comparar precios y servicios.
				</p>
				<p>
					3. <strong>Consideraciones Adicionales</strong>: Planifica
					para cualquier trabajo adicional requerido como ajustes de
					tuberías o renovación de sistemas de calefacción.
				</p>
				<p>
					4. <strong>Mantenimiento y Garantía</strong>: Verifica las
					políticas de garantía y mantenimiento ofrecidas por el
					instalador.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar el cambio de una
					caldera, puedes mejorar la eficiencia energética y la
					comodidad de tu hogar mientras te mantienes dentro de tu
					presupuesto.
				</p>
			</section>
		</div>
	);
};

export default BoilerReplacement;
