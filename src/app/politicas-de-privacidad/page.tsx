export default function page() {
  return (
    <div className="w-full bg-white text-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-10 leading-relaxed text-[15px] md:text-base">
          <div className="space-y-8">
            <header className="text-center space-y-2">
              <h2 className="m-auto text-3xl font-semibold text-[#c5a059]">
                POLÍTICA DE PRIVACIDAD DEL SITIO WEB
              </h2>
              <h4>
                <span className="blanc-space ng-binding">
                  www.mareaaltarestaurante.es
                </span>
              </h4>
            </header>

            <div className="space-y-6">
              <h3 className="text-[#c5a059] font-semibold text-lg">
                I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS
              </h3>

              <p>
                Respetando lo establecido en la legislación vigente,{' '}
                <span className="blanc-space ng-binding">Marea Alta</span> (en
                adelante, también Sitio Web) se compromete a adoptar las medidas
                técnicas y organizativas necesarias, según el nivel de seguridad
                adecuado al riesgo de los datos recogidos.
              </p>

              <h4 className="font-semibold">
                Leyes que incorpora esta política de privacidad
              </h4>

              <p>
                Esta política de privacidad está adaptada a la normativa
                española y europea vigente en materia de protección de datos
                personales en internet. En concreto, la misma respeta las
                siguientes normas:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  El Reglamento (UE) 2016/679 del Parlamento Europeo y del
                  Consejo, de 27 de abril de 2016, relativo a la protección de
                  las personas físicas en lo que respecta al tratamiento de
                  datos personales y a la libre circulación de estos datos
                  (RGPD).
                </li>
                <li>
                  La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de
                  Datos Personales y garantía de los derechos digitales
                  (LOPD-GDD).
                </li>
                <li>
                  El Real Decreto 1720/2007, de 21 de diciembre, por el que se
                  aprueba el Reglamento de desarrollo de la Ley Orgánica
                  15/1999, de 13 de diciembre, de Protección de Datos de
                  Carácter Personal (RDLOPD).
                </li>
                <li>
                  La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
                  la Información y de Comercio Electrónico (LSSI-CE).
                </li>
              </ul>

              <h4 className="font-semibold">
                Identidad del responsable del tratamiento de los datos
                personales
              </h4>

              <p ng-show="data.claseTitular == 'persona'">
                El responsable del tratamiento de los datos personales recogidos
                en <span className="blanc-space ng-binding">Marea Alta</span>{' '}
                es:{' '}
                <span className="blanc-space ng-binding">
                  Luís Llobregat Masón
                </span>
                , con NIF:{' '}
                <span className="blanc-space ng-binding">44048913-M</span> (en
                adelante, Responsable del tratamiento). Sus datos de contacto
                son los siguientes:
              </p>

              <p>
                Dirección:{' '}
                <span className="blanc-space ng-binding">C/ Ciruela Nº 32</span>
              </p>

              <p>
                Teléfono de contacto:{' '}
                <span className="blanc-space ng-binding">666235321</span>
              </p>

              <p>
                Email de contacto:{' '}
                <span className="blanc-space ng-binding">
                  luisllobregat8@gmail.com
                </span>
              </p>

              <h4 className="font-semibold">
                Registro de Datos de Carácter Personal
              </h4>

              <p>
                En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le
                informamos que los datos personales recabados por{' '}
                <span className="blanc-space ng-binding">Marea Alta</span>,
                mediante los formularios extendidos en sus páginas quedarán
                incorporados y serán tratados en nuestro fichero con el fin de
                poder facilitar, agilizar y cumplir los compromisos establecidos
                entre <span className="blanc-space ng-binding">Marea Alta</span>{' '}
                y el Usuario o el mantenimiento de la relación que se establezca
                en los formularios que este rellene, o para atender una
                solicitud o consulta del mismo. Asimismo, de conformidad con lo
                previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación
                la excepción prevista en el artículo 30.5 del RGPD, se mantiene
                un registro de actividades de tratamiento que especifica, según
                sus finalidades, las actividades de tratamiento llevadas a cabo
                y las demás circunstancias establecidas en el RGPD.
              </p>

              <h4 className="font-semibold">
                Principios aplicables al tratamiento de los datos personales
              </h4>

              <p>
                El tratamiento de los datos personales del Usuario se someterá a
                los siguientes principios recogidos en el artículo 5 del RGPD y
                en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de
                diciembre, de Protección de Datos Personales y garantía de los
                derechos digitales:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Principio de licitud, lealtad y transparencia: se requerirá en
                  todo momento el consentimiento del Usuario previa información
                  completamente transparente de los fines para los cuales se
                  recogen los datos personales.
                </li>
                <li>
                  Principio de limitación de la finalidad: los datos personales
                  serán recogidos con fines determinados, explícitos y
                  legítimos.
                </li>
                <li>
                  Principio de minimización de datos: los datos personales
                  recogidos serán únicamente los estrictamente necesarios en
                  relación con los fines para los que son tratados.
                </li>
                <li>
                  Principio de exactitud: los datos personales deben ser exactos
                  y estar siempre actualizados.
                </li>
                <li>
                  Principio de limitación del plazo de conservación: los datos
                  personales solo serán mantenidos de forma que se permita la
                  identificación del Usuario durante el tiempo necesario para
                  los fines de su tratamiento.
                </li>
                <li>
                  Principio de integridad y confidencialidad: los datos
                  personales serán tratados de manera que se garantice su
                  seguridad y confidencialidad.
                </li>
                <li>
                  Principio de responsabilidad proactiva: el Responsable del
                  tratamiento será responsable de asegurar que los principios
                  anteriores se cumplen.
                </li>
              </ul>

              <h4 className="font-semibold">
                Base legal para el tratamiento de los datos personales
              </h4>

              <p>
                La base legal para el tratamiento de los datos personales es el
                consentimiento.{' '}
                <span className="blanc-space ng-binding">Marea Alta</span> se
                compromete a recabar el consentimiento expreso y verificable del
                Usuario para el tratamiento de sus datos personales para uno o
                varios fines específicos.
              </p>

              <p>
                El Usuario tendrá derecho a retirar su consentimiento en
                cualquier momento. Será tan fácil retirar el consentimiento como
                darlo. Como regla general, la retirada del consentimiento no
                condicionará el uso del Sitio Web.
              </p>

              <p>
                En las ocasiones en las que el Usuario deba o pueda facilitar
                sus datos a través de formularios para realizar consultas,
                solicitar información o por motivos relacionados con el
                contenido del Sitio Web, se le informará en caso de que la
                cumplimentación de alguno de ellos sea obligatoria debido a que
                los mismos sean imprescindibles para el correcto desarrollo de
                la operación realizada.
              </p>

              <h4 className="font-semibold">
                Fines del tratamiento a que se destinan los datos personales
              </h4>

              <p>
                Los datos personales son recabados y gestionados por{' '}
                <span className="blanc-space ng-binding">Marea Alta</span> con
                la finalidad de poder facilitar, agilizar y cumplir los
                compromisos establecidos entre el Sitio Web y el Usuario o el
                mantenimiento de la relación que se establezca en los
                formularios que este último rellene o para atender una solicitud
                o consulta.
              </p>

              <p>
                Igualmente, los datos podrán ser utilizados con una finalidad
                comercial de personalización, operativa y estadística, y
                actividades propias del objeto social de{' '}
                <span className="blanc-space ng-binding">Marea Alta</span>, así
                como para la extracción, almacenamiento de datos y estudios de
                marketing para adecuar el Contenido ofertado al Usuario, así
                como mejorar la calidad, funcionamiento y navegación por el
                Sitio Web.
              </p>

              <p>
                En el momento en que se obtengan los datos personales, se
                informará al Usuario acerca del fin o fines específicos del
                tratamiento a que se destinarán los datos personales; es decir,
                del uso o usos que se dará a la información recopilada.
              </p>

              <h4 className="font-semibold">
                Períodos de retención de los datos personales
              </h4>

              <p>
                Los datos personales solo serán retenidos durante el tiempo
                mínimo necesario para los fines de su tratamiento y, en todo
                caso, únicamente durante el siguiente plazo:{' '}
                <span className="blanc-space ng-binding">18 meses</span>, o
                hasta que el Usuario solicite su supresión.
              </p>

              <p>
                En el momento en que se obtengan los datos personales, se
                informará al Usuario acerca del plazo durante el cual se
                conservarán los datos personales o, cuando eso no sea posible,
                los criterios utilizados para determinar este plazo.
              </p>

              <h4 className="font-semibold">
                Destinatarios de los datos personales
              </h4>

              <p>
                Los datos personales del Usuario serán compartidos con los
                siguientes destinatarios o categorías de destinatarios:
              </p>

              <p>
                Luís Llobregat Masón con domicilio en C/ Ciruela Nº 32, 11130
                Chiclana de la Frontera, Cádiz (España)
              </p>

              <h4 className="font-semibold">
                Datos personales de menores de edad
              </h4>

              <p>
                Respetando lo establecido en los artículos 8 del RGPD y 7 de la
                Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
                Personales y garantía de los derechos digitales, solo los
                mayores de 14 años podrán otorgar su consentimiento para el
                tratamiento de sus datos personales de forma lícita por{' '}
                <span className="blanc-space ng-binding">Marea Alta</span>.
              </p>

              <h4 className="font-semibold">
                Secreto y seguridad de los datos personales
              </h4>

              <p>
                <span className="blanc-space ng-binding">Marea Alta</span> se
                compromete a adoptar las medidas técnicas y organizativas
                necesarias...
              </p>

              <h4 className="font-semibold">
                Derechos derivados del tratamiento de los datos personales
              </h4>

              <p>
                El Usuario tiene sobre{' '}
                <span className="blanc-space ng-binding">Marea Alta</span> los
                siguientes derechos:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Derecho de acceso</li>
                <li>Derecho de rectificación</li>
                <li>Derecho de supresión</li>
                <li>Derecho a la limitación del tratamiento</li>
                <li>Derecho a la portabilidad de los datos</li>
                <li>Derecho de oposición</li>
                <li>Derecho a no ser objeto de decisiones automatizadas</li>
              </ul>

              <p>
                Así pues, el Usuario podrá ejercitar sus derechos mediante
                comunicación escrita dirigida al Responsable del tratamiento con
                la referencia `&quot;RGPD-www.mareaaltarestaurante.es&quot;,
                especificando:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Nombre, apellidos del Usuario y copia del DNI. En los casos en
                  que se admita la representación, será también necesaria la
                  identificación por el mismo medio de la persona que representa
                  al Usuario, así como el documento acreditativo de la
                  representación. La fotocopia del DNI podrá ser sustituida, por
                  cualquier otro medio válido en derecho que acredite la
                  identidad.
                </li>

                <li>
                  Petición con los motivos específicos de la solicitud o
                  información a la que se quiere acceder.
                </li>

                <li>Domicilio a efecto de notificaciones.</li>

                <li>Fecha y firma del solicitante.</li>

                <li>Todo documento que acredite la petición que formula.</li>
              </ul>

              <p>
                Esta solicitud y todo otro documento adjunto podrá enviarse a la
                siguiente dirección y/o correo electrónico:
              </p>

              <div className="space-y-1">
                <p>
                  Dirección postal:{' '}
                  <span className="blanc-space ng-binding">
                    C/ Ciruela Nº 32
                  </span>
                </p>

                <p>
                  Correo electrónico:{' '}
                  <span className="blanc-space ng-binding">
                    luisllobregat8@gmail.com
                  </span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    Enlaces a sitios web de terceros
                  </h4>

                  <p>
                    El Sitio Web puede incluir hipervínculos o enlaces que
                    permiten acceder a páginas web de terceros distintos de
                    Marea Alta, y que por tanto no son operados por Marea Alta.
                    Los titulares de dichos sitios web dispondrán de sus propias
                    políticas de protección de datos, siendo ellos mismos, en
                    cada caso, responsables de sus propios ficheros y de sus
                    propias prácticas de privacidad.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">
                    Reclamaciones ante la autoridad de control
                  </h4>

                  <p>
                    En caso de que el Usuario considere que existe un problema o
                    infracción de la normativa vigente en la forma en la que se
                    están tratando sus datos personales, tendrá derecho a la
                    tutela judicial efectiva y a presentar una reclamación ante
                    una autoridad de control, en particular, en el Estado en el
                    que tenga su residencia habitual, lugar de trabajo o lugar
                    de la supuesta infracción. En el caso de España, la
                    autoridad de control es la Agencia Española de Protección de
                    Datos (https://www.aepd.es/).
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-[#c5a059] font-semibold mt-6">
                    II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD
                  </h3>

                  <p>
                    Es necesario que el Usuario haya leído y esté conforme con
                    las condiciones sobre la protección de datos de carácter
                    personal contenidas en esta Política de Privacidad, así como
                    que acepte el tratamiento de sus datos personales para que
                    el Responsable del tratamiento pueda proceder al mismo en la
                    forma, durante los plazos y para las finalidades indicadas.
                    El uso del Sitio Web implicará la aceptación de la Política
                    de Privacidad del mismo.
                  </p>

                  <p>
                    Marea Alta se reserva el derecho a modificar su Política de
                    Privacidad, de acuerdo a su propio criterio, o motivado por
                    un cambio legislativo, jurisprudencial o doctrinal de la
                    Agencia Española de Protección de Datos. Los cambios o
                    actualizaciones de esta Política de Privacidad no serán
                    notificados de forma explícita al Usuario. Se recomienda al
                    Usuario consultar esta página de forma periódica para estar
                    al tanto de los últimos cambios o actualizaciones.
                  </p>

                  <p>
                    Esta Política de Privacidad fue actualizada para adaptarse
                    al Reglamento (UE) 2016/679 del Parlamento Europeo y del
                    Consejo, de 27 de abril de 2016, relativo a la protección de
                    las personas físicas en lo que respecta al tratamiento de
                    datos personales y a la libre circulación de estos datos
                    (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de
                    Protección de Datos Personales y garantía de los derechos
                    digitales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
