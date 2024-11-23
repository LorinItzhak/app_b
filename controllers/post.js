const getAllPost = (req,res)=> {
    console.log("post get All service");
    res.send("post get All service");
};

const createPost = (req,res)=> {
    console.log("post create service");
    res.send("post create service");
};

const deleteAPost = (req,res)=> {
    console.log("delete a post");
    res.send("delete a post");
};

const updateAPost = (req,res)=> {
    console.log("update a post");
    res.send("update a post");
};



module.exports = { getAllPost , createPost, deleteAPost,updateAPost};