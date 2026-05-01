const connection = require ("../database/connection") 

const testConnection = async (req, res) => {
    try{
        await connection.raw("SELECT 1+1 AS RESULT")

        return res.json({message: "Banco conevtado com sucesso :)"})
    }catch(error){

        return res.status(500).json({
            message:"erro ao conectar ao banco :(",
            error: error
        })
 

    } 



 
}



module.exports = {
    testConnection
}