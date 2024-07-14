import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, // Ensures title is unique
        required: true // Requires title field
    },
    description: {
        type: String,
        required: true // Requires description field
    },
    task: [
        {
            id: Number,
            title: String,
            description: String,
            order: Number,
            stage: String,
            index: Number,
            attachment: [
                { type: String, url: String }
            ],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;
