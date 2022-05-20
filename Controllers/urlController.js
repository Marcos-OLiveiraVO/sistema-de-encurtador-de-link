const UrlSchema = require("../Models/UrlSchema");
const shortid = require("shortid");

const addUrl = async (req, res) => {
  const hash = shortid.generate();

  try {
    const addUrlToDatabase = await new UrlSchema({
      original_url: req.body.original_url,
      newUrl: process.env.API_URL + `/${hash}`,
      hash: hash,
    });

    const saveUrl = await addUrlToDatabase.save();
    res.status(200).send(`url saved in dataBase`);
  } catch (err) {
    res.status(400).send(`an error ocorried ${err}`);
  }
};

const getUrl = async (req, res) => {
  const hash = req.params.hash;

  try {
    const urlSelected = await UrlSchema.findOne({ hash });

    if (urlSelected) {
      return res.status(200).redirect(urlSelected.original_url);
    }
  } catch (err) {
    res.status(400).send(`An error ocorried ${err}`);
  }
};

module.exports = { addUrl, getUrl };
