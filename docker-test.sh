#!/bin/bash

# Simple Docker deployment test script
echo "Building Docker image..."
docker build -t tecso-team .

if [ $? -eq 0 ]; then
    echo "✅ Docker build successful!"
    
    echo "Starting container on port 8080..."
    docker run -d -p 8080:3000 --name tecso-test tecso-team
    
    if [ $? -eq 0 ]; then
        echo "✅ Container started successfully!"
        
        # Wait a bit for the server to start
        sleep 5
        
        # Test if the server responds
        echo "Testing server response..."
        curl -I http://localhost:8080
        
        if [ $? -eq 0 ]; then
            echo "✅ Server is responding!"
        else
            echo "❌ Server is not responding"
        fi
        
        # Cleanup
        echo "Cleaning up..."
        docker stop tecso-test
        docker rm tecso-test
    else
        echo "❌ Failed to start container"
    fi
else
    echo "❌ Docker build failed"
    exit 1
fi