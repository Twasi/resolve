echo Resolve by Twasi

echo Starting mongodb...
mkdir /home/data > /dev/null
mongod --dbpath /home/data &

# Wait for mongodb to come up
sleep 3s

echo Starting resolve...
node index.js
