import tsc from 'typescript';
import program from 'commander';

program
    .version('1.0.0')
    .option('--source <path>', 'path to the source file to index')
    .option('--database <path>', 'path to the generated Sourcetrail database file')
    .option('--clear', 'clear the database before indexing')
    .parse(process.argv);

console.log('source', program['source']);
console.log('database', program['database']);
console.log('clear', program['clear']);
