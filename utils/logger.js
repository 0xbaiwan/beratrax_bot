import chalk from 'chalk';

const logger = {
    log: (level, message, value = '') => {
        const now = new Date().toISOString();

        const colors = {
            info: chalk.green,    // 信息
            warn: chalk.yellow,   // 警告
            error: chalk.red,     // 错误
            success: chalk.blue,  // 成功
            debug: chalk.magenta, // 调试
        };

        const color = colors[level] || chalk.white;
        const levelTag = `[ ${level.toUpperCase()} ]`;
        const timestamp = `[ ${now} ]`;

        const formattedMessage = `${chalk.green("[ Beratrax-Bot ]")} ${chalk.cyanBright(timestamp)} ${color(levelTag)} ${message}`;

        let formattedValue = ` ${chalk.green(value)}`;
        if (level === 'error') {
            formattedValue = ` ${chalk.red(value)}`;
        }
        if (typeof value === 'object') {
            const valueColor = level === 'error' ? chalk.red : chalk.green;
            formattedValue = ` ${valueColor(JSON.stringify(value))}`;
        }

        console.log(`${formattedMessage}${formattedValue}`);
    },

    // 信息级别日志
    info: (message, value = '') => logger.log('info', message, value),
    // 警告级别日志
    warn: (message, value = '') => logger.log('warn', message, value),
    // 错误级别日志
    error: (message, value = '') => logger.log('error', message, value),
    // 成功级别日志
    success: (message, value = '') => logger.log('success', message, value),
    // 调试级别日志
    debug: (message, value = '') => logger.log('debug', message, value),
};

export default logger;
