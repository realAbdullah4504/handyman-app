import Head from "next/head";

const InstallArmoredDoorCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta poner una puerta blindada? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de una puerta blindada y cómo presupuestar para este tipo de mejora de seguridad."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/poner-puerta-blindada`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta poner una puerta blindada?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Puerta Estándar: €800 - €1,500
						</p>
						<p>
							Incluye puerta blindada estándar y costos de
							instalación básicos.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Puerta de Alta Seguridad: €1,500 - €3,000 o más
						</p>
						<p>
							Incluye puerta blindada con características
							avanzadas de seguridad y instalación especializada.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tipo de Puerta: Estándar vs. alta seguridad.</li>
					<li>
						Materiales de la Puerta: Calidad y nivel de resistencia
						al impacto.
					</li>
					<li>
						Instalación: Costos laborales y complejidad de la
						instalación.
					</li>
					<li>
						Acabados y Accesorios: Opciones adicionales como
						cerraduras electrónicas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalar una Puerta Blindada
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Puerta Estándar</strong>: €800 - €1,500,
						incluyendo puerta blindada estándar y costos de
						instalación básicos.
					</li>
					<li>
						<strong>Puerta de Alta Seguridad</strong>: €1,500 -
						€3,000 o más, incluyendo puerta blindada con
						características avanzadas de seguridad y instalación
						especializada.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Selección de Puerta</strong>: Elige entre
					opciones de puertas blindadas según tus necesidades de
					seguridad.
				</p>
				<p>
					2. <strong>Consultas y Cotizaciones</strong>: Solicita
					presupuestos detallados de varios instaladores de puertas.
				</p>
				<p>
					3. <strong>Consideraciones de Seguridad</strong>: Evalúa
					características como resistencia al fuego y aislamiento
					acústico.
				</p>
				<p>
					4. <strong>Instalación y Mantenimiento</strong>: Asegúrate
					de incluir costos de instalación y cualquier mantenimiento
					posterior necesario.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar la instalación
					de una puerta blindada, puedes mejorar la seguridad de tu
					hogar dentro de tu presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default InstallArmoredDoorCost;
