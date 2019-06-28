let id = 7;
const partsArr = [
  {
    id: 1,
    name: "9900K",
    type: "CPU",
    make: "Intel",
    favStatus: false,
    image:
      "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com//512483_831362_01_front_zoom.jpg"
  },
  {
    id: 2,
    name: "Ryzen 2700X",
    type: "CPU",
    make: "AMD",
    favStatus: true,
    image: "https://i.ebayimg.com/images/i/283144042277-0-1/s-l1000.jpg"
  },
  {
    id: 3,
    name: "GTX 1080Ti FTW3",
    type: "GPU",
    make: "EVGA",
    favStatus: false,
    image:
      "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com//478540_296145_04_front_zoom.jpg"
  },
  {
    id: 4,
    name: "RTX 2060 FE",
    type: "GPU",
    make: "Nvidia",
    favStatus: true,
    image: "https://pbs.twimg.com/media/DwY_ADgXgAE4sAx.jpg"
  },
  {
    id: 5,
    name: "Vengeance RGB Pro 16GB 2x8",
    type: "RAM",
    make: "Corsair",
    favStatus: true,
    image:
      "https://www.jib.co.th/img_master/product/original/20180718091708_30510_21_1.jpg"
  },
  {
    id: 6,
    name: "Ripjaws V 32GB 4x8",
    type: "RAM",
    make: "G.Skill",
    favStatus: false,
    image: "https://i.ebayimg.com/images/i/233107023452-0-1/s-l1000.jpg"
  }
];

module.exports = {
  //adding our parts array (partsArr), this is our axios.get, or componentDidMount
  getParts: (req, res) => {
    console.log("hit getParts");
    res.status(200).send(partsArr);
  },
  //adding a new part to our partsArr, this is the axios.post function
  addPart: (req, res) => {
    console.log("hit addPart");
    let { name, type, make, favorite, image } = req.body;

    let newPart = {
      id,
      name,
      type,
      make,
      favorite,
      image
    };

    partsArr.push(newPart);
    id++;

    res.status(200).send(partsArr);
  },
  //deleting a part at its id from the partsArr, this is axios.delete
  deletePart: (req, res) => {
    console.log("hit deletePart");
    const { id } = req.params;

    let index = partsArr.findIndex(part => part.id === +id);

    partsArr.splice(index, 1);

    res.status(200).send(partsArr);
  },

  updateFavStatus: (req, res) => {
    console.log("hit updateFavStatus");
    const { id } = req.params;
    const { favStatus } = req.body

    let index = partsArr.findIndex(part => part.id === +id);

    let updatedPart = {
        favStatus,
    }
    partsArry[index] = {...partsArr[index], ...updatedPart }
  }
};
