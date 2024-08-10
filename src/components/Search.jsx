import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
    label='search'
    type='search'
    variant="standard"
    fullWidth // на всю ширину экрана
    value={value}
    onChange={onChange}
    sx = {{
        mb: '1.5rem' // отступ от строки поиска вниз
    }} />;
};

export default Search;