#!/usr/bin/env bash
IP=180.76.97.240
USER=root
source_dir=./build
dest_dir=/home/wwwroot/www.lyquant.com/public/public
key_path=./scripts/wanqj.key
#clean dir


#upload file
ssh $USER@$IP -i $key_path "rm -fr $dest_dir"
echo 正在上传文件
scp -C -i $key_path -r $source_dir $USER@$IP:$dest_dir
echo 🎉🎉🎉
