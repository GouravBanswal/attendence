const {  getBatch, addBatch,
         updateBatch, deleteBatch,
         getAttendance, addAttendance,
         updateAttendance, deleteAttendance,
         getStudent, addStudent,
         updateStudent, deleteStudent, getStudentByBatch } = require("../controller/adminController")

const router = require("express").Router()

router
    .get("/batch", getBatch)
    .post("/batch-add", addBatch)
    .put("/batch-update/:batchId", updateBatch)
    .delete("/batch-delete/:batchId", deleteBatch)


    .get("/attendence/:studId", getAttendance)
    .post("/attendence-add", addAttendance)
    .put("/attendence-update/:attendenceId", updateAttendance)
    .delete("/attendence-delete", deleteAttendance)
    

    .get("/student", getStudent)
    .get("/student-by-batch/:batchId", getStudentByBatch)
    .post("/student-add", addStudent)
    .put("/student-update/:studentId", updateStudent)
    .delete("/student-delete/:studentId", deleteStudent)

    module.exports = router