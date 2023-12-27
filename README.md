### [ `Description` ]
> - A CLI computer program that converts binary numbers to decimal numbers and vice versa.

> - The technologies are Typescript, Jest (Unit Test), Bash, NodeJS, Snapcraft, and GNU/Linux.

<br />

> - Snap Store: https://snapcraft.io/install/cli-bindec/ubuntu

<br />

> - Installation of the app.
```bash
# Install the app.
sudo snap install cli-bindec --edge

# Run the app.
snap run cli-bindec
```

<br />

https://github.com/kentlouisetonino/cli-nodejs-bindec/assets/69438999/aee91ddc-144d-4059-ad88-6969613f6f21

<br />
<br />
<br />



### [ `Development` ]
> - For manually executing the scripts.
```bash
yarn install
yarn build
yarn start
yarn test:all
```

<br />

> - Execute the app using the bash script.
```bash
# Change app permission and make it executable.
sudo chmod +x app

# Execute app.
./app
```

<br />

> - Execute the app-tests using the bash script.
```bash
# Change app-tests permission and make it executable.
sudo chmod +x app-tests

# Execute app-tests.
./app-tests
```

<br />

> - Deployment to snap store.
```bash
# Clean first the cache.
snapcraft clean

# Use to generate a binary.
snapcraft --debug

# Deploy to snap store.
snapcraft upload --release=edge <binary-name>_amd64.snap
```

