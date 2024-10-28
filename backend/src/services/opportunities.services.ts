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

export { createAnOpportunity}