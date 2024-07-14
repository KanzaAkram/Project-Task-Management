import Project from '../models/Project.js';

const createTask = async (req, res) => {
    const { id } = req.params;
    const taskData = req.body;
    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        project.task.push(taskData);
        await project.save();
        res.status(201).json(project.task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTaskById = async (req, res) => {
    const { id, taskId } = req.params;
    const taskData = req.body;
    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        const task = project.task.id(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.set(taskData);
        await project.save();
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTaskById = async (req, res) => {
    const { id, taskId } = req.params;
    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        const task = project.task.id(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.remove();
        await project.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    createTask,
    updateTaskById,
    deleteTaskById,
};
