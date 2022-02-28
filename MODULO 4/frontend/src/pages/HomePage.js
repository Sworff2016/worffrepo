import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in modi et labore ipsam distinctio pariatur dolorem veniam, accusamus blanditiis velit nostrum aspernatur suscipit, iste saepe fuga reprehenderit odit molestiae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita nostrum molestiae facilis accusamus, minus eius sapiente laudantium placeat ut minima praesentium rerum, aliquid gngn ipsum similique magnam ullam natus. Assumenda.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;