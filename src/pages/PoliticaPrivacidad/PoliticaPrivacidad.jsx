import "./PoliticaPrivacidad.css";

const PoliticaPrivacidad = () => {
    return (
        <div>
            <div className="privacidad-container">
                <h1>Política de Privacidad</h1>
                <p className="fecha">Última actualización: 2 de junio de 2025</p>

                <section>
                    <h2>1. ¿Quiénes somos?</h2>
                    <p>
                        VivaPulse es una plataforma desarrollada como parte de un Trabajo de Fin de Grado (TFG)
                        en [Nombre del Grado y Universidad]. Su objetivo es estudiar y analizar dinámicas de
                        bienestar y percepción en entornos sociales o académicos.
                    </p>
                </section>

                <section>
                    <h2>2. ¿Qué datos recopilamos?</h2>
                    <ul>
                        <li>Nombre o alias</li>
                        <li>Correo electrónico</li>
                        <li>Contraseña cifrada</li>
                        <li>Información de navegación (cookies de sesión)</li>
                        <li>Respuestas a encuestas internas</li>
                    </ul>
                </section>

                <section>
                    <h2>3. ¿Para qué usamos tus datos?</h2>
                    <p>
                        Los datos se utilizan exclusivamente para:
                        <ul>
                            <li>Permitir el acceso seguro a la plataforma</li>
                            <li>Analizar resultados dentro del entorno del TFG</li>
                            <li>Mejorar la experiencia del usuario</li>
                        </ul>
                        No se usan con fines comerciales ni publicitarios.
                    </p>
                </section>

                <section>
                    <h2>4. ¿Con quién se comparten los datos?</h2>
                    <p>
                        Tus datos no se comparten con terceros. Todo el contenido está alojado en servicios
                        académicos o gratuitos y es usado solo para fines educativos.
                    </p>
                </section>

                <section>
                    <h2>5. ¿Cuánto tiempo conservamos tus datos?</h2>
                    <p>
                        Los datos se mantendrán durante la duración del proyecto académico, o hasta un
                        máximo de 12 meses. Puedes solicitar la eliminación de tus datos en cualquier momento.
                    </p>
                </section>

                <section>
                    <h2>6. Derechos del usuario</h2>
                    <p>
                        Puedes solicitar en cualquier momento:
                        <ul>
                            <li>Acceso a tus datos</li>
                            <li>Corrección de datos incorrectos</li>
                            <li>Eliminación completa de tus datos</li>
                        </ul>
                        Contacto: <strong>info@vivaPulse.com</strong>
                    </p>
                </section>

                <section>
                    <h2>7. Cookies</h2>
                    <p>
                        Este sitio solo utiliza cookies técnicas y de sesión. No usamos cookies con fines
                        comerciales ni de seguimiento de terceros.
                    </p>
                </section>

                <section>
                    <h2>8. Contacto</h2>
                    <p>
                        Para cualquier consulta relacionada con esta política, escribe a:
                        <br />
                        📧 <strong>info@vivaPulse.com</strong>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PoliticaPrivacidad;
