function modifyFormProps(formFields, stateEntity) {
  if (!stateEntity) return;
  let newformProps = [];

  for (let i = 0; i < formFields.length; i++) {
    newformProps.push({
      ...formFields[i],
      defaultValue: stateEntity[formFields[i].name],
    });
  }
  console.log("OLD FORM PROPS", personalAreaFormProps);
  console.log("NEW FORM PROPS", newformProps);

  return newformProps;
}

// check standard
const checkTextInput = {
  required: "This input is required.",
  minLength: {
    value: 11,
    message: "This input must exceed 10 characters",
  },
};

const checkEmailInput = {
  required: "Email is required.",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
};

// const checkPasswordInput = {
//   required: "Password is required.",
//   minLength: {
//     value: 3,
//     message: "Password must be at least 3 characters",
//   },
// };

// inputs
const addProductFormProps = [
  {
    label: "name", // prodotto
    type: "text",
    id: "name",
    name: "name",
    required: true,
  },

  {
    label: "brand", // marca
    type: "text",
    id: "brand",
    name: "brand",
    required: true,
  },
  {
    label: "color", // colore
    type: "text",
    id: "color",
    name: "color",
    required: true,
  },
  /*{
    label: "size", // taglia
    type: "number",
    id: "size",
    name: "size",
    required: true,
  },*/
  {
    label: "startingPrice", //  prezzo
    type: "number",
    id: "startingPrice",
    name: "startingPrice",
    required: true,
  },
  {
    label: "listedPrice", //  prezzo
    type: "number",
    id: "listedPrice",
    name: "listedPrice",
    required: true,
  },
  /*{
    label: "quantity", // quantità
    type: "number",
    id: "quantity",
    name: "quantity",
    required: true,
  },*/
  {
    label: "type", // tipo
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "descriptionIt", // descrizione it
    type: "text",
    id: "descriptionIt",
    name: "descriptionIt",
    required: true,
  },
  {
    label: "descriptionEn", // descrizione en
    type: "text",
    id: "descriptionEng",
    name: "descriptionEng",
    required: true,
  },
  {
    label: "category", // categoria
    type: "text",
    id: "category",
    name: "category",
    required: true,
  },
  /*
  {
    label: "listed", // in vendita ?
    type: "number",
    id: "is_listed",
    name: "is_listed",
    required: true,
  },*/
  /*
  {
    label: "image", // immagine
    type: "file", //????
    id: "image_1",
    name: "image_1",
    required: false,
    accept: "image/jpeg",
  },
  {
    label: "image", // immagine
    type: "file", //????
    id: "image_2",
    name: "image_2",
    required: false,
    accept: "image/png, image/jpeg",
  },
  {
    label: "image", // immagine
    type: "file", //????
    id: "image_3",
    name: "image_3",
    required: false,
    accept: "image/png, image/jpeg",
  },*/

  /*{
    label: "date", // immagine
    type: "date", //????
    id: "date",
    name: "date",
    required: true,
  },*/
];

const addProductDetailsFormProps = [
  {
    label: "isListed", //  prezzo
    type: "checkbox",
    id: "is_listed",
    name: "is_listed",
    required: true,
  },
  {
    label: "quantity", //  prezzo
    type: "number",
    id: "quantity",
    name: "quantity",
    required: true,
  },
  {
    label: "sellingPrice", //  prezzo
    type: "number",
    id: "selling_price",
    name: "selling_price",
    required: true,
  },
  {
    label: "size",
    type: "text",
    id: "size",
    name: "size",
    required: false,
  },
];

const addDiscountFormProps = [
  {
    label: "value", //  prezzo
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "expireDate", // quantità
    type: "date",
    id: "expireDate",
    name: "expireDate",
    required: true,
  },
];

const modifyDiscountFormProps = [
  {
    label: "value", //  prezzo
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "expireDate", // quantità
    type: "date",
    id: "expireDate",
    name: "expireDate",
    required: true,
  },
];

