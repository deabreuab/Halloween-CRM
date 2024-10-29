import type { RequestHandler } from "express";
import { createATask, getTasks, getTasksByOpportunity, updateATask, deleteATask } from "../services/tasks.services";

const createTaskHandler: RequestHandler = async (req, res) => {
    try {
        const task = await createATask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tarea", error })
    }
}


const getTasksHandler: RequestHandler = async (req, res) => {
    try {
        const tasks = await getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las tareas", error })
    }
}

const getTasksByOpportunityHandler: RequestHandler = async (req, res) => {
    try {
        const { opportunity_id } = req.params;
        const tasks = await getTasksByOpportunity(opportunity_id);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las tareas por oportunidades", error })
    }
}

const updateTaskHandler: RequestHandler = async (req, res) => {
    try {

        const { id } = req.params;
        const updateTask = await updateATask(id, req.body);
        res.status(200).json(updateTask);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarea", error })
    }

}

const deleteTaskHandler: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteATask(id);
        res.status(200).json({ message: "Tarea eliminada con exito" })

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea", error })
    }
}

export { createTaskHandler, getTasksHandler, getTasksByOpportunityHandler, updateTaskHandler, deleteTaskHandler };