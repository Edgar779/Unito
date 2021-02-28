import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    country: {
        type: String
    },
    overallStudents: {
        type: String
    }
});

export const Second = mongoose.model('Second', schema);
export default Second;