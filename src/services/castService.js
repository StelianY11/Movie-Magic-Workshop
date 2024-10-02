import Cast from "../models/Cast.js"

const getAll = () => Cast.find();

//const getAllWithout = (castIds) => Cast.find({_id: { $nin: castIds}}); //MongoDB
const getAllWithout = (castIds) => Cast.find().nin('_id', castIds); //mongoose


const create = (castData) => Cast.create(castData);

export default {
    getAll,
    create,
    getAllWithout,
}