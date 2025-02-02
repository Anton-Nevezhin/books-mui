import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  const {
    cartOpen,
    closeCart = Function.prototype,
    order,
    removeFromOrder,
  } = props;
  return (
    <Drawer
      anchor="right" // расположение
      open={cartOpen} // условие открытия
      onClose={closeCart} // функция открытия
    >
      <List sx={{ width: 800 }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />

        {!order.length ? (
          <ListItem>Корзина пуста!</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <>
                <BasketItem
                  key={item.name}
                  removeFromOrder={removeFromOrder}
                  {...item}
                />
                <Divider />
              </>
            ))}

            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость:{" "}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{" "}
                рублей.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
