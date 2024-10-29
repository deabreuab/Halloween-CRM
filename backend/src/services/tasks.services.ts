import { Tasks } from "../models/tasks.model";
import { Itasks } from "../interface/index.interface";

const createATask = async (user_id: string, opportunity_id: string, title: string, description: string, due_date: Date) => {}

const getTasks = async () => {}

const getTasksByOpportunity = async (opportunity_id: string) => {}

const updateATask = async (id: string, title: string, description: string, due_date: Date, status: string, modifiedBy: string) => {}

const deleteATask = async (id: string) => {}


export { createATask, getTasksByOpportunity, updateATask, deleteATask, getTasks };

