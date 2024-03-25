const Task=require('../model/taskmodel')
const{validationResult}=require('express-validator')
const taskcltr={}
    taskcltr.getAlltask=async(req,res)=>{
    Task.find()
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}
taskcltr.create = async (req, res) => {
    const body = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const t1 = new Task(body)
    try {
        const task = await t1.save()
        res.json(task)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

    taskcltr.destroy=async(req,res)=>{
    const id=req.params.id
    Task.findByIdAndDelete(id)
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}
    taskcltr.update=async(req,res)=>{
    const id =req.params.id
    const errors = validationResult(res)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.Array})  
        }
    const body=req.body
    Task.findByIdAndUpdate(id,body,{new:true, runValidators:true})
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports=taskcltr