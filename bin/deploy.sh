#!/bin/sh
cd $(dirname $0)/..

yarn generate
yarn deploy
