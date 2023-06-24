import { TextField, Autocomplete } from '@mui/material';

const SearchWithSuggestion = ({ dataRow, searchVal, setSearchVal }) => {
    // Handle Auto complete to give as value..
    const handleAutoCompleteChange = (_, value) => {
        if (value) {
            setSearchVal(value);
        }
    };

    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={dataRow.map((option) => option.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Here.."
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        style: { height: '40px', marginTop: '0.5rem', fontSize: 18, paddingBottom: 40 },
                    }}
                    InputLabelProps={{
                        style: { fontSize: 18, paddingTop: 3 }
                    }}
                    value={searchVal}
                    onChange={(event) => setSearchVal(event.target.value)}
                />
            )}
            onChange={handleAutoCompleteChange}
        />
    );
};

export default SearchWithSuggestion;