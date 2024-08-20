import Head from "next/head";

const LockChangeCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta cambiar una cerradura? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con el cambio de cerraduras y cómo presupuestar para este servicio de cerrajería."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-cerradura`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta cambiar una cerradura?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cerradura Estándar: €80 - €150
						</p>
						<p>
							Incluye cambio de cerradura estándar con mano de
							obra básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cerradura de Alta Seguridad: €150 - €300
						</p>
						<p>
							Incluye cambio de cerradura con sistemas de
							seguridad avanzados y mano de obra especializada.
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
						Tipo de Cerradura: Precios varían según el tipo de
						cerradura estándar o de alta seguridad.
					</li>
					<li>
						Marca y Calidad: Costos pueden incrementar con
						cerraduras de marcas reconocidas y mayor calidad.
					</li>
					<li>
						Mano de Obra: Tarifas del cerrajero o empresa de
						cerrajería por el servicio de instalación.
					</li>
					<li>
						Urgencia y Horario: Precios pueden ser más altos para
						servicios fuera de horario o emergencias.
					</li>
					<li>
						Ubicación: Precios que pueden variar según la ubicación
						geográfica y las condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cambio de Cerraduras
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Cerradura Estándar</strong>: €80 - €150,
						incluyendo cambio con mano de obra básica.
					</li>
					<li>
						<strong>Cerradura de Alta Seguridad</strong>: €150 -
						€300, incluyendo cambio con sistemas avanzados y mano de
						obra especializada.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluar Tipo de Cerradura Necesaria</strong>:
					Determina si necesitas una cerradura estándar o de alta
					seguridad.
				</p>
				<p>
					2. <strong>Obtener Cotizaciones Detalladas</strong>:
					Solicita presupuestos detallados de cerrajeros para comparar
					precios y servicios ofrecidos.
				</p>
				<p>
					3. <strong>Considerar Seguridad y Durabilidad</strong>:
					Elige una cerradura que garantice seguridad y durabilidad
					adecuadas para tu hogar.
				</p>
				<p>
					4. <strong>Revisar Garantías y Servicios</strong>: Asegúrate
					de entender las garantías ofrecidas por el cerrajero y los
					servicios incluidos en el costo.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar el cambio de una
					cerradura, puedes mejorar la seguridad de tu hogar o
					propiedad de manera efectiva y dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default LockChangeCost;
