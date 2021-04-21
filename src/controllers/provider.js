const Provider = require('../models/provider');

exports.listAllProviders = async (req, res) => {

    try {
        let comments = await Provider.find();
        if(posts) {
            res.status(200).json(posts);
        }
        else {
            return res.status(404).json('no providers in db');
        }
        
    }
    catch(error) {
        return res.status(501).json(error);
    }
}

exports.getProviderById = async (req, res) => {
    const { id } = req.params;

    try {
        let provider = await Provider.findById(id);

        if (provider) {
            return res.status(200).json(provider);
        }
        else {
            return res.status(404).json('provider_not_found');
        }
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.addProvider = async (req, res) => {

    try {
   
        let newProvider = new Provider();
        newProvider.id = req.body.id;
        newProvider.comment = req.body.comment;
        await newProvider.save();
        
        if(!newProvider){
            return res.status(200).send({
            status: 404,
            message: 'No data found'});
        }
        else {
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully'
            });
        }

    } catch (error) {
        return res.status(501).json(error);
    }

}

exports.updateProvider = async (req, res) => {
    const datas = {};

    ({ 
        id: datas.id,
        comment: datas.comment,
    } = req.body);

    try {
        let provider = await Provider.findOne({ id: datas.id });

        if (provider) {       
            Object.keys(datas).forEach((key) => {
                if (provider[key] != datas[key]) {
                    provider[key] = datas[key];
                }
            });
            
            await provider.save();
            return res.status(201).json(provider);
        }

        return res.status(404).json('provider_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.deleteProvider = async (req, res) => {
    const id = req.body.id;

    try {
        await Provider.deleteOne({ id: id });
        return res.status(204).json('provider_deleted');
    } catch (error) {
        return res.status(501).json(error);
    }
}