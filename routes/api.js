const express = require('express')
const router = express.Router()
const products = require('../models/product')
const categorys = require('../models/category')

router.get('/product', async(req, res) => {
    try{
            const al = await products.find()
            res.json(al)
    }catch(err){
        res.send('error ' + err)
    }
})

router.get('/category', async(req, res) => {
    try{
            const a = await categorys.find()
            res.json(a)
    }catch(err){
        res.send('error ' + err)
    }
})

router.post('/product', async(req,res) => {
    try {
        const addproduct = new products ({
            name : req.body.name,
            quantity : req.body.quantity,
            price : req.body.price,
            stock : req.body.stock,
            discontinued : req.body.discontinued,
            categotyid : req.body.categotyid
        })

        const a1 = await addproduct.save()
        res.json(a1)

    }catch(error) {
        res.send('error ' + err)
    }
})

router.post('/category', async(req,res) => {
    try {
        const addcategory = new categorys ({
            categoryid : req.body.categoryid,
            categoryname : req.body.categoryname
        })

        const a2 = await addcategory.save()
        res.json(a2)

    }catch(error) {
        res.send('error ' + err)
    }
})

router.put('/product/:id', async(req,res) => {
    try{
        // const price = req.body.price
        const al = await products.findOneAndUpdate(req.params.id,
            {
                // $set:{productname:req.body.productname},
                // $set:{quantity:req.body.quantity},
                // $set:{price:req.body.price},
                $set:{stock:req.body.stock},
                // $set:{discontinued:req.body.discontinued},
                // $set:{categotyid:req.body.categotyid}
            })
        const updatedDocument= await products.findById(req.params.id)

        res.send(updatedDocument)
    }catch(err){
        res.send('error ' + err)
    }
})

router.delete('/product/:id', async(req,res) => {
    try{
        const al = await products.findById(req.params.id)
        const a1 = await al.delete()
        res.send('deleted')
    }catch(err){
        res.send('error ' + err)
    }
})

module.exports = router