const addOrderFormProps = [
  {
    label: "paymentStatus",
    type: "text",
    id: "payment_status",
    name: "payment_status",
    required: true,
    errors: checkTextInput,
  },
  {
    label: "ID indirizzo",
    type: "text",
    id: "address_id",
    name: "address_id",
    required: true,
  },
  {
    label: "name",
    type: "text",
    id: "name",
    name: "name",
    required: false,
  },
  {
    label: "status",
    type: "text",
    id: "status",
    name: "status",
    required: true,
    errors: checkTextInput,
  },
  {
    label: "transaction",
    type: "number",
    id: "transaction",
    name: "transaction",
    required: true,
  },
  {
    label: "userId",
    type: "number",
    id: "user_id",
    name: "user_id",
    required: true,
  },
  {
    label: "coupon ID",
    type: "number",
    id: "coupon_id",
    name: "coupon_id",
    required: false,
  },
];

const addCouponFormProps = [
  {
    label: "code", //  prezzo
    type: "text",
    id: "code",
    name: "code",
    required: true,
  },
  {
    label: "value",
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "maxUsages",
    type: "number",
    id: "max_usages",
    name: "max_usages",
    required: true,
  },
  {
    label: "userId",
    type: "number",
    id: "user_id",
    name: "user_id",
    required: false,
  },
  {
    label: "expireDate",
    type: "date",
    id: "expire_date",
    name: "expire_date",
    required: false,
  },
  {
    label: "type",
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "minOrder",
    type: "number",
    id: "min_order",
    name: "min_order",
    required: false,
  },
  {
    label: "descriptionIt",
    type: "text",
    id: "description_it",
    name: "description_it",
    required: false,
  },
  {
    label: "descriptionEn",
    type: "text",
    id: "description_eng",
    name: "description_eng",
    required: false,
  },
];

const modifyCouponFormProps = [
  {
    label: "id",
    type: "number",
    id: "id",
    name: "id",
    required: true,
  },
  {
    label: "code", //  prezzo
    type: "text",
    id: "code",
    name: "code",
    required: true,
  },
  {
    label: "maxUsages",
    type: "number",
    id: "max_usages",
    name: "max_usages",
    required: true,
  },
  {
    label: "userId",
    type: "number",
    id: "user_id",
    name: "user_id",
    required: false,
  },
  {
    label: "expireDate",
    type: "date",
    id: "expire_date",
    name: "expire_date",
    required: false,
  },
  {
    label: "type",
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "value",
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "minOrder",
    type: "number",
    id: "min_order",
    name: "min_order",
    required: false,
  },
  {
    label: "descriptionIt",
    type: "text",
    id: "description",
    name: "description_it",
    required: false,
  },
  {
    label: "descriptionEn",
    type: "text",
    id: "description_eng",
    name: "description_eng",
    required: false,
  },
];

// PERSONAL AREA

const personalAreaFormProps = [
  {
    label: "name",
    type: "text",
    id: "first_name",
    name: "first_name",
    required: true,
  },
  {
    label: "surname",
    type: "text",
    id: "last_name",
    name: "last_name",
    required: true,
  },
  {
    label: "email",
    type: "text",
    id: "email",
    name: "email",
    required: true,
  },
  {
    label: "password",
    type: "password",
    id: "password",
    name: "password",
    required: true,
  },
  {
    label: "birthDate",
    type: "date",
    id: "birth_date",
    name: "birth_date",
    required: true,
  },
  {
    label: "phoneNumber",
    type: "number",
    id: "telephone",
    name: "telephone",
    required: true,
  },
];

const modifyOrderFormProps = [
  {
    label: "status",
    type: "text",
    id: "status",
    name: "status",
    required: true,
    errors: checkTextInput,
  },
];

const addUserFormProps = [
  // name, surname, email, password, telephone(optional), birthDate, role

  {
    label: "name",
    type: "text",
    id: "first_name",
    name: "first_name",
    required: true,
  },
  {
    label: "lastName",
    type: "text",
    id: "last_name",
    name: "last_name",
    required: true,
  },
  {
    label: "email",
    type: "text",
    id: "email",
    name: "email",
    required: false,
  },
  {
    label: "password",
    type: "password",
    id: "password",
    name: "password",
    required: true,
  },
  {
    label: "telephone",
    type: "text",
    id: "telephone",
    name: "telephone",
    required: false,
  },
  {
    label: "birthDate",
    type: "date",
    id: "birth_date",
    name: "birth_date",
    required: false,
  },
  {
    label: "role",
    type: "select",
    id: "authorities",
    name: "authorities",
    required: true,
  },
];

