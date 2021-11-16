//Chalk Story

const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const log = console.log;

//Title and
log(chalk.yellow.bgBlue.inverse.bold.underline('The Prose of Daydream'));
chalkAnimation.radar('As I lock myself away, it is always there for me...')

//The base of the prose story
log('
  (______________________________________________________)
  | chalkAnimation.rainbow('Hello, welcome back! Are you okay? You look a little pale...')
  |
  | ${chalk.magenta.bold('There stands a daydream, a fantastical world drempt into existence')}
  | ${chalk.magenta('By a child seeking refuge from harsh reality.')}
  | ${chalk.blue('A world of pleasant experiences, where the child was always welcomed with open arms.')}
  | ${chalk.blue.underline('As the child grew into a student, he troubles did as well, and as such spent more time within the Daydream.')}
  | ${chalk.yellow('It began as a simple dream, to a maladaptive haven, not helped by the stressors of life.')}
  | ${chalk.yellow('His daydream was his only means to cope, as nothing else in the material world worked as well.')}
  | ${chalk.green.bold('But as he fell into depression, his griefs began to bleed into the Daydream.')}
  | ${chalk.red('What brought him happiness almost began to sour, his grief brought him to tears upon every visit.')}
  | ${chalk.red.inverse('Thankfully, the residents and memories of the Daydream were accepting, still able to comfort his fears.')}
  | ${chalk.cyan.bold.underline('Forever more, the Daydream still lingers within his mind, ready to accept him when he needs it most.')}
  (______________________________________________________)
')
chalkAnimation.karaoke('Short Tale by Chad Coburn.')
