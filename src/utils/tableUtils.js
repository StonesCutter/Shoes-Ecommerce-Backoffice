import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const productsListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/products/product-details`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/products/edit-product`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    action: "delete",
  },
];

export const ordersListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/orders/order-details`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/orders/edit-order`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    action: "delete",
  },
];

export const couponsListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/coupons/coupon-details`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/coupons/edit-coupon`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    action: "delete",
  },
];

export const usersListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/users/user-details`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/users/edit-user`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    action: "delete",
  },
];

export const ordersColumns = [
  { id: "id", label: "id" },
  { id: "user_id", label: "userId" },
  { id: "created_at", label: "date" },
  { id: "payment_status", label: "paymentStatus" },
  { id: "status", label: "status" },
  { id: "total_price", label: "total" },
  { id: "transaction", label: "transaction" },
  { id: "actions", label: "actions" },
];

export const recentOrdersColumns = [
  { id: "user_id", label: "userId" },
  { id: "created_at", label: "date" },
  { id: "payment_status", label: "paymentStatus" },
];

export const productsColumns = [
  { id: "id", label: "id" },
  { id: "image_preview", label: "image" },
  { id: "brand", label: "brand" },
  { id: "name", label: "name" },
  { id: "category", label: "category" },
  { id: "starting_price", label: "price" },
  { id: "actions", label: "actions" },
];

export const couponsColumns = [
  { id: "id", label: "id" },
  { id: "code", label: "code" },
  { id: "max_usages", label: "maxUsages" },
  { id: "expire_date", label: "expireDate" },
  { id: "status", label: "status" },
  { id: "type", label: "type" },
  { id: "value", label: "value" },
  { id: "min_order", label: "minOrder" },
  { id: "actions", label: "actions" },
];

export const usersColumns = [
  { id: "id", label: "id" },
  { id: "first_name", label: "name" },
  { id: "last_name", label: "surname" },
  { id: "email", label: "email" },
  { id: "telephone", label: "telephone" },
  { id: "birth_date", label: "birthdate" },
  { id: "actions", label: "actions" },
];
