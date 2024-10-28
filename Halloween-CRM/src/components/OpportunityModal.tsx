import Swal from "sweetalert2";
import { Opportunity } from "./OpportunityTable";

const OpportunityModal = () => {
  Swal.fire({
    title: "Nueva oportunidad",
    html: `
      <input id="name" class="swal2-input" placeholder="Nombre">
      <input id="description" class="swal2-input" placeholder="Descripción">
      <input id="type" class="swal2-input" placeholder="Tipo">
      <input id="status" class="swal2-input" placeholder="Estado">
      <div>
        <label><input type="radio" name="radio" value="Option1"> Opción 1</label>
        <label><input type="radio" name="radio" value="Option2"> Opción 2</label>
      </div>
      <input id="start_date" class="swal2-input" type="date" placeholder="Fecha de Inicio">
      <input id="end_date" class="swal2-input" type="date" placeholder="Fecha de Cierre">
      <input id="createBy" class="swal2-input" placeholder="Creado por">
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const newOpportunity: Opportunity = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        description: (
          document.getElementById("description") as HTMLInputElement
        ).value,
        type: (document.getElementById("type") as HTMLInputElement).value,
        status: (document.getElementById("status") as HTMLInputElement).value,
        start_date: (document.getElementById("start_date") as HTMLInputElement)
          .value,
        end_date: (document.getElementById("end_date") as HTMLInputElement)
          .value,
        createBy: (document.getElementById("createBy") as HTMLInputElement)
          .value,
      };

      console.log("nueva oportunidad", newOpportunity);
      // deberia mostrar mensaje de exito
      Swal.fire(
        "¡Guardado!",
        "Los cambios se han guardado con éxito.",
        "success"
      );
    } else if (result.isDismissed) {
      // deberia mostrar mensaje de error
      Swal.fire("Los cambios no se guardaron", "", "info");
    }
  });
};

export default OpportunityModal;
