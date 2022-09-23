const Ugovori = require('../models/main.model');

async function getStartPage(req, res, next) {
  const odjeljenje = new Ugovori();
  try {
    const response = await odjeljenje.getAllContracts();
    res.json(response);
  } catch (error) {
    next(error);
  }
}

const editUserData = (req, res, next) => {
  try{
    console.log(req.body);
    res.json('Dodano');
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getStartPage: getStartPage,
  editUserData: editUserData
}