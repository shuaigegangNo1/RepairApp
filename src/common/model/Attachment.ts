/**
 * Created by huangxuewen on 2018/6/20.
 */
import {BaseCriteria} from './BaseCriteria';
import {BaseModule} from './BaseModule';
export class Attachment extends BaseModule {
    fileName?: string;
    filePath?: string;
    fileFormat?: string;
    repair_id?: number;
}

export class AttachmentCriteria extends BaseCriteria {
    repair_id: number;
    fileName: string;
    code: string;
}