export const separateExtension = (filename: string): [string, string] => {
    const index = filename.lastIndexOf('.')
    return [filename.substring(0, index), filename.substring(index+1)]
}