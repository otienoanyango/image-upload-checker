# image-upload-checker

App to check the dimensions and size of an uploaded image.

## Usage:
### Local:
Clone the repository and access the index.html through the browser

### Docker
```bash
git clone https://github.com/otienoanyango/image-upload-checker.git
cd image-upload-checker
docker build -t image-checker .
docker run -p 8080:80 image-checker
# Go to: http://localhost:8080
```
