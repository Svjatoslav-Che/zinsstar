import { Injectable, Logger } from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';
@Injectable()
export class LoggerHelper {
    private logger: Logger = new Logger(LoggerHelper.name);

    constructor() { }

}