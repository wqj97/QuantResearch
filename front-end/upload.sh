#!/usr/bin/env bash
IP=139.199.124.15
USER=root
source_dir=./build
dest_dir=/home/wwwroot/www.lyquant.com/public/public
key_path=./scripts/wanqj.key
#clean dir


#upload file
ssh $USER@$IP -i $key_path "rm -fr $dest_dir"
scp -C -i $key_path -r $source_dir $USER@$IP:$dest_dir
echo 🎉🎉🎉
