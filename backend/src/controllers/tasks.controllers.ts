import type { RequestHandler } from "express";
import { createATask, getTasks, getTasksByOpportunity, updateATask, deleteATask } from "../services/tasks.services";

const createTaskHandler: RequestHandler = async (req, res) => {}

const getTasksHandler: RequestHandler = async (req, res) => {}

const getTasksByOpportunityHandler: RequestHandler = async (req, res) => {}

const updateTaskHandler: RequestHandler = async (req, res) => {}

const deleteTaskHandler: RequestHandler = async (req, res) => {}

export { createTaskHandler, getTasksHandler, getTasksByOpportunityHandler, updateTaskHandler, deleteTaskHandler };