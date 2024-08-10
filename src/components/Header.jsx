import { ShoppingBasket } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = ({ handleCart, orderLen }) => {
  return (
    // за счет position='static' прижимаем AppBar к верху, чтобы он не закрывал другие компоненты
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6" // размер текста
          component="span" // тип текста
          sx={{ flexGrow: 1 }} // раздвигаем текст на всю ширину и отодвигаем иконку вправо до конца
        >
          Mui Shop
        </Typography>
        <IconButton
          color="inherit" // наследование цвета от Toolbar
          onClick={handleCart}
        >
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
