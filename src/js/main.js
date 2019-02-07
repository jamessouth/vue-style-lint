import lint from './lint';
import resultReporter from './util/resultReporter';

export default async function vueStyleLint(arg) {
  let result = null;
  try {
    if (!arg) throw new Error('A path is required.  It can be a file or a directory.');
    result = await lint(arg);
    resultReporter(result);
  } catch (err) {
    console.log(err.message);
  }
}
