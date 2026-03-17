# Stage 1: Build the application
FROM maven:3.8.5-openjdk-17-slim AS build
WORKDIR /app
COPY pom.xml .
# Download dependencies (this step is cached unless pom.xml changes)
RUN mvn dependency:go-offline -B
# Copy source code and build
COPY src ./src
# Build the jar file, skipping tests to ensure faster and reliable deploy
RUN mvn clean package -DskipTests

# Stage 2: Create the runtime image
FROM openjdk:17-jdk-slim
WORKDIR /app
# Copy the compiled executable jar from the build stage
COPY --from=build /app/target/*.jar app.jar
# Expose port (Render automatically assigns a PORT env variable, Spring Boot uses server.port)
EXPOSE 8080
# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
