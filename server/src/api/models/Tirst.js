import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    country: {
        type: String
    },
    city: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        type: Object
    },
    students: {
        type: Array
    }
});

export const Tirst = mongoose.model('Tirst', schema);
export default Tirst;