import { FileDownloadRequest } from "../models/domain/fileDownloadRequest";

export abstract class FileDownloadService {
  download: (request: FileDownloadRequest) => void;
}
