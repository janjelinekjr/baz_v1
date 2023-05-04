export default function isCsv(filename: any): boolean {
    console.log(filename);

    return filename.split('.').pop() === 'csv' ? true : false;
}
