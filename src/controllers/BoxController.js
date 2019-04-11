const Box = require('../models/Box');

class BoxController{
    async store(req, res){
        const box = await Box.create(req.body);
        
        return res.send(box);
    }

    async show(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: "files",
            option: { sort: { createAt: -1}}
        });
        return res.json(box);
    }
}

module.exports = new BoxController();
// new para retornar as instancias da classe, 
// para assim conseguir acessar os metodos da classe