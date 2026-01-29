const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { class: className,
        section
        , name
        , roll
    } = req.query;

    const payload = { className, section, name, roll };
    const students = await getAllStudents(payload);
    res.json({ students });

});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    const response = await addNewStudent(payload);
    res.json(response)
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const payload = { id, ...req.body };
    const message = await updateStudent(payload);
    res.json(message)
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const message = await getStudentDetail(id);
    res.json(message);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const message = await setStudentStatus({ userId: id, status });
    res.json(message);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
