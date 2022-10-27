import * as fs from 'fs'
const archiver = require('archiver')

const dir = './'
const exportDir = './'
const exportName = 'export'
const exportExt = 'zip'

const output = fs.createWriteStream(`${exportDir}${exportName}.${exportExt}`)
const archive = archiver('zip', {
    zlib: {
        level: 9
    }
})

archive.pipe(output)

output.on('close', () => {
    console.log(`Total export datas size(byte): ${archive.pointer()}`)
})

output.on('end', () => {
    console.log('end')
})

const except = new Array('node_modules', '.git', '.gitignore')
except.push(`${exportName}.${exportExt}`)

fs.readdir(dir, (err, files) => {

    files.forEach(file => {
        try {

            if (except.includes(file)) {
                return false
            }

            let isDir = fs.statSync(dir + file)
            isDir = isDir.isDirectory()

            if (isDir) {
                archive.directory(file + '/', file)
            } else {
                archive.append(fs.createReadStream(dir + file), {
                    name: file
                })
            }
        } catch (e) {
            return false
        }
    })

    archive.finalize()
})