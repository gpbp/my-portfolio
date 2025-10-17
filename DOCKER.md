# Docker Setup for My Portfolio Frontend

This document explains how to containerize and deploy the application to AWS.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed (for local testing)
- AWS CLI configured (for AWS deployment)

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
MY_PORTFOLIO_BACKEND_API_URL=http://localhost:8080
```

## Local Testing with Docker Compose

The `docker-compose.yml` file is configured for **local testing only**.

1. **Build and start the container:**

   ```bash
   docker-compose up
   ```

   Or run in detached mode:

   ```bash
   docker-compose up -d
   ```

2. **View logs:**

   ```bash
   docker-compose logs -f frontend
   ```

3. **Stop the container:**

   ```bash
   docker-compose down
   ```

4. **Rebuild and restart:**
   ```bash
   docker-compose up --build
   ```

## AWS Deployment

### Option 1: AWS Elastic Container Service (ECS) / Fargate

1. **Build and tag the image:**

   ```bash
   docker build -t my-portfolio-frontend:latest .
   ```

2. **Authenticate with AWS ECR:**

   ```bash
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com
   ```

3. **Tag for ECR:**

   ```bash
   docker tag my-portfolio-frontend:latest <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/my-portfolio-frontend:latest
   ```

4. **Push to ECR:**

   ```bash
   docker push <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/my-portfolio-frontend:latest
   ```

5. **Deploy to ECS/Fargate** using AWS Console, CLI, or Infrastructure as Code (Terraform/CloudFormation)

### Option 2: AWS App Runner

1. **Build and push to ECR** (same as above)

2. **Create App Runner service:**
   ```bash
   aws apprunner create-service \
     --service-name my-portfolio-frontend \
     --source-configuration '{
       "ImageRepository": {
         "ImageIdentifier": "<aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/my-portfolio-frontend:latest",
         "ImageRepositoryType": "ECR"
       },
       "AutoDeploymentsEnabled": true
     }' \
     --instance-configuration '{
       "Cpu": "1024",
       "Memory": "2048"
     }'
   ```

### Option 3: AWS Amplify (Recommended for Next.js)

AWS Amplify can build and deploy your Next.js app directly from your Git repository without Docker.

1. **Connect your Git repository** to AWS Amplify
2. **Configure build settings** (Amplify auto-detects Next.js)
3. **Set environment variables** in Amplify Console
4. **Deploy automatically** on git push

See `amplify.yml` for build configuration.

## Access the Application

Once running, access the application at:

- **Frontend:** http://localhost:3000

## Docker Commands Cheat Sheet

**Local Testing:**

```bash
# Start local testing environment
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up --build

# Shell into running container
docker-compose exec frontend sh
```

**AWS Deployment:**

```bash
# Build for AWS
docker build -t my-portfolio-frontend:latest .

# Tag for ECR
docker tag my-portfolio-frontend:latest <account-id>.dkr.ecr.<region>.amazonaws.com/my-portfolio-frontend:latest

# Login to ECR
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com

# Push to ECR
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/my-portfolio-frontend:latest

# List ECR images
aws ecr list-images --repository-name my-portfolio-frontend
```

## Troubleshooting

### Port already in use

If port 3000 is already in use, modify the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000" # Use port 3001 instead
```

### Backend connection issues

Make sure the `MY_PORTFOLIO_BACKEND_API_URL` environment variable is correctly set and the backend is accessible from the container.

### Build failures

Clear Docker cache and rebuild:

```bash
docker-compose build --no-cache
```
