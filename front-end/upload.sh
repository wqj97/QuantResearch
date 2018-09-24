#!/usr/bin/env bash
IP=180.76.53.243
USER=root
source_dir=./build
dist_dir=/root/QuantResearch/back-end/public/public
#clean dir


#upload file
ssh $USER@$IP "rm -fr $dist_dir"
echo 正在上传文件
scp -C -r $source_dir $USER@$IP:$dist_dir
echo 🎉🎉🎉
