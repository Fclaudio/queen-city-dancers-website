const e = require('express');
const model = require('../models/danceSession')

exports.index = (req, res) =>{
    //res.send('send all available sessions');
    let danceSessions = model.find()
    res.render('./available_sessions/index', {danceSessions});
};

exports.new =  (req, res) =>{
    res.render('./available_sessions/newSession');
};

exports.create = (req, res) =>{
    //res.send('send a created new session');
    //console.log(req.body);
    let session = req.body;
    model.save(session);
    res.redirect('/available_sessions');
};

exports.show = (req, res, next) =>{
    //res.send('send session with id ' + req.params.id);
    let id = req.params.id;
    let session = model.findById(id);
    if(session) {
        res.render('./available_sessions/show', {session})
    } else{
        let err = new Error ('Cannot find a session with id ' + id);
        err.status = 404;
        next(err);
    }
    
};

exports.edit =  (req, res, next) =>{
    let id = req.params.id;
    let session = model.findById(id);
    if(session) {
        res.render('./available_sessions/edit', {session})
    }
    let err = new Error ('Cannot find a session with id ' + id);
    err.status = 404;
    next(err);
};

exports.update = (req, res, next) =>{
    let session = req.body;
    let id = req.params.id;
    if (model.updateById(id, session)){
        res.redirect('/available_sessions/' + id);
    } else {
        let err = new Error ('Cannot find a session with id ' + id);
        err.status = 404;
        next(err);
    }

};

exports.delete = (req, res, next) =>{
    let id = req.params.id;
    if (model.deleteById(id)){
        res.redirect('/available_sessions')
    } else {
        let err = new Error ('Cannot find a session with id ' + id);
        err.status = 404;
        next(err);
    }
}; 