import { Injectable } from "@angular/core";

import { FileDownloadService } from "@bitwarden/common/abstractions/fileDownload.service";
import { FileDownloadRequest } from "@bitwarden/common/models/domain/fileDownloadRequest";

import { BrowserApi } from "../browser/browserApi";

@Injectable()
export class BrowserFileDownloadService implements FileDownloadService {
  download(request: FileDownloadRequest): void {
    BrowserApi.downloadFile(
      request.window,
      request.blobData,
      request.blobOptions,
      request.fileName
    );
  }
}
