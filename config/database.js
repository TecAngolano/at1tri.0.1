const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://FaiscaADM:Alexlobo@fiaptecnico.kreph.mongodb.net/at1tri')
}

module.exports = conexao