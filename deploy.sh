#!/usr/bin/sh

echo "Stopping webstash container";
docker stop webstash;
echo "Removing webstash container";
docker rm webstash;
echo "Removing webstash image";
docker rmi gouthamshiv/webstash;
echo "pulling latest source-code for webstash";
git stash && git pull origin master;
echo "Update submodules";
git submodule update --init --recursive;
echo "Copy external assets";
cp -R ../external-assets/* ./img;
echo "Building webstash image using latest source-code";
docker build -t gouthamshiv/webstash:latest .;
echo "Starting webstash container";
docker run -d --name webstash --network nginx-pm_default --restart always gouthamshiv/webstash:latest;
echo "Success!";
