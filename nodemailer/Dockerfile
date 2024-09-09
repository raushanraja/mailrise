FROM node:20

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install nodemailer
RUN npm install nodemailer dotenv

# Copy the rest of the application code
COPY . .

# Command to run the Node.js script
CMD ["node", "index.js"]
