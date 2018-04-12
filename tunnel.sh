#!/bin/bash

function localtunnel {
  npx lt -s slack-rfx-doorbell --port 8765
}

until localtunnel; do
  echo "localtunnel server crashed"
  sleep 2
done