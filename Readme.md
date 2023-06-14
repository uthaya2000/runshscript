# Steps to run application in local

### Step-1
- git clone `https://github.com/uthaya2000/runshscript.git`

### Step-2
- Run the cmd
```
    npm i
```

### Step-3
- Run the cmd
```
    node index.js
```

### Step-4
- Hit the following curl
```
curl --location 'http://localhost:3000/run' \
--header 'Content-Type: application/json' \
--data '{
    "config1": "Repoid",
    "config2": "message"
}'
```

