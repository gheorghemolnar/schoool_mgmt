const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {    
    console.log(`🚀 ~ req.query:`);
    console.dir(req.query, {depth: null});
    const { class: className, section, name, roll } = req.query;
    
    const payload = { className, section, name, roll };
    console.dir(payload, {depth: null});

    const message = await getAllStudents(payload);
    console.dir(`🚀 ~ GET / all students:`, message);

    res.json(message);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    console.dir(payload, { depth: null });
    const message = await addNewStudent(payload);
    res.json(message)
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const payload = {id, ...req.body};
    console.dir(payload, { depth: null });
    const message = await updateStudent(payload);
    res.json(message)
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(`🚀 ~ get student details id:`, id)
    const message = await getStudentDetail(id);
    console.log(`🚀 student details id message:`, id,message)
    res.json(message);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(`🚀 ~ get student status id:`, id);
    // const message = await setStudentStatus({ userId: id, reviewerId: 1, status });

    res.json({message: "TODO"});

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
