import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    originUserName: {
        type: String,
        required: true,
        unique:true
    },
    destinationUserName: {
        type: String,
        required: true,
        unique:true
    },
    dateTime: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
})

const Message = mongoose.model('Message', messageSchema)

export default Message