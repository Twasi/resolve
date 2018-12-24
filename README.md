# Resolve
Cache to convert twitch ids to usernames and vice versa. Also supplies a name history. https://resolve.twasi.net

## Installation
To install the service, use docker. Either build it yourself (look at build.sh) or use the prebuilt.

Run command: `sudo docker run --name resolve --network="nginx-reverse-proxy" -v /home/twasi/resolve/.data:/home/data twasi/resolve`

## Functions & Behaviour
Basic requests format:
1. Request a twitch id to a given name
2. Request a name to a given twitch id
3. Update the stored information

Please note that resolve has a connection to the twitch api, but it does not update the recods by itself.

## Web UI
Everyone has read access to the cache. Just go over to https://resolve.twasi.net and enter a twitch id or name.

## API
Read access is granted to everyone, while write access is internal and restricted.

### API definition

