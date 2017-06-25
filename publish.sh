#!/bin/bash
FUNCTIONNAME=alexafixtures
REGION=eu-west-1

echo ---- Removing any existing zip files ----
rm index.zip
echo ---- Zipping up contents of src folder ----
cd src
zip -r index.zip * > /dev/null
cd ..
echo ---- Updating Lambda function code ----
aws lambda update-function-code --function-name $FUNCTIONNAME --zip-file fileb://src/index.zip --region $REGION
echo ---- COMPLETE! ----
