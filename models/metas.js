const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    texto: String,
    titulo: String,
    enviado: {type: Date, default: Date.now}
})

const mygrid = mongoose.model('metas', modelo)

module.exports = mygrid