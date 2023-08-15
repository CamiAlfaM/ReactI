import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="header">
    <Header titulo= "Adopta un perrito"/>
    </div>
    <div className="cards">
    <Cards
    image= "https://t2.ea.ltmcdn.com/es/posts/1/6/2/10_curiosidades_del_golden_retriever_21261_orig.jpg"
    raza= "Sansa"
    description= "Golden Retriever de 9 años, tierno, juguetón y duerme mucho"
    color= "success"
    text= "Adopta Ahora"
    />
    <Cards
    image= "https://t1.ea.ltmcdn.com/es/posts/1/5/8/enfermedades_mas_comunes_del_pastor_aleman_21851_600_square.jpg"
    raza= "Rex"
    description= "Pastor Alemán de 3 años, protector, juguetón y con mucha energía"
    color= "primary"
    text= "Adopta Ahora"
    />
    <Cards
    image= "https://t1.uc.ltmcdn.com/es/posts/9/5/5/como_es_el_temperamento_del_doberman_52559_600_square.jpg"
    raza= "Nugget"
    description= "Doberman de 2 años, afectuoso, excelente compañía"
    color= "danger"
    text= "Adopta Ahora"
    />
    <Cards
    image= "https://images.hola.com/imagenes/mascotas/20200320162955/chihuahua-razas-perro-caracteristicas-cuidado-gt/0-797-393/corto-z.jpg"
    raza= "Dulce"
    description= "Chiguagua de 3 meses, el bebé ideal para casas pequeñas"
    color= "warning"
    text= "Adopta Ahora"
    />
    </div>
    <div className="footer">
    <Footer />
    </div>
    </>
  );
}

export default App;
