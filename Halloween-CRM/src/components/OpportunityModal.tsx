import Swal from "sweetalert2";
import { Opportunity } from "./OpportunityTable";

const OpportunityModal = () => {
  Swal.fire({
    title: "Nueva oportunidad",
    html: `
      <input id="name" class="swal2-input" placeholder="Nombre">
      <input id="description" class="swal2-input" placeholder="Descripción">
      <input id="type" class="swal2-input" placeholder="Tipo de evento">
      <div>
        <label><input type="radio" name="status" value="Pendiente"> Nueva</label>
        <label><input type="radio" name="status" value="En Progreso"> En Progreso</label>
        <label><input type="radio" name="status" value="Completado"> Completado</label>
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
      const selectedStatus = (
        document.querySelector(
          'input[name="status"]:checked'
        ) as HTMLInputElement
      )?.value;

      const name = (document.getElementById("name") as HTMLInputElement).value;
      const description = (
        document.getElementById("description") as HTMLInputElement
      ).value;
      const type = (document.getElementById("type") as HTMLInputElement).value;
      const start_date = (
        document.getElementById("start_date") as HTMLInputElement
      ).value;
      const end_date = (document.getElementById("end_date") as HTMLInputElement)
        .value;
      const createBy = (document.getElementById("createBy") as HTMLInputElement)
        .value;

      if (
        !name ||
        !description ||
        !type ||
        !selectedStatus ||
        !start_date ||
        !end_date ||
        !createBy
      ) {
        Swal.fire("Error", "Por favor, completa todos los campos.", "error");
        return;
      }

      const newOpportunity: Opportunity = {
        name,
        description,
        type,
        status: selectedStatus,
        start_date,
        end_date,
        createBy,
      };

      console.log("nueva oportunidad", newOpportunity);

      // Mostrar mensaje de éxito
      Swal.fire(
        "¡Guardado!",
        "Los cambios se han guardado con éxito.",
        "success"
      );
    } else if (result.isDismissed) {
      // Mostrar mensaje de información
      Swal.fire("Los cambios no se guardaron", "", "info");
    }
  });
};

export default OpportunityModal;
