import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs = {12} md = {4}>
            <Card
            sx = {{height: '100%'}}
            >
                <CardMedia
                    image={poster}
                    alt={name}
                    title = {name}
                    sx = {{height: 140}} // высота картинки
                />
                <CardContent>
                    <Typography
                    variant = 'h6' // внешний вид
                    component = 'h3' // семантическое значение
                    >{name}
                    </Typography>
                    <Typography variant='body1'>Цена: {price} руб.</Typography>
                    </CardContent>
                    <CardActions>
                    <Button
                       variant='text' // внешний вид без рамок и фона
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
            </Grid>
    );
};

export default GoodsItem;