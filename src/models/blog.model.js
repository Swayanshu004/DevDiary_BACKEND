import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Name is required.']
    },
    imageUrl: {
        type: String,
        required: [true, 'imageUrl is required.'],
    },
    blogUrl: {
        type: String,
        required: [true, 'blogUrl is required.']
    },
    creatorName: {
        type: String,
        required: [true, 'creatorName is required.']
    },
}, {timestamps: true});

export const Blog = mongoose.model('Blog', blogSchema);