const modifyUserFormProps = [
  {
    label: "id",
    type: "number",
    id: "id",
    name: "id",
    required: true,
  },
  {
    label: "lastName",
    type: "text",
    id: "last_name",
    name: "last_name",
    required: true,
  },
  {
    label: "name",
    type: "text",
    id: "first_name",
    name: "first_name",
    required: true,
  },
  {
    label: "telephone",
    type: "text",
    id: "telephone",
    name: "telephone",
    required: false,
  },
  {
    label: "email",
    type: "text",
    id: "email",
    name: "email",
    required: false,
  },
  {
    label: "birthDate",
    type: "date",
    id: "birth_date",
    name: "birth_date",
    required: false,
  },
  {
    label: "role",
    type: "select",
    id: "authorities",
    name: "authorities",
    required: true,
  },
];

const modifyProductFormProps = [
  // name, description_it, description_eng, is_listed, color, sizes, images, brand, listedPrice, type, category, id, quantity
  {
    label: "name",
    type: "text",
    id: "name",
    name: "name",
    required: true,
  },
  {
    label: "descriptionIt",
    type: "text",
    id: "descriptionIt",
    name: "descriptionIt",
    required: false,
  },
  {
    label: "descriptionEn",
    type: "text",
    id: "descriptionEn",
    name: "descriptionEn",
    required: false,
  },
  {
    label: "isListed",
    type: "checkbox",
    id: "isListed",
    name: "isListed",
    required: true,
  },
  {
    label: "colour",
    type: "text",
    id: "colour",
    name: "colour",
    required: true,
  },
  {
    label: "sizes",
    type: "text",
    id: "sizes",
    name: "sizes",
    required: true,
  },
  {
    label: "images",
    type: "text",
    id: "images",
    name: "images",
    required: true,
  },
  {
    label: "brand",
    type: "text",
    id: "brand",
    name: "brand",
    required: true,
  },
  {
    label: "listedPrice",
    type: "number",
    id: "listedPrice",
    name: "listedPrice",
    required: true,
  },
  {
    label: "type",
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "category",
    type: "text",
    id: "category",
    name: "category",
    required: true,
  },
  {
    label: "id",
    type: "text",
    id: "id",
    name: "id",
    required: true,
  },
  {
    label: "quantity",
    type: "number",
    id: "quantity",
    name: "quantity",
    required: true,
  },
];

const loginFormProps = [
  {
    label: "email",
    type: "text",
    id: "email",
    name: "email",
    placeholder: "email",
    required: true,
    errors: checkEmailInput,
  },
  {
    label: "password",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "password",
    required: true,
  },
];

const addAddressFormProps = [
  {
    label: "label",
    type: "text",
    id: "label",
    name: "label",
    required: true,
  },
  {
    label: "nameSurname",
    type: "text",
    id: "name_surname",
    name: "name_surname",
    required: true,
  },
  {
    label: "streetAddress",
    type: "text",
    id: "street_address",
    name: "street_address",
    required: true,
  },
  {
    label: "zipcode",
    type: "text",
    id: "zipcode",
    name: "zipcode",
    required: true,
  },
  {
    label: "telephone",
    type: "text",
    id: "telephone",
    name: "telephone",
    required: true,
  },
  {
    label: "country",
    type: "text",
    id: "country",
    name: "country",
    required: true,
  },
  {
    label: "instructions",
    type: "text",
    id: "instructions",
    name: "instructions",
    required: false,
  },
];

export {
  addProductFormProps,
  addDiscountFormProps,
  addUserFormProps,
  addOrderFormProps,
  addCouponFormProps,
  modifyDiscountFormProps,
  modifyCouponFormProps,
  modifyOrderFormProps,
  personalAreaFormProps,
  modifyProductFormProps,
  modifyUserFormProps,
  loginFormProps,
  addAddressFormProps,
  modifyFormProps,
  addProductDetailsFormProps,
};
