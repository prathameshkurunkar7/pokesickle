# pokesickle

**pokesickle** is a Node.js based CLI tool that gets all sorts of Pokemon related data from [PokeAPI](https://pokeapi.co/) onto our terminals.

## Installation

Use the fork and clone command for now to install pokesickle.

- Fork the repository.
- Clone the repository on your local machine.
- Do the following steps-
```bash
npm install
```

## Usage

To display help:
```bash
pokesickle -h
```
To command pokemon help:
```bash
pokesickle pokemon -h
```

To display sub-command of pokemon:
```bash
pokesickle pokemon show -h
```

Example to show pokemon by Id:
```bash
pokesickle pokemon show -id 3
```

Example to show pokemon by name:
```bash
pokesickle pokemon show -name charizard
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)