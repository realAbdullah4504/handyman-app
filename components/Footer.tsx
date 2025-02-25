import { FooterData } from "@/constants/landingPage";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const FooterNavigation = () => (
  <React.Fragment>
    <nav className="m-2 space-y-7">
      <h2 className="text-2xl font-bold">Aviso Legal</h2>
      <div className="text-gray-500">
        <ul className="list-none space-y-2">
          {FooterData["AvisoLegal"].map(({ id, title, link }) => (
            <FooterLinks key={id} title={title} link={link} />
          ))}
        </ul>
      </div>
    </nav>
    {/* <nav className="m-2 space-y-7">
      <h2 className="text-2xl font-bold">Política de Privacidad</h2>
      <div className="text-gray-500">
        <ul className="list-none space-y-2">
          {FooterData["Política de Privacidad"].map(({ id, title, link }) => (
            <FooterLinks key={id} title={title} link={link} />
          ))}
        </ul>
      </div>
    </nav>
    <nav className="m-2 space-y-7">
      <h2 className="text-2xl font-bold">Condiciones de Uso</h2>
      <div className="text-gray-500">
        <ul className="list-none space-y-2">
          {FooterData["Condiciones de Uso"].map(({ id, title, link }) => (
            <FooterLinks key={id} title={title} link={link} />
          ))}
        </ul>
      </div>
    </nav>
    <nav className="m-2 space-y-7">
      <h2 className="text-2xl font-bold">Política de Cookies</h2>
      <div className="text-gray-500">
        <ul className="list-none space-y-2">
          {FooterData["Política de Cookies"].map(({ id, title, link }) => (
            <FooterLinks key={id} title={title} link={link} />
          ))}
        </ul>
      </div>
    </nav> */}
    <div />
  </React.Fragment>
);
const FooterLinks = ({ title, link }: { title: string; link: string }) => {
  return (
    <li>
      <Link href={link} title={title} aria-label={title}>
        {title}
      </Link>
    </li>
  );
};
export default function Footer() {
  return (
    <footer className="w-full bg-mainBackground">
      <div className="flex justify-around  gap-10 mb-20 Container py-3 pt-10  lg:flex-nowrap flex-wrap ">
        <section className="sm:basis-1/2 grow-0 space-y-7 basis-auto">
          <h2 className="text-2xl font-bold">Servicio de Reparaciones</h2>
          <p className="text-gray-500">
            ¿Buscas un servicio específico de mejora del hogar? Nuestra
            plataforma te permite elegir entre una variedad de servicios y te
            conecta con un hábil reparador que puede ayudarte a realizar el
            trabajo. Simplemente selecciona el servicio que necesitas y describe
            la tarea en detalle.
          </p>
        </section>
        <div className=" flex justify-between lg:min-w-fit flex-wrap lg:flex-nowrap">
          {/* <div className="flex justify-between"> */}
            <FooterNavigation />
          {/* </div> */}
        </div>
      </div>
      <div className="border-t-2">
        <div className="container mx-auto py-5 px-4 gap-4 text-center text-gray-500">
          {/* <div className="flex gap-10 items-center">
            <Link href={"#"} title="Twitter">
              <BsTwitter className="text-2xl" />
            </Link>
            <Link href={"#"} title="LinkedIn">
              <BsLinkedin className="text-2xl" />
            </Link>
          </div> */}
          <div className="text-sm">
            <span>
            © 2025 Oficios24. Todos los derechos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
