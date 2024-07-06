
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/header/header.js'
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/miOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://avatars.githubusercontent.com/u/156835600?v=4",
      nombre:"Damian Sanz",
      puesto:"Aprendiz en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://media.licdn.com/dms/image/D4E03AQHe8zH1ll0Ftg/profile-displayphoto-shrink_200_200/0/1682300444552?e=2147483647&v=beta&t=X6OZaz8xx_hH78A4Gjr9zeEZnrXTGJZteJspmAKObgY",
      nombre:"Genesys Rondón",
      puesto:"Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/christianpva.png ",
      nombre:"Christian Velasco",
      puesto:"Head de Alura e instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre:"Jeanmarie Quijada",
      puesto:"Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      nombre:"Jose Gonzalez",
      puesto:"Dev. FullStack",
      fav: true
    }
  ])

  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9"
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF"
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2"
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8"
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5"
      },
      {
        id: uuid(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9"
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF"
      }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores =  colaboradores.filter((colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id) => {
    console.log('actualizar', color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header />
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map( (equipo) =>  <Equipo
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( (colaborador) => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }

      <Footer />

    </div>
  );
}

export default App;