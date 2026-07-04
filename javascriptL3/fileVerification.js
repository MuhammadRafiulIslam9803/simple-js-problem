let fileName = "#exp.mp4";

if (fileName.endsWith(".pdf") || fileName.endsWith(".docx") || fileName.endsWith(".txt") || fileName.startsWith("#")) {
    console.log(`The file name is valid: ${fileName}`);
}
else {
    console.log(`The file name is invalid: ${fileName}`);
}