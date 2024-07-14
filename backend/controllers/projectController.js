import Project from '../models/Project.js';

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProjectById = async (req, res) => {
    const id = req.params.id;
    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProject = async (req, res) => {
    const projectData = req.body;
    try {
        const newProject = await Project.create(projectData);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateProjectById = async (req, res) => {
    const id = req.params.id;
    const projectData = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, projectData, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteProjectById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(deletedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllProjects,
    getProjectById,
    createProject,
    updateProjectById,
    deleteProjectById,
};
