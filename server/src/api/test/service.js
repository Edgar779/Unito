import Tirst from "../models/Tirst.js";
import { getResponse, getErrorResponse } from '../mainModels.js';

import mainConfig from '../../env';

class TestServices {


    test = async () => {

        let test = await Tirst.aggregate([
            {
                $lookup: {
                    from: 'tirsts',
                    localField: 'country',
                    foreignField: 'country',
                    as: 'countries'
                }
            },
            {
                $lookup: {
                    from: 'seconds',
                    localField: 'country',
                    foreignField: 'country',
                    as: 'studentCountries'
                }
            },
            {
                $project: {
                    studentCountries: 1,
                    overall: { $arrayElemAt: ["$studentCountries", 0] },
                    location: 1,
                    students: 1,
                    countries: 1
                }
            },
            {
                $addFields: {
                    overall: { $toInt: "$overall.overallStudents" },
                    longitute: { $arrayElemAt: ["$location.ll", 0] },
                    latitude: { $arrayElemAt: ["$location.ll", 1] },
                    countStudents: { $sum: "$students.number" },
                    count: { $size: "$countries" },
                }
            },
            {
                $addFields: {
                    allDiffs: { $subtract: ["$countStudents", "$overall"] }

                }
            }, {
                $project: {
                    _id: 1,
                    allDiffs: 1,
                    count: 1,
                    longitute: 1,
                    latitude: 1,

                }
            }

        ])

        console.log(test);
        return getResponse(true, "getting data");
    }

}


export default new TestServices();