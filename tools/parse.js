const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const xlsx = require('xlsx');

async function extract() {
    const uploadsDir = 'C:/Projects/Newvion Boat Company/Uploads/Newvion Boat Company';
    
    function findFiles(dir, ext, fileList = []) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                findFiles(filePath, ext, fileList);
            } else if (filePath.toLowerCase().endsWith(ext)) {
                fileList.push(filePath);
            }
        }
        return fileList;
    }

    const docxFiles = findFiles(uploadsDir, '.docx');
    console.log("=== WORD DOCUMENTS ===");
    for (const file of docxFiles) {
        console.log(`\n\n--- EXTRACTING: ${path.basename(file)} ---`);
        try {
            const result = await mammoth.extractRawText({path: file});
            console.log(result.value.substring(0, 1500) + '\n[...truncated for brevity...]'); 
        } catch(e) {
            console.log("Error reading file:", e.message);
        }
    }
    
    const xlsxFiles = findFiles(uploadsDir, '.xlsx');
    console.log("\n\n=== EXCEL DOCUMENTS ===");
    for (const file of xlsxFiles) {
        console.log(`\n\n--- EXTRACTING: ${path.basename(file)} ---`);
        try {
            const workbook = xlsx.readFile(file);
            const sheetName = workbook.SheetNames[0];
            const csv = xlsx.utils.sheet_to_csv(workbook.Sheets[sheetName]);
            console.log(csv.substring(0, 1500) + '\n[...truncated for brevity...]');
        } catch(e) {
            console.log("Error reading file:", e.message);
        }
    }
}
extract().catch(console.error);
