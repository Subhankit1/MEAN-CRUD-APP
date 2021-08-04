const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// we need to define the router
//create a new student

//Promise way
/*
app.post("/students",(req,res) => {
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

    res.send("Hello from other side");
})
*/

//async await way
router.post("/students",async(req,res) => {
     
    try{
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
    
})

//read the data of registered students
router.get("/students",async(req,res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData);
    } catch (e) {
        res.send(e);
    }
})

//get the individual data using id
router.get("/students/:id",async(req,res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById({_id});

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }

    } catch (e) {
        res.send(e);
    }
})

//delete the student by id
router.delete("/students/:id",async(req,res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }else{
            res.send(deleteStudent);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})

//update the students by its id
router.patch("/students/:id",async(req,res) => {
    try {
        const _id = req.params.id;
        updateStudent = await Student.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updateStudent);
    } catch (e) {
        res.status(404).send(e);
    }
})


module.exports = router;