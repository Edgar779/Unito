
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({

    _id: {
        type: String
    },
    allDiffs: {
        type: Array
    },
    count: {
        type: String
    },
    longitude: {
        type: Array
    },
    latitude: {
        type: Array
    }
});

export const Third = mongoose.model('Third', schema);
export default Third;