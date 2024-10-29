import { Opportunities } from "../models/opportunities.model";
import { IOpportunities } from "../interface/index.interface";
import { ObjectId } from "mongoose";

const createAnOpportunity = async (photo: string, description: string, type: string, user_id: ObjectId, start_date: Date, end_date: Date, createBy: string, modifiedBy: string) => {

    const opportunity = new Opportunities({
        photo,
        description,
        type,
        user_id,
        start_date,
        end_date,
    })

    await opportunity.save()

    console.log('Successfully created opportunity', opportunity)

}

const updateAnOpportunity = async (id: string, photo: string, description: string, type: string, start_date: Date, end_date: Date, modifiedBy: string) => {
    const opportunity = await Opportunities.findByIdAndUpdate(id, {
        photo,
        description,
        type,
        start_date,
        end_date,
        modifiedBy
    }, { new: true })

    console.log('Successfully updated opportunity', opportunity)

}


const getOpportunities = async () => {
    const opportunities = await Opportunities.find()

    console.log('All opportunities:', opportunities)
}

const getAnOpportunity = async (id: string) => {
    const opportunity = await Opportunities.findById(id)

    console.log('An opportunity:', opportunity)
}

const deleteAnOpportunity = async (id: string) => {
    await Opportunities.findByIdAndDelete(id)

    console.log('Successfully deleted opportunity with id:', id)
}

export { createAnOpportunity, updateAnOpportunity, getOpportunities, getAnOpportunity, deleteAnOpportunity } 