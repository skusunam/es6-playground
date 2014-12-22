/**
 * Created by kusunams on 12/21/14.
 */

class BaseLog {

    constructor(logName) {
        this.logName = logName;
    }

    log(message) {
        console.log(this.logName + ':' + message);
    }
}

class Logger extends BaseLog {

    constructor(logName) {
        super(logName);
    }

    writeLine(message) {
        super.log(message);
    }
}