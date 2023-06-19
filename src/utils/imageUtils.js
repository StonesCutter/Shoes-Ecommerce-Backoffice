import Resizer from "react-image-file-resizer";

const maxSizeInBytes = 1000000;
const ratioStandard = 0.8;
const ratioTolerance = 0.01;

function encodeImageBase64(e, stateImage, state) {}

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1200,
      960,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

function decodeImageBase64(imageString) {
  let src = "`data:image/jpeg;base64,${" + imageString + "}`";
  return src;
}

function checkImageWeight(file) {
  let isWeightAcceptable = true;
  const fileSizeInBytes = file.size; // 1MB - maximum standard size for ecommerce pictures
  if (fileSizeInBytes > maxSizeInBytes) {
    isWeightAcceptable = false;
    /*alert(
      `File size too big. Maximum size allowed is ${maxSizeInBytes / 1000000}MB`
    );*/
  }
  return isWeightAcceptable;
}

function checkFileType(file) {
  let isTypeAcceptable = true;
  let dataType = file?.type;
  console.log("tipo del file caricato", dataType);
  if (dataType && dataType !== "image/png" && dataType !== "image/jpeg") {
    /*alert("You can insert only JPG or PNG file");*/
    isTypeAcceptable = false;
  }
  return isTypeAcceptable;
}

async function checkImageRatio(file) {
  let isRatioAcceptable = true;
  let imgRatio = null;
  const reader = new FileReader();
  reader.readAsDataURL(file);

  await new Promise((resolve) => {
    reader.onload = () => resolve();
  });

  const img = new Image();
  img.src = reader.result;

  await new Promise((resolve) => {
    img.onload = () => resolve();
  });

  imgRatio = img.width / img.height;
  //console.log("IMG ratio", imgRatio);
  if (
    imgRatio <= ratioStandard - ratioTolerance ||
    imgRatio >= ratioStandard + ratioTolerance
  ) {
    isRatioAcceptable = false;
    //alert("The ratio is fucked up!");
    //console.log("isRationAcceptable  1", isRatioAcceptable);
    return isRatioAcceptable;
  }

  //console.log("isRationAcceptable  2", isRatioAcceptable);
  return isRatioAcceptable;
}

function convertArrayImages(arr) {
  const productImages = arr.map((item) => {
    return {
      imagePath: item,
      altEng: "image",
      altIt: "immagine",
      imageNumber: 0,
      type: "desktop",
    };
  });
  return productImages;
}

export {
  encodeImageBase64,
  decodeImageBase64,
  resizeFile,
  checkImageWeight,
  checkFileType,
  checkImageRatio,
  convertArrayImages,
};
