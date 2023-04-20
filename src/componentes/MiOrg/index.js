import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //estado-hooks
  //useState
  //useState()
  console.log(props);
  /*const [mostrar, actualizarMostrar] = useState(true);
  const manejarClick = () => {
    console.log("mostrar/ocultar elemento", !mostrar);
    actualizarMostrar(!mostrar);
  };*/

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostar} />
    </section>
  );
};

export default MiOrg;
