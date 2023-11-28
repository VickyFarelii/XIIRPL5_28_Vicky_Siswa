const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas']
    },
    nis: {
        type: String,
        required: [true, 'Silahkan isikan NIS']
    },
    noabs: {
        type: String,
        required: [true, 'Silahkan isikan No absen']
    },
    gender: {
        type: String,
        required: [true, 'Silahkan isikan gender']
    }
})

module.exports = mongoose.model('User', UserSchema)